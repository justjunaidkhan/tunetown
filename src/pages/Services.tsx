import { useInView } from "@/components/useInView";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Monitor, Cog, Car, Paintbrush, Sparkles } from "lucide-react";
import engineImg from "@/assets/engine-detail.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import bodyshopImg from "@/assets/bodyshop.jpg";
import detailingImg from "@/assets/detailing.jpg";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`opacity-0 ${inView ? "animate-fade-up" : ""} ${className}`}>
      {children}
    </div>
  );
}

const serviceDetails = [
  {
    icon: Wrench,
    title: "Mechanical Services",
    image: engineImg,
    imageAlt: "BMW engine bay mechanical service at Tune Town workshop Sharjah",
    desc: "Our 5 fully equipped service bays with hydraulic lifts handle everything from routine maintenance to complex mechanical repairs. We use advanced brand-specific special tools designed for European vehicles.",
    benefits: ["5 hydraulic lift service bays", "Brand-specific special tools", "BMW E, F, G series expertise", "Suspension & steering systems", "Brake system overhaul", "Cooling system repair"],
  },
  {
    icon: Monitor,
    title: "Diagnostics & Software Programming",
    image: diagnosticsImg,
    imageAlt: "Dealer-level diagnostic computer connected to European car in Sharjah",
    desc: "Access to dealer-level diagnostic software including ISTA, TIS, AutoAuth, Maxisys, and AllData. We perform comprehensive fault diagnosis, ECU programming, and software updates.",
    benefits: ["ISTA & TIS dealer software", "AutoAuth certified access", "Maxisys advanced diagnostics", "AllData technical database", "ECU programming & coding", "Module retrofitting"],
  },
  {
    icon: Car,
    title: "Collision Repair & Bodyshop",
    image: bodyshopImg,
    imageAlt: "Luxury car in professional paint booth at Tune Town bodyshop Sharjah",
    desc: "Our specialized bodyshop facility restores severely damaged luxury vehicles including Rolls Royce, Bentley, Maserati, Mercedes-Benz, and BMW to factory-perfect condition.",
    benefits: ["State-of-the-art paint booth with heater", "Hydraulic dent repair station", "Large sanding & priming bay", "6 dedicated bodyshop bays", "Structural frame straightening", "Color-matching technology"],
  },
  {
    icon: Cog,
    title: "Engine & Transmission Rebuild",
    image: engineImg,
    imageAlt: "Engine rebuild in clean room at Tune Town auto maintenance",
    desc: "Our dedicated clean section for engine and transmission rebuilding ensures contamination-free assembly. We handle complete rebuilds, overhauls, and performance upgrades.",
    benefits: ["Separate clean-room facility", "Complete engine overhaul", "Transmission rebuild & repair", "Turbocharger service", "Performance upgrades", "OEM parts sourcing"],
  },
  {
    icon: Sparkles,
    title: "Detailing & Car Care",
    image: detailingImg,
    imageAlt: "Professional car detailing and polishing at Tune Town Sharjah",
    desc: "Premium interior and exterior detailing services in our dedicated detailing bay. From paint correction to ceramic coating, we restore and protect your vehicle's finish.",
    benefits: ["Paint correction & polishing", "Ceramic coating application", "Interior deep cleaning", "Leather conditioning", "Engine bay detailing", "Headlight restoration"],
  },
];

const ServicesPage = () => (
  <main className="pt-16">
    {/* Header */}
    <section className="section-padding bg-secondary">
      <div className="container-grid">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground">OUR SERVICES</h1>
        <div className="w-16 h-0.5 bg-primary mt-4 mb-4" />
        <p className="font-body text-muted-foreground max-w-xl">
          Comprehensive automotive care for German and European luxury vehicles. Every service backed by dealer-level expertise and equipment.
        </p>
      </div>
    </section>

    {/* Service Sections */}
    {serviceDetails.map((service, idx) => (
      <section key={service.title} className={`section-padding ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <FadeSection className="container-grid">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:direction-reverse" : ""}`}>
            <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <service.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{service.title}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.benefits.map((b) => (
                  <li key={b} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </FadeSection>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-background">
      <FadeSection className="container-grid text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">READY TO GET STARTED?</h2>
        <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
          Book your appointment today and experience the difference.
        </p>
        <a href="tel:+971562616261" className="inline-block mt-8">
          <Button variant="cta" size="lg" className="gap-2 text-base">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </a>
      </FadeSection>
    </section>
  </main>
);

export default ServicesPage;
