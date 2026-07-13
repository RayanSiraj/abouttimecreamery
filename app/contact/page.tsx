import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact About Time Creamery and The Stuffed Potato Truck about an event in Jacksonville or St Augustine, Florida.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--pink">
        <p className="utility-label">Bring the truck</p>
        <h1>Contact</h1>
        <p>
          Interested in working together? Fill out some info and we will be in
          touch shortly. We can&apos;t wait to hear from you!
        </p>
      </header>

      <section className="contact-section" aria-label="Contact form">
        <div className="contact-section__intro">
          <p className="utility-label">The Stuffed Potato truck + About Time Creamery</p>
          <h2>Tell us where to pull up.</h2>
          <address>
            <p>Serving the Jacksonville, FL and St Augustine, FL Area</p>
            <a href="mailto:Abouttimecreamery@gmail.com">
              Abouttimecreamery@gmail.com
            </a>
            <a href="mailto:Thestuffedpotatotruck@gmail.com">
              Thestuffedpotatotruck@gmail.com
            </a>
            <a href="tel:+14135621430">413-562-1430</a>
          </address>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
