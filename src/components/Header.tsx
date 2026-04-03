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
    <>
    <header className="fixed top-4 left-0 right-0 z-50 px-2 md:px-4 lg:px-6">
      <div className="mx-auto max-w-[1400px]">
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between h-16 md:h-[72px] px-4 md:px-6 lg:px-8">
              {/* Logo + Brand */}
              <Link to="/" className="flex items-center gap-3 min-w-0">
                <img
                  src={logo}
                  alt="Tune Town logo"
                  className="h-10 md:h-12 w-auto object-contain shrink-0"
                />
                <div className="leading-tight min-w-0">
                  <div className="font-heading text-sm md:text-lg tracking-[0.18em] text-white font-semibold whitespace-nowrap">
                    TUNE TOWN
                  </div>
                  <div className="hidden md:block text-[10px] uppercase tracking-[0.22em] text-primary whitespace-nowrap">
                    German & European Car Specialists
                  </div>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative text-sm uppercase tracking-[0.16em] transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  );
                })}

                <a href="tel:+971562616261">
                  <Button
                    variant="cta"
                    size="sm"
                    className="h-10 px-6 rounded-lg gap-2 text-sm uppercase tracking-[0.1em] bg-primary text-white hover:bg-primary/90 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </nav>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                type="button"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
              <div className="md:hidden border-t border-white/10 px-4 pb-4">
                <nav className="flex flex-col gap-1 pt-3">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className={`py-3 text-sm uppercase tracking-[0.16em] transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <a href="tel:+971562616261" className="mt-3">
                    <Button
                      variant="cta"
                      size="sm"
                      className="w-full h-10 rounded-lg gap-2 text-sm uppercase tracking-[0.1em] bg-primary text-white hover:bg-primary/90 shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide behind floating nav */}
    </>
  );
};

export default Header;