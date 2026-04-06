import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              alt="Tune Town logo"
              className="h-16 md:h-18 w-auto object-contain shrink-0"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-white/85 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a href="tel:+971562616261">
              <Button
                variant="cta"
                size="sm"
                className="h-11 px-6 rounded-md text-sm uppercase tracking-[0.1em]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-white/85 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a href="tel:+971562616261">
              <Button
                variant="cta"
                size="sm"
                className="w-full mt-3 h-11 rounded-md text-sm uppercase tracking-[0.1em]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;