import { Link } from "react-router-dom";
import { GraduationCap, Search, BarChart3, BookOpen, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import heroImg from "@/assets/hero-students.jpg";

const services = [
  { icon: GraduationCap, title: "Admission Assistance", desc: "Get expert help for direct admissions in top private colleges across India.", link: "/admissions" },
  { icon: Search, title: "College Finder", desc: "Search and compare 500+ colleges by fees, rankings, placements, and more.", link: "/colleges" },
  { icon: BarChart3, title: "College Predictor", desc: "Predict your best-fit colleges based on your entrance exam rank or marks.", link: "/predictor" },
  { icon: BookOpen, title: "Course Guidance", desc: "Explore career paths after 10th, 12th, or graduation with expert advice.", link: "/courses" },
];

const stats = [
  { value: "50,000+", label: "Students Counseled" },
  { value: "500+", label: "Partner Colleges" },
  { value: "95%", label: "Admission Success" },
  { value: "24/7", label: "Support Available" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              🎓 India's Trusted Admission Platform
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl xl:text-6xl">
              Your Complete Admission & Career Guidance Partner
            </h1>
            <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
              Expert counseling, college predictions, and direct admission support for Engineering, Medical, MBA, Law, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/admissions">Get Free Counseling <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/colleges">Find Colleges</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/predictor">Predict Your College</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImg}
              alt="Happy students celebrating graduation at an Indian university campus"
              width={1024}
              height={768}
              className="rounded-2xl shadow-2xl border border-primary-foreground/10"
            />
          </div>
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground/5" />
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-primary lg:text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl">
            Everything You Need for Your <span className="text-gradient">Education Journey</span>
          </h2>
          <p className="text-muted-foreground">
            From finding the right college to securing admission — we've got you covered at every step.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="group rounded-xl border border-border bg-card p-6 card-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-3 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why choose us */}
    <section className="bg-accent py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
              Why Students Trust <span className="text-gradient">AdmissionCareerGuide</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Expert counselors with 10+ years experience",
                "Partnerships with 500+ verified colleges",
                "Transparent process — no hidden fees",
                "Personalized 1-on-1 guidance sessions",
                "End-to-end application support",
                "Post-admission support & mentorship",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "Career Counseling", desc: "Personalized guidance" },
              { icon: Award, label: "Top Colleges", desc: "Verified partners" },
              { icon: BookOpen, label: "Course Info", desc: "Detailed analysis" },
              { icon: BarChart3, label: "Predictors", desc: "AI-powered tools" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5 text-center card-elevated">
                <item.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                <h4 className="font-semibold text-foreground">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-3xl font-extrabold text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground">Fill in your details and our expert counselors will guide you to the right college.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  </div>
);

export default Index;
