export default function TermsPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Terms of Service</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Terms Governing Use</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Terms governing use of cyruspahlavi.com.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-8 text-sm text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-gold">Acceptance</h2>
            <p className="mt-3">By accessing and using cyruspahlavi.com, you acknowledge and agree to these terms of service.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Official Nature</h2>
            <p className="mt-3">This website is the official platform of the Office of His Royal Highness Cyrus Pahlavi. All content represents official positions and statements unless otherwise noted.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Permitted Use</h2>
            <p className="mt-3">You may:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>View, download, and print materials for personal, educational, or informational use</li>
              <li>Link to our content with proper attribution</li>
              <li>Share official statements and documents in their unaltered form</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Prohibited Use</h2>
            <p className="mt-3">You may not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Modify, alter, or misrepresent official content</li>
              <li>Use our seal, logos, or branding without permission</li>
              <li>Impersonate the Office or His Royal Highness Cyrus Pahlavi</li>
              <li>Use automated systems to access the website excessively</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Intellectual Property</h2>
            <p className="mt-3">Content on this website, including text, images, logos, and the official seal, is protected by intellectual property rights.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Official Documents</h2>
            <p className="mt-3">Official documents are provided for public information. Redistribution should maintain reference numbers and attribution to cyruspahlavi.com.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Disclaimer</h2>
            <p className="mt-3">Information is provided "as is" for informational purposes. We strive for accuracy but make no warranties about completeness or timeliness.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">External Links</h2>
            <p className="mt-3">We are not responsible for content on external websites linked from our platform.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Changes</h2>
            <p className="mt-3">These terms may be updated periodically. Continued use constitutes acceptance of updated terms.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Contact</h2>
            <p className="mt-3">Questions about these terms can be directed to: <strong className="text-foreground">office@cyruspahlavi.com</strong></p>
          </div>
          <div className="border-t border-white/10 pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <p><strong className="text-foreground">Last Updated:</strong> February 1, 2026</p>
            <p><strong className="text-foreground">Effective Date:</strong> February 1, 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
