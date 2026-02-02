import Link from 'next/link';
import { contactEmails } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black/80 to-black py-14">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-gold">Information</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><Link href="/statements" className="hover:text-gold">Statements</Link></li>
            <li><Link href="/strategic-priorities" className="hover:text-gold">Strategic Priorities</Link></li>
            <li><Link href="/enduring-legacy" className="hover:text-gold">Enduring Legacy</Link></li>
            <li><Link href="/initiatives-and-partners" className="hover:text-gold">Initiatives &amp; Partners</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-gold">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><Link href="/biography" className="hover:text-gold">Biography</Link></li>
            <li><Link href="/works" className="hover:text-gold">Works</Link></li>
            <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-gold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {contactEmails.map((item) => (
              <p key={item.value}>
                <span className="text-foreground font-semibold">{item.value}</span>
                <br />
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
        <p>&copy; 2026 Cyrus Pahlavi</p>
        <p>The public record is maintained at cyruspahlavi.com</p>
      </div>
    </footer>
  );
}
