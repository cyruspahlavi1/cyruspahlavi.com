import Image from 'next/image';
import Link from 'next/link';
import { contactEmails, officialAddress } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black/80 to-black py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <div className="flex items-start justify-center lg:justify-start">
            <Image
              src="/images/official-seal.png"
              alt="Official Seal"
              width={200}
              height={200}
              className="h-auto w-full max-w-[200px] object-contain opacity-90"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
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
                    <span className="font-semibold text-foreground">{item.value}</span>
                    <br />
                    {item.label}
                  </p>
                ))}
                <p>
                  <span className="font-semibold text-foreground">Address</span>
                  <br />
                  {officialAddress.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2026 Cyrus Pahlavi</p>
          <p className="mt-1">The public record is maintained at cyruspahlavi.com</p>
        </div>
      </div>
    </footer>
  );
}
