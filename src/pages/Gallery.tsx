import { useInView } from "@/components/useInView";
import heroImg from "@/assets/hero-workshop.jpg";
import bodyshopImg from "@/assets/bodyshop.jpg";
import detailingImg from "@/assets/detailing.jpg";
import restorationImg from "@/assets/restoration.jpg";
import engineImg from "@/assets/engine-detail.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";

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

const galleryImages = [
  { src: restorationImg, alt: "Luxury car restoration project at Tune Town Sharjah" },
  { src: bodyshopImg, alt: "Professional bodywork and paint at Tune Town auto workshop" },
  { src: detailingImg, alt: "Premium car detailing service in Sharjah" },
  { src: heroImg, alt: "Tune Town workshop interior with BMW service" },
  { src: engineImg, alt: "BMW engine rebuild at Tune Town auto maintenance" },
  { src: diagnosticsImg, alt: "Dealer-level diagnostics at German car specialist Sharjah" },
];

const Gallery = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-secondary">
        <div className="container-grid">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">
            GALLERY
          </h1>
          <div className="w-16 h-0.5 bg-primary mt-4 mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mb-10">
            From collision repairs to full restorations — see the quality of our work.
          </p>
        </div>

        <FadeSection className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {galleryImages.map((img, i) => (
              <div key={i} className="bg-background overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </FadeSection>
      </section>
    </main>
  );
};

export default Gallery;