import { useInView } from "@/components/useInView";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Wrench,
  Monitor,
  Car,
  Shield,
  Users,
  Cog,
  Paintbrush,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-workshop.jpg";

const stats = [
  { value: "4,000+", label: "Vehicles Serviced" },
  { value: "14", label: "Professional Service Bays" },
  { value: "20,000", label: "Sqft Workshop Facility" },
  { value: "15", label: "Skilled Technicians" },
];

const differentiators = [
  {
    icon: Car,
    title: "German Car Specialists",
    desc: "Specialized expertise in BMW, Mercedes-Benz, Audi, Porsche, and other European vehicles.",
  },
  {
    icon: Monitor,
    title: "Dealer-Level Diagnostics",
    desc: "ISTA, TIS, AutoAuth, Maxisys, and AllData systems for accurate fault detection and repair.",
  },
  {
    icon: Shield,
    title: "Advanced Bodyshop",
    desc: "Modern paint booth, hydraulic dent repair systems, and collision restoration for premium vehicles.",
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    desc: "A skilled team of professionals trained to handle complex mechanical and electrical repairs.",
  },
  {
    icon: Cog,
    title: "Premium Workshop Equipment",
    desc: "Hydraulic lifts, brand-specific tools, and precision equipment designed for luxury and performance cars.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Mechanical Repair",
    desc: "Professional repair and maintenance services including suspension, brakes, cooling systems, and engine components.",
  },
  {
    icon: Monitor,
    title: "Advanced Diagnostics",
    desc: "Dealer-level diagnostic equipment for accurate troubleshooting of modern German and European cars.",
  },
  {
    icon: Cog,
    title: "Engine & Transmission Repair",
    desc: "Precision rebuilds and repairs for engines and gearboxes using professional tools and procedures.",
  },
  {
    icon: Car,
    title: "Collision Repair",
    desc: "Structural and accident repair services designed to restore vehicles to factory-standard condition.",
  },
  {
    icon: Paintbrush,
    title: "Bodywork & Paint",
    desc: "Professional denting, body repair, and premium paint finishing for luxury and performance vehicles.",
  },
  {
    icon: Sparkles,
    title: "Car Detailing",
    desc: "Interior and exterior detailing services to restore and maintain the appearance of your vehicle.",
  },
];

const testimonials = [
  {
    name: "Ahmed K.",
    car: "BMW 530i",
    text: "Outstanding service. They diagnosed an issue that two other shops missed. Highly professional team.",
    rating: 5,
  },
  {
    name: "Mohammad S.",
    car: "Mercedes C300",
    text: "Tune Town restored my car after a major accident. It looks brand new. Exceptional bodywork quality.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    car: "Audi Q7",
    text: "The only workshop I trust with my Audi. Dealer-level diagnostics at a fraction of the cost.",
    rating: 5,
  },
  {
    name: "Khalid R.",
    car: "BMW M4",
    text: "Their BMW expertise is unmatched in Sharjah. Fast, reliable, and transparent pricing.",
    rating: 5,
  },
];

function StatBlock({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: string;
}) {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-heading text-4xl md:text-6xl text-primary opacity-0 ${
          inView ? `animate-glitch-in ${delay}` : ""
        }`}
      >
        {value}
      </div>
      <div
        className={`font-body text-sm text-muted-foreground mt-2 opacity-0 ${
          inView ? "animate-fade-up animation-delay-400" : ""
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${inView ? "animate-fade-up" : ""} ${className}`}
    >
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
          <img
            src={heroImg}
            alt="Tune Town Auto Maintenance workshop with BMW on hydraulic lift"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative container-grid section-padding pt-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">
              Dealer-Level Diagnostics • Expert Technicians • Premium Workshop
            </p>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
              YOUR TRUSTED WORKSHOP FOR GERMAN & EUROPEAN CARS
            </h1>

            <p className="font-body text-muted-foreground mt-6 text-lg max-w-2xl leading-relaxed">
              Expert diagnostics, mechanical repair, collision restoration, and
              premium bodyshop services for BMW, Mercedes-Benz, Audi, Porsche,
              Bentley, Maserati and other European vehicles.
            </p>

            <div className="flex flex-wrap gap-3 mt-6 text-sm text-foreground/80 font-body">
              <span>BMW</span>
              <span>•</span>
              <span>Mercedes-Benz</span>
              <span>•</span>
              <span>Audi</span>
              <span>•</span>
              <span>Porsche</span>
              <span>•</span>
              <span>Bentley</span>
              <span>•</span>
              <span>Maserati</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="tel:+971562616261">
                <Button variant="cta" size="lg" className="gap-2 text-base">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="ctaOutline" size="lg" className="text-base">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <div className="max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              ABOUT TUNE TOWN AUTO MAINTENANCE
            </h2>
            <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed text-base">
              Tune Town Auto Maintenance is a specialized European and German
              car repair workshop located in Sharjah. Since 2022, we have built
              a strong reputation for delivering dealer-level diagnostics,
              precision repairs, and premium automotive service.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-base mt-4">
              Our 20,000 square foot facility is equipped with advanced
              diagnostic tools, brand-specific equipment, and a modern bodyshop
              capable of handling everything from routine maintenance to full
              vehicle restoration.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-base mt-4">
              With over 4,000 satisfied customers and a team of 15 experienced
              technicians, Tune Town has become a trusted destination for BMW,
              Mercedes-Benz, Audi, Porsche, Bentley, Maserati, Rolls Royce, and
              other European vehicles in the UAE.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            WHY CAR OWNERS TRUST TUNE TOWN
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-background p-6 md:p-8 flex flex-col"
              >
                <d.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-sm text-foreground mb-2">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            OUR AUTOMOTIVE SERVICES
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-4" />
          <p className="font-body text-muted-foreground max-w-2xl mb-10">
            Complete repair and maintenance solutions for German and European
            vehicles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 group transition-colors duration-200 hover:bg-card"
              >
                <s.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-sm text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
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
                delay={
                  i === 0
                    ? ""
                    : i === 1
                    ? "animation-delay-100"
                    : i === 2
                    ? "animation-delay-200"
                    : "animation-delay-300"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-10 bg-background border-y border-border">
        <div className="container-grid">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground font-body tracking-wide uppercase">
            <span>BMW</span>
            <span>•</span>
            <span>Mercedes-Benz</span>
            <span>•</span>
            <span>Audi</span>
            <span>•</span>
            <span>Porsche</span>
            <span>•</span>
            <span>Bentley</span>
            <span>•</span>
            <span>Maserati</span>
            <span>•</span>
            <span>Rolls Royce</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-4" />
          <p className="font-body text-muted-foreground max-w-2xl mb-10">
            Trusted by luxury and performance car owners across Sharjah and
            Dubai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="font-heading text-sm text-foreground">
                  {t.name}
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  {t.car}
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* SEO Section */}
      <section className="section-padding bg-secondary">
        <FadeSection className="container-grid">
          <div className="max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              SPECIALISTS IN GERMAN & EUROPEAN VEHICLES
            </h2>
            <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed text-base">
              Tune Town Auto Maintenance provides professional repair and diagnostic services for BMW, 
              Mercedes-Benz, Audi, Porsche, Bentley, Maserati, Rolls-Royce, Volkswagen, and other European vehicles.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-base mt-4">The facility includes paintless dent removal, spot paint repair, aluminum welding, five heavy-duty hydraulic lifts, 
              automatic AC refrigerant systems, and a fully air-sealed paint booth to deliver precision repair and premium finishing.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <FadeSection className="container-grid text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            BOOK YOUR CAR INSPECTION TODAY
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you need diagnostics, mechanical repair, collision
            restoration, or routine maintenance, Tune Town Auto Maintenance is
            ready to assist. Visit our workshop or contact our team to
            schedule your vehicle inspection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="tel:+971562616261">
              <Button variant="cta" size="lg" className="gap-2 text-base">
                <Phone className="w-4 h-4" />
                Call +971 562616261
              </Button>
            </a>
            <Link to="/contact">
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