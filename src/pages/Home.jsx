import RecruitmentPopup from "../components/RecruitmentPopup";

export default function Home() {
  return (
    <>
      {/* Recruitment Popup */}
      <RecruitmentPopup />

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl font-semibold text-off">
          Welcome to{" "}
          <span className="text-aws">AWS Cloud Club</span>
        </h1>

        <p className="mt-4 max-w-2xl text-off/80">
          This is the Home page. We’ll replace this with the real hero section,
          perks preview, events preview, and footer.
        </p>
      </div>
    </>
  );
}
