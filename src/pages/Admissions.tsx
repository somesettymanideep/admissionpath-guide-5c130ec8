import { CheckCircle, Phone, MessageCircle, FileText, ClipboardList, ArrowRight, Compass, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const steps = [
  { icon: Phone, title: "Free Counseling Call", desc: "Speak with our counselor to understand your college options." },
  { icon: ClipboardList, title: "Profile Assessment", desc: "We review your marks, preferences, and budget to find the right fit." },
  { icon: Compass, title: "College Shortlisting", desc: "Receive a curated list of colleges that match your profile and goals." },
  { icon: Users, title: "Decision Support", desc: "We help you compare colleges and make an informed final decision." },
];

const Guidance = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground lg:text-5xl">
            Expert College Guidance for Engineering Students
          </h1>
          <p className="mb-6 text-lg text-primary-foreground/80">
            We help you choose the right B.Tech or M.Tech college based on your profile, budget, and career goals. We don't handle admissions — we guide you to make the best decision.
          </p>
          <a href="#inquiry-form">
            <Button size="lg" variant="secondary">
              Get Free Guidance <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">How Our Guidance Works</h2>
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
            <h2 className="mb-6 text-3xl font-extrabold text-foreground">Our Guidance Services</h2>
            <ul className="space-y-4">
              {[
                "Personalized college selection guidance for B.Tech students",
                "M.Tech college comparison and career path counseling",
                "Help understanding NRI quota eligibility and options",
                "Lateral entry B.Tech college information and guidance",
                "GATE score-based college exploration and counseling",
                "Document checklist preparation and application tips",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">📋 Common Documents Needed</h3>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs text-muted-foreground mb-3">These documents are typically required by colleges. We help you understand what's needed.</p>
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
                <a href="https://wa.me/917013978887" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
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
          <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground">Get Free College Guidance</h2>
          <p className="mb-8 text-center text-muted-foreground">Fill in your details and our counselor will help you choose the right college.</p>
          <LeadForm />
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="border-t border-border bg-muted py-6">
      <div className="container">
        <p className="text-center text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> AdmissionCareerGuide is an independent guidance and counseling service. We do not process, manage, or guarantee admissions to any college or university. 
          Our role is limited to helping students explore and compare colleges to make informed decisions. All final decisions and applications are made by students directly with respective institutions.
        </p>
      </div>
    </section>
  </div>
);

export default Guidance;
