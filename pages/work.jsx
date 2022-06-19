import Title from "@/components/Layout/Title";
import Hero from "@/components/WorkPage/Hero";
import Projects from "@/components/WorkPage/Projects";
import SearchBar from "@/components/WorkPage/SearchBar";

export default function Work() {
  return (
    <>
      {" "}
      <Title title={"Work"} />
      <Hero />
      <SearchBar />
      <Projects />
    </>
  );
}
