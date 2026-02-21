import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LevelUpSection from "./components/LevelUpSection";
import EventsSection from "./components/EventsSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";
import RecruitmentPopup from "./components/RecruitmentPopup";

export default function App() {
  return (
    <>
      {/* Recruitment Popup */}
      <RecruitmentPopup />

      <div className="min-h-screen bg-navy text-off flex items-center justify-center">
        <div className="w-full h-full min-h-screen max-w-[1920px] border border-off/20 rounded-2xl mx-auto">
          
          <Navbar />

          {/* HOME full-screen only */}
          <Hero />

          {/* ABOUT */}
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
    </>
  );
}
