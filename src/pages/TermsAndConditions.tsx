import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: April 15, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using AdmissionCareerGuide ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground mb-4">
            AdmissionCareerGuide provides college guidance and counseling services to help students make informed decisions about engineering colleges in India. Our services include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>Personalized college guidance and counseling</li>
            <li>College comparison tools and information</li>
            <li>Career path analysis and advice</li>
            <li>Educational content and resources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
          <p className="text-muted-foreground mb-4">
            By using our service, you agree to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
            <li>Provide accurate and complete information</li>
            <li>Use the service for lawful purposes only</li>
            <li>Not engage in any harmful or disruptive behavior</li>
            <li>Respect the intellectual property rights of the service</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability</h2>
          <p className="text-muted-foreground mb-4">
            We strive to provide continuous access to our services, but we do not guarantee that the service will be available at all times. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Counseling Services</h2>
          <p className="text-muted-foreground mb-4">
            Our counseling services are provided for informational purposes only. While we strive to provide accurate and helpful guidance, we cannot guarantee specific outcomes or results. Final decisions regarding college selection and admissions remain the responsibility of the user.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Communication Consent</h2>
          <p className="text-muted-foreground mb-4">
            By providing your contact information and consenting to receive communications, you agree to receive SMS, email, and WhatsApp messages from us regarding our services, college information, and related educational content. You may opt out of these communications at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content, features, and functionality of the Service are owned by AdmissionCareerGuide and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            AdmissionCareerGuide shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service. Our total liability shall not exceed the amount paid by you for our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">9. Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;