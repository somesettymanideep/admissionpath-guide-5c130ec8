import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Colleges", to: "/colleges" },
  { label: "Admissions", to: "/admissions" },
  { label: "Predictor", to: "/predictor" },
  { label: "Courses", to: "/courses" },
  { label: "News", to: "/news" },
  { label: "Community", to: "/community" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50">
      {/* Marquee Disclaimer */}
      <div className="bg-primary text-primary-foreground overflow-hidden whitespace-nowrap text-xs py-1">
        <div className="animate-marquee inline-block">
          <span className="px-8">⚠️ <strong>Disclaimer:</strong> AdmissionCareerGuide provides information and counseling services only. We do not guarantee admissions to any institution. All information is for guidance purposes. Please verify details with respective colleges.</span>
          <span className="px-8">⚠️ <strong>Disclaimer:</strong> AdmissionCareerGuide provides information and counseling services only. We do not guarantee admissions to any institution. All information is for guidance purposes. Please verify details with respective colleges.</span>
        </div>
      </div>
    <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Admission<span className="text-gradient">CareerGuide</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                location.pathname === link.to
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild>
            <Link to="/admissions">Get Free Counseling</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                  location.pathname === link.to
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/admissions" onClick={() => setMobileOpen(false)}>
                Get Free Counseling
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
