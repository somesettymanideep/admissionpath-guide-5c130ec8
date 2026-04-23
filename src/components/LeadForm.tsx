import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { addLead } from "@/lib/leadsStore";

const EMAILJS_SERVICE_ID = "service_uszr8os";
const EMAILJS_TEMPLATE_ID = "template_dlcnwbo";
const EMAILJS_PUBLIC_KEY = "Z5prbB_SqrMPjy0oS";

const courses = [
  "B.Tech / Engineering",
  "M.Tech / Postgraduate Engineering",
  "Other",
];

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(200),
  phone: z.string().trim().min(5, "Valid phone required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  course: z.string().trim().min(1, "Select a course").max(200),
});

const LeadForm = ({ compact = false }: { compact?: boolean }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(formData);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    try {
      addLead({
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email || null,
        course: parsed.data.course,
        source: "website",
        notes: null,
      });

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: parsed.data.name,
            phone: parsed.data.phone,
            email: parsed.data.email || "Not provided",
            course: parsed.data.course,
            time: new Date().toLocaleString(),
          },
          { publicKey: EMAILJS_PUBLIC_KEY },
        );
      } catch (err) {
        console.error("EmailJS send failed:", err);
      }

      toast.success("Thank you! Our counselor will contact you shortly with guidance.");
      setFormData({ name: "", phone: "", email: "", course: "" });
    } catch {
      toast.error("Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "" : "rounded-xl border border-border bg-card p-6 card-elevated"}`}>
      {!compact && <h3 className="text-lg font-bold text-foreground">Get Free College Guidance</h3>}
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
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Get Guidance"}
      </Button>
    </form>
  );
};

export default LeadForm;
