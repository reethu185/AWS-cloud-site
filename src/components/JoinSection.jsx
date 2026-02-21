import { motion } from "framer-motion";
export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative scroll-mt-28 min-h-[calc(100vh-96px)] flex items-center overflow-hidden"
    >
      {/* Subtle background gradient (matches site theme) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_80%_20%,rgba(255,153,0,0.08),transparent_60%),radial-gradient(700px_400px_at_20%_80%,rgba(96,165,250,0.08),transparent_60%),linear-gradient(180deg,#0B1323_0%,#0F1C34_100%)]" />

      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-xs tracking-[0.25em] text-off/60">
            [ JOIN ]
          </span>
          <div className="h-px flex-1 bg-off/10" />
        </motion.div>

        {/* Big Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-off font-extrabold tracking-tight leading-[0.9]
                     text-6xl sm:text-7xl md:text-8xl"
        >
          JOIN US
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-2xl text-off/70 text-base md:text-lg leading-relaxed"
        >
          Become a part of the VVCE AWS Club community. Learn cloud
          fundamentals, build real projects, and grow with students who are
          passionate about technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/GiyK49su1Nb5Q1Q9GoKc91"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3
                       rounded-2xl bg-aws px-8 py-4
                       text-sm font-bold tracking-[0.25em]
                       text-[#0B1323]
                       shadow-[0_18px_40px_rgba(255,153,0,0.25)]
                       transition-all duration-300
                       hover:translate-y-[-3px] hover:brightness-110"
          >
            WHATSAPP
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/reel/DU3EhlykhlH/?igsh=MW56c3V0cjk0dHM1NA=="
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3
                       rounded-2xl border border-off/15 bg-off/5
                       px-8 py-4 text-sm font-bold tracking-[0.25em]
                       text-off backdrop-blur
                       transition-all duration-300
                       hover:bg-off/10 hover:translate-y-[-3px]"
          >
            INSTAGRAM
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Small footer text */}
        <div className="mt-6 text-xs tracking-[0.25em] text-off/40">
          EVENTS • PROJECTS • WORKSHOPS • COMMUNITY
        </div>
      </div>
    </section>
  );
}