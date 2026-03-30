import { useParams, Link } from "react-router-dom";
import { MapPin, Star, IndianRupee, ArrowLeft, Building2, Users, TrendingUp, BookOpen, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { colleges } from "@/data/colleges";
import LeadForm from "@/components/LeadForm";

const reviewsData: Record<string, { name: string; initials: string; rating: number; date: string; text: string }[]> = {
  "1": [
    { name: "Aditya Kumar", initials: "AK", rating: 5, date: "Mar 2026", text: "VIT Vellore has excellent faculty and infrastructure. The placement cell is very active and companies like Microsoft, Amazon regularly visit campus." },
    { name: "Meera Joshi", initials: "MJ", rating: 4, date: "Jan 2026", text: "Great college with good exposure. Fest culture is amazing. Only downside is the food quality in hostels could be better." },
    { name: "Rohan Sinha", initials: "RS", rating: 4, date: "Dec 2025", text: "Good academic rigor and plenty of clubs to join. Wi-Fi coverage across campus is a plus. Library is well-stocked." },
  ],
  "2": [
    { name: "Nithya Raman", initials: "NR", rating: 4, date: "Feb 2026", text: "SRM has a beautiful campus and good international collaborations. Placement season is competitive but rewarding." },
    { name: "Vikram Singh", initials: "VS", rating: 4, date: "Nov 2025", text: "Decent infrastructure and helpful faculty. The medical college is especially well-regarded. Good canteen options." },
  ],
  "3": [
    { name: "Anjali Menon", initials: "AM", rating: 5, date: "Mar 2026", text: "MIT Manipal is a dream college. The campus is serene, faculty are approachable, and placements are top-notch." },
    { name: "Siddharth Rao", initials: "SR", rating: 5, date: "Jan 2026", text: "One of the best private engineering colleges. The peer group is very competitive which pushes you to excel." },
  ],
  "4": [
    { name: "Ishaan Malik", initials: "IM", rating: 3, date: "Feb 2026", text: "Amity has a wide range of courses. Infrastructure is good but placements vary by branch. Good for extracurriculars." },
    { name: "Kavya Sharma", initials: "KS", rating: 4, date: "Dec 2025", text: "The campus in Noida is huge and well-maintained. Faculty quality varies but overall a positive experience." },
  ],
  "5": [
    { name: "Aryan Patel", initials: "AP", rating: 5, date: "Mar 2026", text: "BITS Pilani is exceptional. The academic flexibility, PS-1/PS-2 system, and alumni network are unparalleled." },
    { name: "Prachi Gupta", initials: "PG", rating: 5, date: "Feb 2026", text: "Best college decision I ever made. The culture of self-study and innovation is ingrained in every BITSian." },
  ],
  "6": [
    { name: "Tanvi Kulkarni", initials: "TK", rating: 4, date: "Jan 2026", text: "Symbiosis Pune has a vibrant campus life. The engineering program is well-structured with excellent industry exposure." },
    { name: "Nikhil Desai", initials: "ND", rating: 5, date: "Dec 2025", text: "Great for engineering programs. Pune as a city adds to the overall student experience. Highly recommended." },
  ],
};

const feesBreakdown = [
  { item: "Tuition Fee", percentage: 65 },
  { item: "Hostel & Mess", percentage: 20 },
  { item: "Lab & Library", percentage: 8 },
  { item: "Exam & Misc", percentage: 7 },
];

const CollegeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const college = colleges.find((c) => c.id === id);

  if (!college) {
    return (
      <div className="container py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold text-foreground">College Not Found</h2>
        <p className="mb-6 text-muted-foreground">The college you're looking for doesn't exist in our database.</p>
        <Button asChild><Link to="/colleges">Browse All Colleges</Link></Button>
      </div>
    );
  }

  const reviews = reviewsData[college.id] || [];
  const avgRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : college.rating.toFixed(1);

  return (
    <div className="py-8 lg:py-12">
      <div className="container">
        {/* Back link */}
        <Link to="/colleges" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Colleges
        </Link>

        {/* Hero banner */}
        <div className="relative mb-8 overflow-hidden rounded-2xl">
          <img src={college.image} alt={college.name} className="h-56 w-full object-cover md:h-72 lg:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground">{college.type}</Badge>
                  <Badge variant="secondary">Rank #{college.ranking}</Badge>
                </div>
                <h1 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">{college.name}</h1>
                <div className="mt-2 flex items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1 text-sm"><MapPin className="h-4 w-4" /> {college.location}</span>
                  <span className="flex items-center gap-1 text-sm"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {avgRating}/5</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap">
            <TabsTrigger value="overview" className="gap-1.5"><Building2 className="h-4 w-4 hidden sm:block" /> Overview</TabsTrigger>
            <TabsTrigger value="fees" className="gap-1.5"><IndianRupee className="h-4 w-4 hidden sm:block" /> Fees</TabsTrigger>
            <TabsTrigger value="cutoffs" className="gap-1.5"><TrendingUp className="h-4 w-4 hidden sm:block" /> Cutoffs</TabsTrigger>
            <TabsTrigger value="placements" className="gap-1.5"><BookOpen className="h-4 w-4 hidden sm:block" /> Placements</TabsTrigger>
            <TabsTrigger value="reviews" className="gap-1.5"><MessageSquare className="h-4 w-4 hidden sm:block" /> Reviews</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader><CardTitle>About {college.name}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{college.overview}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      The institution offers a wide range of undergraduate and postgraduate programs with a focus on research, innovation, and industry collaboration. Students benefit from state-of-the-art facilities, experienced faculty, and a vibrant campus life.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Courses Offered</CardTitle></CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {college.courses.map((c) => (
                        <Badge key={c} variant="outline" className="px-3 py-1.5 text-sm">{c}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Key Highlights</CardTitle></CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { label: "NIRF Ranking", value: `#${college.ranking}` },
                        { label: "Student Rating", value: `${college.rating}/5` },
                        { label: "College Type", value: college.type },
                        { label: "Location", value: college.location },
                      ].map((h) => (
                        <div key={h.label} className="rounded-lg bg-accent p-4">
                          <div className="text-xs text-muted-foreground">{h.label}</div>
                          <div className="mt-1 text-lg font-bold text-foreground">{h.value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader><CardTitle>Interested in {college.name}?</CardTitle></CardHeader>
                  <CardContent>
                    <LeadForm compact />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Fees */}
          <TabsContent value="fees">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Fee Structure</CardTitle></CardHeader>
                <CardContent>
                  <div className="mb-6 rounded-lg bg-accent p-5 text-center">
                    <div className="text-sm text-muted-foreground">Annual Fee Range</div>
                    <div className="mt-1 text-3xl font-extrabold text-primary">{college.fees}</div>
                  </div>
                  <div className="space-y-4">
                    {feesBreakdown.map((f) => (
                      <div key={f.item}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-foreground">{f.item}</span>
                          <span className="font-medium text-foreground">{f.percentage}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-accent">
                          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${f.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Scholarship & Aid</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Merit Scholarship", desc: "Up to 100% tuition waiver for top rankers", eligibility: "Top 1000 rank holders" },
                    { title: "Need-based Aid", desc: "Financial assistance for economically weaker students", eligibility: "Family income < ₹8 LPA" },
                    { title: "Sports Quota", desc: "Special concession for national-level athletes", eligibility: "State/National level certification" },
                  ].map((s) => (
                    <div key={s.title} className="rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground">{s.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      <p className="mt-2 text-xs text-primary font-medium">Eligibility: {s.eligibility}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cutoffs */}
          <TabsContent value="cutoffs">
            <Card>
              <CardHeader><CardTitle>Cutoff Details</CardTitle></CardHeader>
              <CardContent>
                <div className="mb-6 rounded-lg bg-accent p-5 text-center">
                  <div className="text-sm text-muted-foreground">Primary Cutoff</div>
                  <div className="mt-1 text-2xl font-extrabold text-primary">{college.cutoff}</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 text-left font-semibold text-foreground">Course</th>
                        <th className="py-3 text-left font-semibold text-foreground">General</th>
                        <th className="py-3 text-left font-semibold text-foreground">OBC</th>
                        <th className="py-3 text-left font-semibold text-foreground">SC/ST</th>
                        <th className="py-3 text-left font-semibold text-foreground">Management</th>
                      </tr>
                    </thead>
                    <tbody>
                      {college.courses.map((course, i) => (
                        <tr key={course} className="border-b border-border/50">
                          <td className="py-3 font-medium text-foreground">{course}</td>
                          <td className="py-3 text-muted-foreground">{85 - i * 5}%</td>
                          <td className="py-3 text-muted-foreground">{80 - i * 5}%</td>
                          <td className="py-3 text-muted-foreground">{75 - i * 5}%</td>
                          <td className="py-3 text-primary font-medium">Available</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">* Cutoffs are indicative and vary year to year. Contact us for the latest information.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placements */}
          <TabsContent value="placements">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader><CardTitle>Placement Highlights</CardTitle></CardHeader>
                <CardContent>
                  <div className="mb-6 rounded-lg bg-accent p-5 text-center">
                    <div className="text-sm text-muted-foreground">Placement Summary</div>
                    <div className="mt-1 text-xl font-extrabold text-primary">{college.placements}</div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Placement Rate", value: `${88 + college.ranking % 10}%` },
                      { label: "Companies Visiting", value: `${150 + college.ranking * 5}+` },
                      { label: "Internship Offers", value: `${200 + college.ranking * 3}+` },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg border border-border p-4 text-center">
                        <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <h4 className="mt-6 mb-3 font-semibold text-foreground">Top Recruiters</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Deloitte", "Goldman Sachs", "JP Morgan", "Accenture"].map((r) => (
                      <Badge key={r} variant="outline" className="px-3 py-1">{r}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Sector-wise Placements</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { sector: "IT & Software", pct: 42 },
                    { sector: "Core Engineering", pct: 18 },
                    { sector: "Consulting", pct: 15 },
                    { sector: "Finance & Banking", pct: 14 },
                    { sector: "Others", pct: 11 },
                  ].map((s) => (
                    <div key={s.sector}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-foreground">{s.sector}</span>
                        <span className="font-medium text-foreground">{s.pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-accent">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-bold text-foreground">Student Reviews ({reviews.length})</h3>
                {reviews.length > 0 ? reviews.map((r) => (
                  <Card key={r.name}>
                    <CardContent className="pt-6">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">{r.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{r.name}</div>
                            <div className="text-xs text-muted-foreground">{r.date}</div>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    </CardContent>
                  </Card>
                )) : (
                  <p className="text-muted-foreground">No reviews yet for this college.</p>
                )}
              </div>
              <Card>
                <CardHeader><CardTitle>Rating Summary</CardTitle></CardHeader>
                <CardContent>
                  <div className="mb-4 text-center">
                    <div className="text-4xl font-extrabold text-primary">{avgRating}</div>
                    <div className="mt-1 flex justify-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.round(Number(avgRating)) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />
                      ))}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">Based on {reviews.length} reviews</div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = reviews.filter((r) => r.rating === star).length;
                      const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                      return (
                        <div key={star} className="flex items-center gap-2 text-sm">
                          <span className="w-3 text-foreground">{star}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-accent">
                            <div className="h-full rounded-full bg-yellow-400" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-6 text-right text-muted-foreground">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CollegeDetail;
