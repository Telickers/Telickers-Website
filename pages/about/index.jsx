import ChallengeAccepted from "@/components/AboutPage/ChallengeAccepted";
import Hero from "@/components/AboutPage/Hero";
import OurStory from "@/components/AboutPage/OurStory";
import Team from "@/components/AboutPage/Team";
import Why from "@/components/AboutPage/Why";
import SEO from "@/components/Common/SEO";

export default function About() {
  return (
    <>
      <SEO title="About Us | Telickers" />
      <Hero />
      <OurStory />
      <ChallengeAccepted />
      <Team />
      <Why />
    </>
  );
}
