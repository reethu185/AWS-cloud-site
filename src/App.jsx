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
  const recruitmentOpen = false;
  return (
    <>
      {/* Recruitment Popup */}
      recruitmentOpen && <RecruitmentPopup />

      <div className="min-h-dvh bg-navy text-off">
          
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
    </>
  );
}
