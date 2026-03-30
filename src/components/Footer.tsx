import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">AdmissionCareerGuide</span>
          </div>
          <p className="text-sm opacity-70">
            Your trusted partner for admission guidance, career counseling, and college discovery across India.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/colleges" className="hover:opacity-100 transition-opacity">Find Colleges</Link></li>
            <li><Link to="/admissions" className="hover:opacity-100 transition-opacity">Admission Help</Link></li>
            <li><Link to="/predictor" className="hover:opacity-100 transition-opacity">College Predictor</Link></li>
            <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Course Guidance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Exams</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>JEE Main & Advanced</li>
            <li>VITEEE</li>
            <li>SRMJEEE</li>
            <li>GATE</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Contact Us</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@admissioncareerguide.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/20 pt-6">
        <p className="text-center text-xs opacity-40">
          © {new Date().getFullYear()} AdmissionCareerGuide. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
