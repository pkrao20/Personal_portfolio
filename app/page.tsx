import portfolioData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Server Component — data resolved at request time on the server.
export default function Home() {
  const data = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar name={data.name} />

      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          subtitle={data.subtitle}
          location={data.location}
          available={data.available}
          contact={data.contact}
        />

        <div className="border-t border-black/8">
          <About summary={data.summary} />
        </div>

        <div className="border-t border-black/8">
          <Experience experience={data.experience} />
        </div>

        <div className="border-t border-black/8">
          <Projects projects={data.projects} />
        </div>

        <div className="border-t border-black/8">
          <Skills skills={data.skills} />
        </div>

        <div className="border-t border-black/8">
          <Education education={data.education} />
        </div>

        <div className="border-t border-black/8">
          <Achievements achievements={data.achievements} />
        </div>

        <div className="border-t border-black/8">
          <Contact contact={data.contact} />
        </div>
      </main>

      <Footer name={data.name} />
    </div>
  );
}
