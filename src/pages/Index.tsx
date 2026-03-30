import { Link } from "react-router-dom";
import { GraduationCap, Search, BarChart3, BookOpen, Users, Award, ArrowRight, CheckCircle, Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import heroImg from "@/assets/hero-students.jpg";

const services = [
  { icon: GraduationCap, title: "Admission Guidance", desc: "Get counseling support for engineering college admissions across India.", link: "/admissions" },
  { icon: Search, title: "College Finder", desc: "Search and compare engineering colleges by fees, rankings, placements, and more.", link: "/colleges" },
  { icon: BarChart3, title: "College Predictor", desc: "Explore colleges that may match your entrance exam rank or marks.", link: "/predictor" },
  { icon: BookOpen, title: "Course Guidance", desc: "Explore career paths after 10th, 12th, or graduation with expert advice.", link: "/courses" },
];

const stats = [
  { value: "10,000+", label: "Students Guided" },
  { value: "100+", label: "Colleges Listed" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const testimonials = [
  { name: "Priya S.", initials: "PS", course: "B.Tech Student", rating: 5, text: "The counselors provided helpful guidance during my college search. They explained the admission process clearly and answered all my questions patiently." },
  { name: "Karthik N.", initials: "KN", course: "B.Tech Student", rating: 4, text: "Good experience with the counseling team. They were transparent about the process and helped me understand my options for engineering colleges." },
  { name: "Arjun M.", initials: "AM", course: "B.Tech Student", rating: 5, text: "The college comparison tool was very useful. I received personalized suggestions based on my profile and the team was responsive throughout." },
  { name: "Sneha P.", initials: "SP", course: "M.Tech Student", rating: 5, text: "I was unsure about M.Tech options after B.Tech. The counselors helped me explore different colleges and understand the GATE counseling process." },
  { name: "Rahul V.", initials: "RV", course: "B.Tech Student", rating: 5, text: "The college information tool helped me compare different options. The counseling team guided me through the application process step by step." },
  { name: "Riya G.", initials: "RG", course: "B.Tech Student", rating: 5, text: "Finding the right engineering college was confusing. The counselors helped me narrow down options based on my preferences and budget." },
  { name: "Mohammed F.", initials: "MF", course: "M.Tech Student", rating: 5, text: "The GATE counseling guidance was very informative. The team helped me understand seat allocation and college selection process clearly." },
  { name: "Divya K.", initials: "DK", course: "B.Tech Student", rating: 4, text: "Navigating engineering admissions was overwhelming. The counseling service simplified things and helped me understand my options clearly." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              🎓 Engineering Admission Counseling Platform
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl xl:text-6xl">
              Your Admission & Career Guidance Partner
            </h1>
            <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
              Counseling services, college information, and admission guidance for B.Tech & M.Tech programs across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/admissions">Get Free Counseling <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/colleges">Find Colleges</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
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
                "Experienced counselors in engineering admissions",
                "Information on 100+ engineering colleges",
                "Transparent counseling process",
                "Personalized 1-on-1 guidance sessions",
                "Application documentation support",
                "Post-admission mentorship available",
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

    {/* Testimonials */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground">
            Hear from students who used our counseling services.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative h-full rounded-xl border border-border bg-card p-6 card-elevated">
                  <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <p className="mb-5 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.course}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
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
