import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container-grid section-padding !py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-heading text-lg text-foreground mb-4">TUNE TOWN</h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Sharjah's trusted workshop for German & European luxury vehicles. Established 2022.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">NAVIGATION</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/gallery" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Gallery & Contact</Link>
          </div>
        </div>
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
