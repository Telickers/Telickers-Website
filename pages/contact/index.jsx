import ContactHero from "@/components/ContactPage/Hero";
import SEO from "@/components/Common/SEO";
import ContactForm from "@/components/ContactPage/FormSection";

export default function Contact() {
  return (
    <>
      <SEO title="Telickers | Contact Us" />
      <ContactHero />
      <ContactForm />
    </>
  );
}
