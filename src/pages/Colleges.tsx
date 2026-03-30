import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, IndianRupee, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { colleges, states } from "@/data/colleges";

const Colleges = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");

  const filtered = useMemo(() => {
    return colleges.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
      const matchState = stateFilter === "all" || c.state === stateFilter;
      const matchCourse = courseFilter === "all" || c.courses.includes(courseFilter);
      return matchSearch && matchState && matchCourse;
    });
  }, [search, stateFilter, courseFilter]);

  return (
    <div className="py-8 lg:py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-extrabold text-foreground lg:text-4xl">
            Explore Engineering Colleges in India
          </h1>
          <p className="text-muted-foreground">Browse and compare engineering colleges by location, fees, rankings, and placements.</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search colleges..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={stateFilter} onValueChange={setStateFilter}>
            <SelectTrigger className="w-[180px]"><Filter className="mr-2 h-4 w-4" /><SelectValue placeholder="State" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={courseFilter} onValueChange={setCourseFilter}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Course" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {["B.Tech", "M.Tech"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((college) => (
            <div key={college.id} className="rounded-xl border border-border bg-card overflow-hidden card-elevated">
              <img src={college.image} alt={college.name} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-bold text-foreground leading-snug">{college.name}</h3>
                  <Badge variant="secondary" className="shrink-0">#{college.ranking}</Badge>
                </div>
                <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {college.location}
                </div>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{college.overview}</p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-3.5 w-3.5 text-primary" />
                    <span className="text-foreground">{college.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 text-secondary" />
                    <span className="text-foreground">{college.rating}/5 Rating</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {college.courses.slice(0, 3).map((c) => (
                    <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-accent p-3">
                  <p className="text-xs font-medium text-accent-foreground">📊 Placements: {college.placements}</p>
                  <p className="text-xs text-muted-foreground">Cutoff: {college.cutoff}</p>
                </div>
                <Link to={`/colleges/${college.id}`}>
                  <Button variant="default" className="mt-4 w-full gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No colleges found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;
