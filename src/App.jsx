import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LevelUpSection from "./components/LevelUpSection";
import EventsSection from "./components/EventsSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";
function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs tracking-[0.25em] text-off/70">
            {kicker}
          </span>
          <div className="h-px flex-1 bg-off/10" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-off">{title}</h2>

        <div className="mt-4 max-w-3xl text-off/75 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-off flex items-center justify-center">
      <div className="w-full h-full min-h-screen max-w-[1920px] border border-off/20 rounded-2xl mx-auto">
        <Navbar />

        {/* HOME full-screen only */}
        <Hero />

        {/* ABOUT (new animated section) */}
        <AboutSection />

        {/* Other sections */}
        <LevelUpSection />
        <EventsSection />

        <ProjectsSection />

        <TeamSection />

        <JoinSection />

        <Footer />
      </div>
    </div>
  );
}
