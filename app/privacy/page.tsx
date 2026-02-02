export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Privacy Policy</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">How We Handle Information</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            How we protect and handle information on cyruspahlavi.com.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-8 text-sm text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-gold">Information Collection</h2>
            <p className="mt-3">This website is primarily informational. We do not collect personal information unless you voluntarily contact us through official email channels.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Email Communications</h2>
            <p className="mt-3">If you contact us through our official email addresses (office@cyruspahlavi.com, press@cyruspahlavi.com, gov@cyruspahlavi.com), we may retain your email for official record-keeping purposes.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Website Analytics</h2>
            <p className="mt-3">We may use standard web analytics to understand how visitors use our website. This information is aggregated and does not identify individuals.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Security</h2>
            <p className="mt-3">We implement appropriate technical and organizational measures to protect information. All official communications use email authentication (SPF/DKIM/DMARC) to prevent impersonation.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Third-Party Links</h2>
            <p className="mt-3">Our website contains links to external platforms (art galleries, social media, etc.). We are not responsible for the privacy practices of external websites.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Contact</h2>
            <p className="mt-3">Questions about this privacy policy can be directed to: <strong className="text-foreground">office@cyruspahlavi.com</strong></p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-gold">Updates</h2>
            <p className="mt-3">This policy may be updated periodically. Changes will be posted on this page.</p>
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
