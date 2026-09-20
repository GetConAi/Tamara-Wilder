import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy.html", label: "Privacy Policy" },
  { href: "/terms-of-service.html", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 mt-auto border-t-4 border-pink">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-serif text-xl font-bold mb-2">Tamara Wilder</p>
            <p className="text-white/60 text-sm max-w-xs">
              Faith-driven author writing on identity, healing, and restoration.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/60 mb-3">
              Pages
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/60 mb-3">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Email", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col items-center gap-3 text-center text-white/60 text-xs">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p>
            &copy; {new Date().getFullYear()} Tamara Wilder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
