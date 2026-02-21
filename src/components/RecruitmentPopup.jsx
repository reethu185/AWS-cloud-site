import { useEffect, useState } from "react";

export default function RecruitmentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  setTimeout(() => {
    setShow(true);
  }, 1000);
}, []);

  const closePopup = () => {
  setShow(false);
};

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0B1E3F] text-white p-8 rounded-xl max-w-md w-full relative shadow-xl">

        <button
          onClick={closePopup}
          className="absolute top-3 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-3">
          Core Team Recruitment 🚀
        </h2>

        <p className="text-gray-300 mb-6">
          Applications are now open. Limited positions available.
        </p>

        <a
          href="https://tally.so/r/GxzQMe"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-lg"
        >
          Apply Now →
        </a>

      </div>
    </div>
  );
}
