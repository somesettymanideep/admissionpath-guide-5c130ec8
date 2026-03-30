import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const courses = [
  "B.Tech / Engineering",
  "M.Tech / Postgraduate Engineering",
  "Other",
];

const LeadForm = ({ compact = false }: { compact?: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.course) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Thank you! Our counselor will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "" : "rounded-xl border border-border bg-card p-6 card-elevated"}`}>
      {!compact && <h3 className="text-lg font-bold text-foreground">Get Free Counseling</h3>}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div>
          <Label>Course Interested *</Label>
          <Select value={formData.course} onValueChange={(val) => setFormData({ ...formData, course: val })}>
            <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
            <SelectContent>
              {courses.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="w-full">Submit Inquiry</Button>
    </form>
  );
};

export default LeadForm;
