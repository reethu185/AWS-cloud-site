import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-10 overflow-hidden"
    >
      {/* Background image (HOME only) */}
      <div
        className="absolute left-0 top-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-image.jpeg)" }}
      />

      {/* Darker blue with shadow at right side */}
      <div
        className="absolute top-0 right-0 h-full w-1/3 -z-10 bg-[#0a1830] shadow-[rgba(0,0,0,0.45)_-20px_0px_60px_0px]"
        style={{
          borderTopRightRadius: "1.5rem",
          borderBottomRightRadius: "1.5rem",
        }}
      />

      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-aws transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer">
            <span className="h-1.5 w-1.5 rounded-full bg-aws shadow-[0_0_0_6px_rgba(255,153,0,0.14)]" />
            STUDENT-LED AWS CLOUD CLUB
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="leading-[0.92]"
        >
          <div className="text-off font-extrabold text-[64px] sm:text-[92px] md:text-[120px] tracking-tight">
            VVCE
          </div>

          <div className="text-outline font-extrabold text-[56px] sm:text-[86px] md:text-[112px] tracking-tight">
            COLLEGE
          </div>

          <div className="font-extrabold text-[56px] sm:text-[86px] md:text-[112px] tracking-tight">
            <span className="text-off">AWS </span>
            <span className="text-aws">CLUB</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-off/75"
        >
          Learn. Build. Deploy. Connect with VVCE’s premier cloud computing
          community.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#join"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-aws px-6 py-3 text-sm font-semibold text-[#1B2A41] shadow-[0_14px_35px_rgba(255,153,0,0.22)] hover:brightness-110 transition"
          >
            JOIN THE COMMUNITY
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-2xl border border-off/15 bg-off/5 px-6 py-3 text-sm text-off hover:bg-off/10 transition"
          >
            SCROLL DOWN
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center gap-3 text-xs tracking-[0.3em] text-off/50"
        >
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="inline-block"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
