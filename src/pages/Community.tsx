import { useState } from "react";
import { MessageSquare, ThumbsUp, Clock, TrendingUp, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Answer {
  id: number;
  author: string;
  initials: string;
  text: string;
  upvotes: number;
  time: string;
  isUpvoted: boolean;
}

interface Question {
  id: number;
  title: string;
  body: string;
  author: string;
  initials: string;
  category: string;
  answers: Answer[];
  upvotes: number;
  time: string;
  isUpvoted: boolean;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    title: "What is the cutoff for B.Tech CSE at VIT Vellore?",
    body: "I scored 92% in 12th boards and got 85 percentile in JEE Mains. Can I get CSE at VIT Vellore through VITEEE? What was last year's cutoff?",
    author: "Rahul Sharma",
    initials: "RS",
    category: "Cutoffs",
    upvotes: 24,
    time: "2 hours ago",
    isUpvoted: false,
    answers: [
      { id: 1, author: "Priya Patel", initials: "PP", text: "Last year the VITEEE cutoff for CSE was around rank 5000-8000. With your scores, you have a decent chance. Focus on VITEEE preparation as well.", upvotes: 12, time: "1 hour ago", isUpvoted: false },
      { id: 2, author: "Amit Kumar", initials: "AK", text: "I got admitted last year with rank 6200. The management quota cutoff is different though. Feel free to DM for more details.", upvotes: 8, time: "45 min ago", isUpvoted: false },
    ],
  },
  {
    id: 2,
    title: "Is MBA from Symbiosis worth it compared to IIMs?",
    body: "I have calls from SIBM Pune and a newer IIM. Which one should I prefer considering placements and ROI?",
    author: "Sneha Reddy",
    initials: "SR",
    category: "Admissions",
    upvotes: 31,
    time: "5 hours ago",
    isUpvoted: false,
    answers: [
      { id: 3, author: "Vikram Singh", initials: "VS", text: "SIBM Pune has excellent placements with average package around 20-22 LPA. Newer IIMs are catching up but SIBM has stronger alumni network and brand in the industry.", upvotes: 15, time: "3 hours ago", isUpvoted: false },
    ],
  },
  {
    id: 3,
    title: "How to prepare for NEET in the last 3 months?",
    body: "I'm currently scoring around 500 in mock tests. Need 620+ for a government medical college. Any tips for the last 3 months?",
    author: "Aisha Khan",
    initials: "AK",
    category: "Exam Prep",
    upvotes: 45,
    time: "1 day ago",
    isUpvoted: false,
    answers: [
      { id: 4, author: "Dr. Meena Joshi", initials: "MJ", text: "Focus on NCERT Biology — it alone can fetch you 300+ marks. For Physics, solve previous year papers. Chemistry needs a balance of organic reactions and inorganic facts.", upvotes: 28, time: "20 hours ago", isUpvoted: false },
      { id: 5, author: "Rohan Gupta", initials: "RG", text: "I jumped from 510 to 645 in 3 months last year. Key: solve 2 full mocks per week, revise weak chapters daily, and maintain an error log.", upvotes: 22, time: "18 hours ago", isUpvoted: false },
      { id: 6, author: "Kavita Nair", initials: "KN", text: "Don't start new topics now. Strengthen what you know. Biology NCERT line-by-line reading is non-negotiable.", upvotes: 19, time: "12 hours ago", isUpvoted: false },
    ],
  },
  {
    id: 4,
    title: "Best private engineering colleges in Bangalore?",
    body: "Looking for good private engineering colleges in Bangalore with strong placement records for CSE/IT branches.",
    author: "Deepak Verma",
    initials: "DV",
    category: "Colleges",
    upvotes: 18,
    time: "2 days ago",
    isUpvoted: false,
    answers: [
      { id: 7, author: "Lakshmi R", initials: "LR", text: "RV College, PES University, and BMS College are the top 3. RV has the best placements among private colleges in Bangalore with average package around 12-14 LPA for CSE.", upvotes: 10, time: "1 day ago", isUpvoted: false },
    ],
  },
  {
    id: 5,
    title: "Lateral entry to B.Tech after diploma — which colleges accept?",
    body: "I've completed my diploma in Mechanical Engineering with 78%. Which good colleges accept lateral entry for B.Tech?",
    author: "Manish Tiwari",
    initials: "MT",
    category: "Admissions",
    upvotes: 12,
    time: "3 days ago",
    isUpvoted: false,
    answers: [],
  },
];

const categories = ["All", "Admissions", "Cutoffs", "Exam Prep", "Colleges", "Placements", "Scholarships"];

const Community = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("trending");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [newAnswer, setNewAnswer] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ title: "", body: "", category: "Admissions" });

  const filteredQuestions = questions
    .filter((q) => selectedCategory === "All" || q.category === selectedCategory)
    .filter((q) => q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.body.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "trending") return b.upvotes - a.upvotes;
      if (sortBy === "recent") return a.time.localeCompare(b.time);
      return b.answers.length - a.answers.length;
    });

  const handleUpvoteQuestion = (id: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, upvotes: q.isUpvoted ? q.upvotes - 1 : q.upvotes + 1, isUpvoted: !q.isUpvoted } : q
      )
    );
  };

  const handleUpvoteAnswer = (questionId: number, answerId: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId ? { ...a, upvotes: a.isUpvoted ? a.upvotes - 1 : a.upvotes + 1, isUpvoted: !a.isUpvoted } : a
              ),
            }
          : q
      )
    );
  };

  const handlePostAnswer = (questionId: number) => {
    if (!newAnswer.trim()) return;
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: [
                ...q.answers,
                { id: Date.now(), author: "You", initials: "YO", text: newAnswer, upvotes: 0, time: "Just now", isUpvoted: false },
              ],
            }
          : q
      )
    );
    setNewAnswer("");
  };

  const handlePostQuestion = () => {
    if (!newQuestion.title.trim() || !newQuestion.body.trim()) return;
    setQuestions((prev) => [
      {
        id: Date.now(),
        title: newQuestion.title,
        body: newQuestion.body,
        author: "You",
        initials: "YO",
        category: newQuestion.category,
        answers: [],
        upvotes: 0,
        time: "Just now",
        isUpvoted: false,
      },
      ...prev,
    ]);
    setNewQuestion({ title: "", body: "", category: "Admissions" });
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Student <span className="text-primary">Q&A Community</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Ask questions, share experiences, and help fellow students navigate admissions and careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" /> Ask a Question
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Ask the Community</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-2">
                  <Input
                    placeholder="Question title"
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion((p) => ({ ...p, title: e.target.value }))}
                  />
                  <Textarea
                    placeholder="Describe your question in detail..."
                    rows={4}
                    value={newQuestion.body}
                    onChange={(e) => setNewQuestion((p) => ({ ...p, body: e.target.value }))}
                  />
                  <Select value={newQuestion.category} onValueChange={(v) => setNewQuestion((p) => ({ ...p, category: v }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter((c) => c !== "All").map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={handlePostQuestion} className="w-full">Post Question</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer px-3 py-1.5 text-sm transition-colors"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending"><span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Trending</span></SelectItem>
                <SelectItem value="recent"><span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Recent</span></SelectItem>
                <SelectItem value="most-answered"><span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Most Answered</span></SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">No questions found</p>
              <p className="text-sm">Try a different filter or ask a new question!</p>
            </div>
          )}

          {filteredQuestions.map((q) => (
            <div key={q.id} className="border border-border rounded-xl bg-card p-5 transition-shadow hover:shadow-md">
              <div className="flex gap-4">
                {/* Upvote */}
                <div className="flex flex-col items-center gap-1 pt-1">
                  <button
                    onClick={() => handleUpvoteQuestion(q.id)}
                    className={`p-1.5 rounded-lg transition-colors ${q.isUpvoted ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground"}`}
                  >
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                  <span className={`text-sm font-semibold ${q.isUpvoted ? "text-primary" : "text-muted-foreground"}`}>{q.upvotes}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{q.category}</Badge>
                    <span className="text-xs text-muted-foreground">{q.time}</span>
                  </div>
                  <h3
                    className="text-lg font-semibold text-foreground cursor-pointer hover:text-primary transition-colors mb-1"
                    onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                  >
                    {q.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{q.body}</p>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <Avatar className="h-5 w-5">
                        <AvatarFallback className="text-[10px] bg-primary/10 text-primary">{q.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{q.author}</span>
                    </div>
                    <button
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      {q.answers.length} {q.answers.length === 1 ? "answer" : "answers"}
                    </button>
                  </div>

                  {/* Expanded Answers */}
                  {expandedQuestion === q.id && (
                    <div className="mt-5 space-y-4 border-t border-border pt-4">
                      {q.answers.map((a) => (
                        <div key={a.id} className="flex gap-3 bg-muted/40 rounded-lg p-3">
                          <button
                            onClick={() => handleUpvoteAnswer(q.id, a.id)}
                            className={`flex flex-col items-center gap-0.5 pt-0.5 ${a.isUpvoted ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-xs font-medium">{a.upvotes}</span>
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Avatar className="h-5 w-5">
                                <AvatarFallback className="text-[10px] bg-accent text-accent-foreground">{a.initials}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs font-medium text-foreground">{a.author}</span>
                              <span className="text-xs text-muted-foreground">{a.time}</span>
                            </div>
                            <p className="text-sm text-foreground/90">{a.text}</p>
                          </div>
                        </div>
                      ))}

                      {q.answers.length === 0 && (
                        <p className="text-sm text-muted-foreground italic">No answers yet. Be the first to help!</p>
                      )}

                      <div className="flex gap-2">
                        <Textarea
                          placeholder="Write your answer..."
                          rows={2}
                          value={newAnswer}
                          onChange={(e) => setNewAnswer(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={() => handlePostAnswer(q.id)} size="sm" className="self-end">
                          Reply
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
