import { useInView } from "@/components/useInView";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Monitor, Car, Shield, Users, Cog, Paintbrush, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-workshop.jpg";

const stats = [
  { value: "4,000+", label: "Happy Customers" },
  { value: "14", label: "Service Bays" },
  { value: "20,000", label: "Sqft Workshop" },
  { value: "15", label: "Expert Technicians" },
];

const differentiators = [
  { icon: Car, title: "BMW Specialists", desc: "Deep expertise across E, F, and G series generations." },
  { icon: Monitor, title: "Dealer-Level Diagnostics", desc: "ISTA, TIS, AutoAuth, Maxisys, AllData software access." },
  { icon: Shield, title: "Advanced Bodyshop", desc: "State-of-the-art paint booth, hydraulic dent repair." },
  { icon: Users, title: "Experienced Technicians", desc: "15 skilled professionals with European car expertise." },
  { icon: Cog, title: "Premium Equipment", desc: "Brand-specific special tools and hydraulic lifts." },
];

const services = [
  { icon: Wrench, title: "Mechanical Repair", desc: "Complete mechanical services for European vehicles." },
  { icon: Monitor, title: "Diagnostics", desc: "Dealer-level software and programming." },
  { icon: Cog, title: "Engine & Transmission", desc: "Clean-room rebuilds for engines and transmissions." },
  { icon: Car, title: "Collision Repair", desc: "Full structural and collision repair for luxury cars." },
  { icon: Paintbrush, title: "Bodywork & Paint", desc: "Premium paint booth with professional finishing." },
  { icon: Sparkles, title: "Car Detailing", desc: "Full interior and exterior detailing services." },
];

const testimonials = [
  { name: "Ahmed K.", car: "BMW 530i", text: "Outstanding service. They diagnosed an issue that two other shops missed. Highly professional team.", rating: 5 },
  { name: "Mohammad S.", car: "Mercedes C300", text: "Tune Town restored my car after a major accident. It looks brand new. Exceptional bodywork quality.", rating: 5 },
  { name: "Sarah L.", car: "Audi Q7", text: "The only workshop I trust with my Audi. Dealer-level diagnostics at a fraction of the cost.", rating: 5 },
  { name: "Khalid R.", car: "BMW M4", text: "Their BMW expertise is unmatched in Sharjah. Fast, reliable, and transparent pricing.", rating: 5 },
];

function StatBlock({ value, label, delay }: { value: string; label: string; delay: string }) {
  const { ref, inView } = useInView(0.3);
  return (
    <div ref={ref} className="text-center">
      <div className={`font-heading text-4xl md:text-6xl text-primary opacity-0 ${inView ? `animate-glitch-in ${delay}` : ""}`}>
        {value}
      </div>
      <div className={`font-body text-sm text-muted-foreground mt-2 opacity-0 ${inView ? "animate-fade-up animation-delay-400" : ""}`}>
        {label}
      </div>
    </div>
  );
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`opacity-0 ${inView ? "animate-fade-up" : ""} ${className}`}>
      {children}
    </div>
  );
}

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tune Town Auto Maintenance workshop with BMW on hydraulic lift" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative container-grid section-padding pt-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
              SHARJAH'S TRUSTED WORKSHOP FOR GERMAN & EUROPEAN CARS
            </h1>
            <p className="font-body text-muted-foreground mt-6 text-lg max-w-lg leading-relaxed">
              Precision engineering for BMW, Mercedes, Audi, Porsche, Bentley, and Rolls Royce. Dealer-level diagnostics. Uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="tel:+971562616261">
                <Button variant="cta" size="lg" className="gap-2 text-base">
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </Button>
              </a>
              <Link to="/services">
                <Button variant="ctaOutline" size="lg" className="text-base">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">ABOUT TUNE TOWN</h2>
            <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed text-base">
              Established in 2022, Tune Town Auto Maintenance has rapidly become Sharjah's premier destination for European and German vehicle care. With over 4,000 satisfied customers and a 20,000 sqft facility, we deliver uncompromising quality using dealer-level diagnostic tools and brand-specific equipment. Our team of 15 expert technicians specializes in BMW E, F, and G series, alongside Mercedes-Benz, Audi, Porsche, Bentley, Maserati, and Rolls Royce.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* What Sets Us Apart — Tabbed */}
      <section className="section-padding">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">WHAT SETS US APART</h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-background p-6 md:p-8 flex flex-col">
                <d.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-sm text-foreground mb-2">{d.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">MAIN SERVICES</h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-8 group transition-colors duration-200 hover:bg-card">
                <s.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-sm text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services">
              <Button variant="ctaOutline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </FadeSection>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-grid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {stats.map((s, i) => (
              <StatBlock
                key={s.label}
                value={s.value}
                label={s.label}
                delay={i === 0 ? "" : i === 1 ? "animation-delay-100" : i === 2 ? "animation-delay-200" : "animation-delay-300"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">CLIENT TESTIMONIALS</h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="font-heading text-sm text-foreground">{t.name}</div>
                <div className="font-body text-xs text-muted-foreground">{t.car}</div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <FadeSection className="container-grid text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">BOOK YOUR CAR INSPECTION TODAY</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Experience dealer-level service at competitive prices. Call us now or visit our workshop in Sharjah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="tel:+971562616261">
              <Button variant="cta" size="lg" className="gap-2 text-base">
                <Phone className="w-4 h-4" />
                +971 562616261
              </Button>
            </a>
            <Link to="/gallery">
              <Button variant="ctaOutline" size="lg" className="text-base">
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeSection>
      </section>
    </main>
  );
};

export default HomePage;
