import Hero from "./components/main/hero";
import FeaturedWork from "./components/main/featured_work";
import About from "./components/main/about";
import Experience from "./components/internships/internships";
import TechStack from "./components/main/tech_stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <About />
      <TechStack />
      <Experience />
    </main>
  );
}
