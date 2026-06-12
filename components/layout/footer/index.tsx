import Link from "next/link";
import { cn } from "@/lib/utils";
// React Icons se Social Logos import kiye
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import { Newsletter } from "./newsletter";

// ─── Column Data ───────────────────────────────────────
const SHOP_LINKS = [
  { href: "/stores/pk", label: "Pakistan Store" },
  { href: "/stores/us", label: "USA Store" },
  { href: "/stores", label: "All Countries" },
  { href: "/request", label: "Request Product" },
];

const ACCOUNT_LINKS = [
  { href: "/dashboard", label: "My Orders" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/orders", label: "Track Order" },
  { href: "/seller", label: "Become Seller" },
];

const BOTTOM_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
];

// Social Links Array with React Icons
const SOCIAL_LINKS = [
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: FaXTwitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
];

// ─── Footer Link ───────────────────────────────────────
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-text-3 hover:text-brand transition-colors duration-150"
    >
      {label}
    </Link>
  );
}

// ─── Footer Column ─────────────────────────────────────
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold text-text font-display">{title}</p>
      <nav className="flex flex-col gap-2.5">
        {links.map((link) => (
          <FooterLink key={link.href + link.label} {...link} />
        ))}
      </nav>
    </div>
  );
}

// ─── Main Footer (Server Component) ─────────────────────
export function Footer() {
  return (
    <footer className="bg-bg-3 border-t border-border w-full py-10">
      {/* ── Main Grid ── */}
      <div className="md:max-w-[90%] w-full mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand & Socials */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-display text-[22px] font-bold text-text tracking-[-0.5px] w-fit"
            >
              <div className="w-8 h-8 bg-[linear-gradient(135deg,#0B2E33,#93B1B5)] from-brand to-mid rounded-lg flex items-center justify-center text-base">
                ✈️
              </div>
              Zenvy<span className="text-brand">Intl</span>
            </Link>
            <p className="text-sm text-text-3 leading-relaxed max-w-60">
              Your trusted partner for international shopping, delivered anywhere.
            </p>
            
            {/* ── Integrated React Icons ── */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "w-9 h-9 rounded-xl",
                    "border border-border bg-surface",
                    "flex items-center justify-center text-text-3",
                    "hover:text-brand hover:border-brand hover:-translate-y-0.5",
                    "transition-all duration-200"
                  )}
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Shop */}
          <FooterColumn title="Shop" links={SHOP_LINKS} />

          {/* Col 3 — Account */}
          <FooterColumn title="Account" links={ACCOUNT_LINKS} />

          {/* Col 4 — Newsletter (Client Component is rendered inside Server Component) */}
          <Newsletter />
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-border w-full md:max-w-[90%] mx-auto">
        <div className="max-w-container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-text-3">
            © {new Date().getFullYear()}{" "}
            <Link href="/about" className="text-brand hover:underline">
              Zenvy
            </Link>{" "}
            · All rights reserved
          </p>
          <nav className="flex items-center gap-5">
            {BOTTOM_LINKS.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}