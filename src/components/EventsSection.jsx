import { motion } from "framer-motion";
export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative scroll-mt-28 min-h-[calc(100vh-96px)] flex items-center py-16 md:py-24 overflow-hidden"
    >
      {/* Animated, darker geometric shapes for visual interest */}
      <motion.div
        className="absolute -z-10 left-[-8vw] top-[-8vw] w-[32vw] h-[32vw] rounded-full bg-[#0a1830] opacity-80 blur-2xl"
        animate={{ scale: [1, 1.07, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 right-[-10vw] bottom-[-10vw] w-[28vw] h-[28vw] rounded-full bg-[#1b263b] opacity-70 blur-2xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 left-[20vw] bottom-[-6vw] w-[18vw] h-[18vw] rounded-[40%] bg-[#111827] opacity-60 blur-xl"
        animate={{ scale: [1, 1.12, 1], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 -z-20 bg-black/70" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />

      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Top kicker */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-xs tracking-[0.25em] text-off/70">[ 03 ]</span>
          <div className="h-px flex-1 bg-off/10" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-off"
        >
          UPCOMING EVENTS
        </motion.h2>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10"
        >
          <div className="text-off/70 text-xs tracking-[0.45em]">
            VVCE AWS CLUB
          </div>

          <div className="mt-3 relative inline-block">
            <div className="text-off font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-[0.22em]">
              COMING SOON
            </div>

            {/* animated underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-4 h-[3px] rounded-full bg-aws"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-off/75 text-base md:text-lg leading-relaxed"
          >
            We’re preparing workshops, cloud labs, and campus sessions for VVCE
            students. Follow us and stay ready — announcements will drop soon.
          </motion.p>

          {/* Floating “notify” pill */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-off/15 bg-off/5 px-5 py-3 text-sm text-off/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-aws shadow-[0_0_0_8px_rgba(255,153,0,0.12)]" />
            Events will be announced soon
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
