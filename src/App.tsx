import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Admissions from "./pages/Admissions";
import Predictor from "./pages/Predictor";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges/:id" element={<CollegeDetail />} />
              <Route path="/guidance" element={<Admissions />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/predictor" element={<Predictor />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/news" element={<News />} />
              <Route path="/community" element={<Community />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
