import { Calendar, Bell, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const news = [
  { title: "JEE Main 2026 Session 2 Registration Opens", date: "March 25, 2026", category: "JEE", desc: "NTA has opened the registration window for JEE Main April 2026 session. Last date to apply is April 10, 2026." },
  { title: "VITEEE 2026 Application Deadline Extended", date: "March 22, 2026", category: "Engineering", desc: "VIT has extended the VITEEE 2026 application deadline. Students can apply until April 5, 2026." },
  { title: "GATE 2026 Results Expected Soon", date: "March 18, 2026", category: "GATE", desc: "GATE 2026 results are expected to be announced shortly. M.Tech admissions counseling will follow." },
  { title: "SRMJEEE 2026 Slot Booking Begins", date: "March 15, 2026", category: "Engineering", desc: "SRM has opened slot booking for SRMJEEE 2026. Candidates can choose preferred exam dates." },
  { title: "Engineering Colleges Open Admission Inquiries for 2026-27", date: "March 12, 2026", category: "Admission", desc: "Several private engineering colleges have started accepting admission inquiries for the upcoming academic session." },
  { title: "New NEP Guidelines for Engineering Programs", date: "March 10, 2026", category: "Policy", desc: "UGC releases new guidelines under NEP 2020 for 4-year B.Tech programs." },
];

const categoryColors: Record<string, string> = {
  JEE: "bg-primary text-primary-foreground",
  NEET: "bg-secondary text-secondary-foreground",
  MBA: "bg-primary text-primary-foreground",
  Law: "bg-secondary text-secondary-foreground",
  Admission: "bg-accent text-accent-foreground",
  Policy: "bg-muted text-muted-foreground",
};

const News = () => (
  <div className="py-8 lg:py-12">
    <div className="container">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-extrabold text-foreground lg:text-4xl">News & Updates</h1>
        </div>
        <p className="text-muted-foreground">Latest admission notifications, exam alerts, and education news.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {news.map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-card p-6 card-elevated">
            <div className="mb-3 flex items-center gap-3">
              <Badge className={categoryColors[item.category] || "bg-muted text-muted-foreground"}>{item.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {item.date}
              </span>
            </div>
            <h2 className="mb-2 text-lg font-bold text-foreground">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
            <button className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline">
              Read More <ExternalLink className="ml-1 h-3 w-3" />
            </button>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default News;
