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
            Your trusted partner for college guidance, career counseling, and informed college selection across India.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/colleges" className="hover:opacity-100 transition-opacity">Explore Colleges</Link></li>
            <li><Link to="/guidance" className="hover:opacity-100 transition-opacity">College Guidance</Link></li>
            <li><Link to="/predictor" className="hover:opacity-100 transition-opacity">College Explorer</Link></li>
            <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Career Guidance</Link></li>
            <li><Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:opacity-100 transition-opacity">Terms and Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Exams We Cover</h4>
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
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+917013978887" className="hover:underline">+91 70139 78887</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:admissionscareerguide@gmail.com" className="hover:underline">admissionscareerguide@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Chennai, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/20 pt-6">
        <p className="text-center text-xs opacity-40">
          © {new Date().getFullYear()} AdmissionCareerGuide. All rights reserved. We are a guidance-only platform and do not process admissions.
        </p>
        <p className="text-center text-xs opacity-40 mt-2">
          Powered by SR Global
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
