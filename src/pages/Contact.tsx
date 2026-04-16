import { useState } from "react";
import { useInView } from "@/components/useInView";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

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

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 md:pt-28">
      <section className="section-padding bg-background">
        <FadeSection className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-foreground">
                CONTACT US
              </h1>
              <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-foreground text-sm font-medium">
                      Tune Town Auto Maintenance
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      9th Street, Industrial Area 2, Sharjah, UAE
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+971562616261"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-foreground text-sm group-hover:text-primary transition-colors">
                    +971 562616261
                  </span>
                </a>
              </div>

              <a href="tel:+971562616261" className="inline-block mb-8">
                <Button variant="cta" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Click to Call
                </Button>
              </a>

              <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.583146440285!2d55.4021251!3d25.318205799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b000d998be5%3A0xad758987d3fbc4df!2sTune%20Town%20Auto%20Maintenance!5e0!3m2!1sen!2sae!4v1773650396895!5m2!1sen!2sae"
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

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-6">
                SEND US A MESSAGE
              </h2>

              {submitted ? (
                <div className="bg-secondary p-8 text-center rounded-lg border border-border">
                  <h3 className="font-heading text-xl text-primary mb-2">
                    MESSAGE SENT
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange("name")}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-md"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange("email")}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-md"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange("message")}
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-md"
                      placeholder="Describe your vehicle and the service you need..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    variant="cta"
                    size="lg"
                    type="submit"
                    className="gap-2 w-full"
                    disabled={loading}
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Send Message"}
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

export default Contact;