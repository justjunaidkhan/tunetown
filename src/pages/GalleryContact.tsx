import { useState } from "react";
import { useInView } from "@/components/useInView";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Send } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import bodyshopImg from "@/assets/bodyshop.jpg";
import detailingImg from "@/assets/detailing.jpg";
import restorationImg from "@/assets/restoration.jpg";
import engineImg from "@/assets/engine-detail.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`opacity-0 ${inView ? "animate-fade-up" : ""} ${className}`}>
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

const GalleryContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16">
      {/* Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-grid">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">GALLERY</h1>
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

      {/* Contact */}
      <section className="section-padding bg-background">
        <FadeSection className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">CONTACT US</h2>
              <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-foreground text-sm font-medium">Tune Town Auto Maintenance</p>
                    <p className="font-body text-muted-foreground text-sm">9th Street, Industrial Area 2, Sharjah, UAE</p>
                  </div>
                </div>
                <a href="tel:+971562616261" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-foreground text-sm group-hover:text-primary transition-colors">+971 562616261</span>
                </a>
              </div>

              <a href="tel:+971562616261" className="inline-block mb-8">
                <Button variant="cta" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Click to Call
                </Button>
              </a>

              {/* Google Maps */}
              <div className="w-full aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d55.4!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tune Town Auto Maintenance location in Sharjah Industrial Area 2"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-6">SEND US A MESSAGE</h2>

              {submitted ? (
                <div className="bg-secondary p-8 text-center">
                  <h3 className="font-heading text-xl text-primary mb-2">MESSAGE SENT</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">Phone</label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Describe your vehicle and the service you need..."
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="gap-2 w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </FadeSection>
      </section>
    </main>
  );
};

export default GalleryContactPage;
