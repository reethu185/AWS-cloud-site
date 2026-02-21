import { motion } from "framer-motion";
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-28 min-h-[calc(100vh-96px)] flex items-center py-16 md:py-24 overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/soon.jpeg)" }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-xs tracking-[0.25em] text-off/70">[ 04 ]</span>
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
          PROJECTS
        </motion.h2>

        {/* Coming soon block */}
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

            {/* underline animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-4 h-[3px] rounded-full bg-aws"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-off/75 text-base md:text-lg leading-relaxed"
          >
            We’re building a project roadmap for VVCE students — beginner-friendly
            AWS builds, team projects, and real deployment practice. First project
            announcements will be shared soon.
          </motion.p>

          {/* Floating pill */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-off/15 bg-off/5 px-5 py-3 text-sm text-off/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-aws shadow-[0_0_0_8px_rgba(255,153,0,0.12)]" />
            Projects will be announced soon
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}