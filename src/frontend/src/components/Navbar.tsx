import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, onToggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.logo.button"
          onClick={() => handleNav("#hero")}
          className="bg-transparent border-0 cursor-pointer p-0 flex items-center"
        >
          <img
            src="/assets/uploads/output-onlinepngtools-1.png"
            alt="Pressana Infra"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-9 w-auto" : "h-14 w-auto"
            }`}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
              onClick={() => handleNav(l.href)}
              className="relative text-cream/80 hover:text-gold text-sm tracking-wider font-sans transition-colors duration-200 group py-1"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-px gold-gradient group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="nav.darkmode.toggle"
            onClick={onToggleDark}
            className="p-2 rounded-full text-cream/70 hover:text-gold hover:bg-white/10 transition-all duration-200"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 gold-gradient text-navy text-sm font-semibold rounded-full hover:opacity-90 transition-all duration-200 ripple-effect tracking-wider"
            onClick={() => handleNav("#contact")}
          >
            Book Visit
          </button>
          <button
            type="button"
            className="lg:hidden p-2 text-cream"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-dark mt-2 mx-4 rounded-2xl p-6">
          {links.map((l) => (
            <button
              type="button"
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="block w-full text-left text-cream/80 hover:text-gold py-3 text-sm tracking-wider border-b border-white/10 last:border-0 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
