import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Download, Upload, Trash2, LogOut, RefreshCw, Search } from "lucide-react";
import { format } from "date-fns";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  course: string | null;
  source: string | null;
  notes: string | null;
  created_at: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate("/admin/login", { replace: true });
  }, [user, isAdmin, loading, navigate]);

  const fetchLeads = async () => {
    setFetching(true);
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    setFetching(false);
    if (error) {
      toast.error("Failed to fetch leads");
      return;
    }
    setLeads(data as Lead[]);
  };

  useEffect(() => {
    if (user && isAdmin) fetchLeads();
  }, [user, isAdmin]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
      return;
    }
    toast.success("Lead deleted");
    fetchLeads();
  };

  const handleExport = () => {
    const rows = leads.map((l) => ({
      name: l.name,
      phone: l.phone,
      email: l.email ?? "",
      course: l.course ?? "",
      source: l.source ?? "",
      notes: l.notes ?? "",
      created_at: l.created_at,
    }));
    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${rows.length} leads`);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (result) => {
        const valid = result.data
          .map((r) => ({
            name: (r.name || "").trim().slice(0, 200),
            phone: (r.phone || "").trim().slice(0, 30),
            email: (r.email || "").trim().slice(0, 255) || null,
            course: (r.course || "").trim().slice(0, 200) || null,
            source: (r.source || "csv-import").trim().slice(0, 50),
            notes: (r.notes || "").trim().slice(0, 2000) || null,
          }))
          .filter((r) => r.name && r.phone.length >= 5);

        if (valid.length === 0) {
          toast.error("No valid rows found. Required columns: name, phone");
          if (fileRef.current) fileRef.current.value = "";
          return;
        }

        const { error } = await supabase.from("leads").insert(valid);
        if (error) {
          toast.error(`Import failed: ${error.message}`);
        } else {
          toast.success(`Imported ${valid.length} leads`);
          fetchLeads();
        }
        if (fileRef.current) fileRef.current.value = "";
      },
      error: () => {
        toast.error("Could not parse CSV");
        if (fileRef.current) fileRef.current.value = "";
      },
    });
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    return !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || (l.email ?? "").toLowerCase().includes(q);
  });

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-muted/30 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Manage guidance form leads</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchLeads} disabled={fetching}>
              <RefreshCw className={`mr-2 h-4 w-4 ${fetching ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>

        <Card className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by name, phone, email..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Button variant="outline" onClick={() => fileRef.current?.click()}>
              <Upload className="mr-2 h-4 w-4" /> Import CSV
            </Button>
            <input ref={fileRef} type="file" accept=".csv" onChange={handleImport} className="hidden" />
            <Button onClick={handleExport} disabled={leads.length === 0}>
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>

          <div className="text-sm text-muted-foreground mb-3">
            Showing {filtered.length} of {leads.length} leads
          </div>

          <div className="overflow-x-auto rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">No leads yet</TableCell></TableRow>
                ) : filtered.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="font-medium">{l.name}</TableCell>
                    <TableCell>{l.phone}</TableCell>
                    <TableCell>{l.email || "—"}</TableCell>
                    <TableCell>{l.course || "—"}</TableCell>
                    <TableCell><span className="text-xs px-2 py-0.5 rounded bg-muted">{l.source || "—"}</span></TableCell>
                    <TableCell className="whitespace-nowrap text-sm">{format(new Date(l.created_at), "dd MMM yyyy, HH:mm")}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(l.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            <strong>CSV import format:</strong> Columns required — <code>name</code>, <code>phone</code>. Optional — <code>email</code>, <code>course</code>, <code>source</code>, <code>notes</code>.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
