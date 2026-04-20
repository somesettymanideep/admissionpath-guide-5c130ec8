import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: April 15, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to AdmissionCareerGuide ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
          <p className="text-muted-foreground mb-4">
            We may collect personal information that you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>Name and contact information (phone number, email address)</li>
            <li>Educational background and interests</li>
            <li>Course preferences and career goals</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">2.2 Usage Information</h3>
          <p className="text-muted-foreground mb-4">
            We automatically collect certain information about your use of our services, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>IP address and location information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>To provide personalized college guidance and counseling services</li>
            <li>To communicate with you about our services and respond to your inquiries</li>
            <li>To send you relevant information about colleges, courses, and educational opportunities</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Objection to processing in certain circumstances</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
          <p className="text-muted-foreground mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="text-muted-foreground">
            <p>Email: <a href="mailto:admissionscareerguide@gmail.com" className="hover:underline">admissionscareerguide@gmail.com</a></p>
            <p>Phone: +91 XXXXX XXXXX</p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link to="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;