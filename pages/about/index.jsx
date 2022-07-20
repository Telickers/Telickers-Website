import ChallengeAccepted from "@/components/AboutPage/ChallengeAccepted";
import Hero from "@/components/AboutPage/Hero";
import OurStory from "@/components/AboutPage/OurStory";
import Team from "@/components/AboutPage/Team";
import Why from "@/components/AboutPage/Why";
import PageTitle from "@/components/Common/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title="Telickers | About Us" />
      <Hero />
      <OurStory />
      <ChallengeAccepted />
      <Team />
      <Why />
    </>
  );
}
