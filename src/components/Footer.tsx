import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container-grid section-padding !py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SECTION */}
        <div>
          <h4 className="font-heading text-lg text-foreground mb-4">TUNE TOWN</h4>
          
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Sharjah's trusted workshop for German & European luxury vehicles. Established 2022.
          </p>

          {/* ✅ SOCIAL ICONS WITH LINKS */}
          <div className="flex items-center gap-4">
            
            {/* Facebook */}
            <a 
              href="https://web.facebook.com/profile.php?id=61587722586098" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/tunetown.ae/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@tunetown.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M12.75 2h2.5c.2 1.6 1.5 2.9 3.1 3.1v2.5c-1.3-.1-2.5-.5-3.6-1.2v6.3c0 3.5-2.8 6.3-6.3 6.3S2 16.2 2 12.7 4.8 6.4 8.3 6.4c.4 0 .7 0 1.1.1v2.6c-.3-.1-.7-.2-1.1-.2-2 0-3.6 1.6-3.6 3.6S6.3 16.1 8.3 16.1s3.6-1.6 3.6-3.6V2z" />
              </svg>
            </a>

          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">NAVIGATION</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/gallery" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Gallery & Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">CONTACT</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+971562616261" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +971 562616261
            </a>
            <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              9th Street, Industrial Area 2, Sharjah, UAE
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tune Town Auto Maintenance. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;