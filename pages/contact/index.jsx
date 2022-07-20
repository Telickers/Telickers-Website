import ContactHero from "@/components/ContactPage/Hero";
import PageTitle from "@/components/Common/PageTitle";
import ContactForm from "@/components/ContactPage/FormSection";

export default function Contact() {
  return (
    <>
      <PageTitle title="Telickers | Contact Us" />
      <ContactHero />
      <ContactForm />
    </>
  );
}
