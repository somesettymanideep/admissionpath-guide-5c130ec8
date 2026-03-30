import { CheckCircle, Phone, MessageCircle, FileText, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const steps = [
  { icon: Phone, title: "Free Counseling Call", desc: "Speak with our expert counselor to understand your options." },
  { icon: ClipboardList, title: "Profile Assessment", desc: "We evaluate your marks, preferences, and budget." },
  { icon: FileText, title: "College Shortlisting", desc: "Get a curated list of colleges matching your profile." },
  { icon: CheckCircle, title: "Admission Secured", desc: "We handle the entire application and admission process." },
];

const Admissions = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground lg:text-5xl">
            Direct Admission Support for Top Private Colleges
          </h1>
          <p className="mb-6 text-lg text-primary-foreground/80">
            Expert guidance for Management Quota & Direct Admissions in B.Tech and M.Tech Engineering programs across India.
          </p>
          <a href="#inquiry-form">
            <Button size="lg" variant="secondary">
              Get Started — It's Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 text-center card-elevated">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              <step.icon className="mx-auto mb-3 mt-2 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services detail */}
    <section className="bg-accent py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground">Our Admission Services</h2>
            <ul className="space-y-4">
              {[
                "Direct admission in private engineering colleges (B.Tech)",
                "M.Tech admission guidance in top universities",
                "Management quota seat assistance for engineering",
                "NRI quota & international engineering admissions",
                "Lateral entry B.Tech admissions",
                "GATE counseling and M.Tech seat allocation support",
                "Complete documentation and application handling",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">📋 Document Checklist</h3>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-2 text-sm text-foreground">
                {[
                  "10th & 12th Marksheets",
                  "Entrance Exam Scorecard",
                  "Transfer Certificate (TC)",
                  "Migration Certificate",
                  "Passport-size Photos (6 copies)",
                  "Aadhaar Card / ID Proof",
                  "Category Certificate (if applicable)",
                  "Gap Certificate (if applicable)",
                ].map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" /> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <MessageCircle className="h-8 w-8 text-secondary" />
              <div>
                <p className="font-semibold text-foreground">Quick Contact via WhatsApp</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Chat with us on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lead form */}
    <section id="inquiry-form" className="py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground">Start Your Admission Process</h2>
          <p className="mb-8 text-center text-muted-foreground">Fill in your details and our counselor will reach out within 24 hours.</p>
          <LeadForm />
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="border-t border-border bg-muted py-6">
      <div className="container">
        <p className="text-center text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> AdmissionCareerGuide is an independent counseling service. We do not guarantee admission to any specific college. 
          All services are advisory in nature. Admission decisions are made solely by respective institutions. 
          We strongly advise verifying all information directly with the concerned colleges before making any financial commitments.
        </p>
      </div>
    </section>
  </div>
);

export default Admissions;
