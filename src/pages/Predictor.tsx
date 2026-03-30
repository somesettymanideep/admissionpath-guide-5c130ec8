import { useState } from "react";
import { BarChart3, TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Prediction {
  college: string;
  location: string;
  chance: "High" | "Moderate" | "Low";
  fees: string;
}

const examOptions = ["JEE Main", "VITEEE", "SRMJEEE", "BITSAT", "MET", "COMEDK", "GATE"];

const generatePredictions = (exam: string, rank: number): Prediction[] => {
  const results: Prediction[] = [];
  if (rank <= 10000) {
    results.push({ college: "BITS Pilani", location: "Rajasthan", chance: "High", fees: "₹4.5L/yr" });
    results.push({ college: "VIT Vellore", location: "Tamil Nadu", chance: "High", fees: "₹2.1L/yr" });
    results.push({ college: "Manipal IT", location: "Karnataka", chance: "High", fees: "₹3L/yr" });
  }
  if (rank <= 50000) {
    results.push({ college: "SRM IST Chennai", location: "Tamil Nadu", chance: rank <= 20000 ? "High" : "Moderate", fees: "₹2.5L/yr" });
    results.push({ college: "Amity University", location: "Uttar Pradesh", chance: "High", fees: "₹1.8L/yr" });
  }
  if (rank <= 100000) {
    results.push({ college: "Lovely Professional Univ", location: "Punjab", chance: "High", fees: "₹1.5L/yr" });
    results.push({ college: "Chandigarh University", location: "Punjab", chance: rank <= 60000 ? "High" : "Moderate", fees: "₹1.6L/yr" });
  }
  results.push({ college: "Sharda University", location: "UP", chance: "High", fees: "₹1.2L/yr" });
  return results.slice(0, 6);
};

const chanceColor = { High: "bg-secondary text-secondary-foreground", Moderate: "bg-yellow-500 text-primary-foreground", Low: "bg-destructive text-destructive-foreground" };

const Predictor = () => {
  const [exam, setExam] = useState("");
  const [rank, setRank] = useState("");
  const [predictions, setPredictions] = useState<Prediction[] | null>(null);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exam || !rank) return;
    setPredictions(generatePredictions(exam, parseInt(rank)));
  };

  return (
    <div className="py-8 lg:py-12">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>
            <h1 className="mb-2 text-3xl font-extrabold text-foreground lg:text-4xl">College Explorer Tool</h1>
            <p className="text-muted-foreground">Enter your entrance exam rank to explore colleges that may be a good fit based on past trends.</p>
          </div>

          {/* Form */}
          <form onSubmit={handlePredict} className="mb-10 rounded-xl border border-border bg-card p-6 card-elevated">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Entrance Exam</Label>
                <Select value={exam} onValueChange={setExam}>
                  <SelectTrigger><SelectValue placeholder="Select exam" /></SelectTrigger>
                  <SelectContent>
                    {examOptions.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Your Rank / Score</Label>
                <Input type="number" placeholder="e.g. 25000" value={rank} onChange={(e) => setRank(e.target.value)} />
              </div>
            </div>
            <Button type="submit" className="mt-4 w-full" size="lg">
              <TrendingUp className="mr-2 h-4 w-4" /> Explore Colleges
            </Button>
          </form>

          {/* Results */}
          {predictions && (
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                📋 Suggested Colleges for {exam} Rank {rank}
              </h2>
              <div className="space-y-3">
                {predictions.map((p) => (
                  <div key={p.college} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 card-elevated">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{p.college}</p>
                        <p className="text-sm text-muted-foreground">{p.location} · {p.fees}</p>
                      </div>
                    </div>
                    <Badge className={chanceColor[p.chance]}>{p.chance} Chance</Badge>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                * These suggestions are based on past trends and are for informational purposes only. Actual admission outcomes depend on multiple factors and may vary. Please verify with respective colleges.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predictor;
