import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp Button - Right Side */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.744 3.047 9.379L1.054 31.25l6.1-1.953a15.9 15.9 0 008.85 2.703C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.32 22.609c-.391 1.102-1.938 2.016-3.164 2.281-.836.18-1.93.32-5.61-1.203-4.703-1.95-7.727-6.727-7.961-7.039-.226-.313-1.875-2.5-1.875-4.766s1.187-3.383 1.609-3.844c.422-.46.922-.578 1.227-.578.297 0 .594.003.852.016.273.012.641-.105.999.765.375.89 1.281 3.125 1.391 3.352.11.226.187.492.039.789-.149.304-.223.492-.445.758-.223.266-.469.594-.672.797-.223.226-.453.469-.195.922.258.445 1.148 1.898 2.469 3.07 1.695 1.508 3.125 1.977 3.57 2.195.445.22.703.187.961-.11.266-.305 1.125-1.313 1.43-1.766.297-.453.594-.375.992-.226.406.149 2.563 1.21 3.008 1.43.445.218.735.328.844.508.11.187.11 1.07-.281 2.172z" />
        </svg>
      </a>

      {/* Scroll to Top - Right Side, above WhatsApp */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
