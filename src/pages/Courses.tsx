import { BookOpen, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const streams = [
  {
    icon: Briefcase,
    title: "B.Tech (Undergraduate Engineering)",
    after: "After 12th (PCM)",
    careers: ["Software Engineer", "Data Scientist", "Civil Engineer", "Mechanical Engineer"],
    avgSalary: "₹4-12 LPA",
    topExams: "JEE Main, VITEEE, BITSAT, SRMJEEE",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    title: "M.Tech (Postgraduate Engineering)",
    after: "After B.Tech / B.E.",
    careers: ["Senior Engineer", "Research Scientist", "Technical Lead", "Professor"],
    avgSalary: "₹8-20 LPA",
    topExams: "GATE, University Entrance",
    color: "text-secondary",
  },
];

const pathways = [
  { stage: "After 10th", options: ["Science (PCM/PCB)", "Commerce", "Arts/Humanities", "Diploma (Polytechnic)", "ITI / Vocational"] },
  { stage: "After 12th", options: ["B.Tech / B.E.", "MBBS / BDS", "BBA / B.Com", "BA / B.Sc", "Law (BA-LLB)", "Design / Architecture"] },
  { stage: "After Graduation", options: ["M.Tech / M.Sc", "MBA / PGDM", "LLB / LLM", "Civil Services (UPSC)", "PhD / Research", "Professional Certifications"] },
];

const Courses = () => (
  <div>
    {/* Header */}
    <section className="hero-gradient py-16">
      <div className="container text-center">
        <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary-foreground" />
        <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground lg:text-5xl">Course & Career Guidance</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Explore the best career paths after 10th, 12th, and graduation. Compare streams and make informed decisions.
        </p>
      </div>
    </section>

    {/* Career pathways */}
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-foreground">Career Pathways</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pathways.map((p) => (
            <div key={p.stage} className="rounded-xl border border-border bg-card p-6 card-elevated">
              <h3 className="mb-4 text-lg font-bold text-primary">{p.stage}</h3>
              <ul className="space-y-2">
                {p.options.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-foreground">
                    <ArrowRight className="h-3 w-3 text-secondary" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stream comparison */}
    <section className="bg-accent py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-foreground">Stream Comparison</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {streams.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 card-elevated">
              <s.icon className={`mb-3 h-8 w-8 ${s.color}`} />
              <h3 className="mb-1 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{s.after}</p>
              <div className="mb-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Career Options</p>
                <div className="flex flex-wrap gap-1">
                  {s.careers.map((c) => (
                    <span key={c} className="rounded-md bg-muted px-2 py-0.5 text-xs text-foreground">{c}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Salary:</span>
                <span className="font-semibold text-foreground">{s.avgSalary}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Top Exams:</span>
                <span className="font-semibold text-foreground">{s.topExams}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container text-center">
        <h2 className="mb-4 text-2xl font-extrabold text-foreground">Not Sure Which Course to Choose?</h2>
        <p className="mb-6 text-muted-foreground">Talk to our career experts for personalized guidance.</p>
        <Button size="lg" asChild>
          <Link to="/admissions">Book Free Counseling <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Courses;
