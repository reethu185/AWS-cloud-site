import { useEffect } from "react";

export default function Join() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1E3F] to-black text-white py-12">
      
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Join the <span className="text-orange-500">Core Team</span>
        </h1>
        <p className="mt-4 text-gray-300">
          Build. Lead. Innovate. Become part of AWS Cloud Club VVCE.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4">
        <iframe
          data-tally-src="https://tally.so/r/GxzQMe?transparentBackground=1"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="AWS Cloud Club VVCE Core Team Recruitment"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

    </div>
  );
}
