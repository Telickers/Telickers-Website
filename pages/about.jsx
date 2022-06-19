import ChallengeAccepted from "@/components/AboutPage/ChallengeAccepted";
import Hero from "@/components/AboutPage/Hero";
import OurStory from "@/components/AboutPage/OurStory";
import Team from "@/components/AboutPage/Team";
import Why from "@/components/AboutPage/Why";
import Title from "@/components/Layout/Title";

export default function About() {
  return (
    <>
      <Title title={"About"} />
      <Hero />
      <OurStory />
      <ChallengeAccepted />
      <Team />
      <Why />
    </>
  );
}
