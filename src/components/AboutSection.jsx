import { motion } from "framer-motion";

const items = [
  {
    title: "Hands-on Builds",
    desc: "Ship real cloud projects—static sites, APIs, and automation—so you learn by doing, not just watching.",
    tag: "BUILD",
  },
  {
    title: "Workshops & Labs",
    desc: "Weekly sessions on AWS fundamentals, architecture, and tools with guided labs and mini-challenges.",
    tag: "LEARN",
  },
  {
    title: "Community",
    desc: "Meet people who are also learning cloud. Collaborate, form teams, and grow together.",
    tag: "CONNECT",
  },
  {
    title: "Project Teams",
    desc: "Join small squads to build portfolio projects: serverless apps, dashboards, deployments, and more.",
    tag: "TEAM",
  },
  {
    title: "Mentorship",
    desc: "Get help from seniors and mentors—roadmaps, resume reviews, and learning direction when you’re stuck.",
    tag: "GUIDE",
  },
  {
    title: "Career Boost",
    desc: "Prep for internships: mock interviews, certification guidance, and showcasing your projects properly.",
    tag: "CAREER",
  },
];

// Animation variants by column
const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};
const fromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};
const pop = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

function pickVariant(index) {
  const col = index % 3; // 0 left, 1 middle, 2 right
  if (col === 0) return fromLeft;
  if (col === 2) return fromRight;
  return pop;
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 min-h-[calc(100vh-96px)] flex items-center py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.25em] text-off/65">
              [ 01 ]
            </span>
            <div className="h-px flex-1 bg-off/10" />
          </div>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-off">
            WHO WE ARE
          </h2>

          <p className="mt-4 max-w-3xl text-off/75 leading-relaxed">
            VVCE AWS Club is a student-led community focused on cloud learning
            through hands-on projects, workshops, and collaboration. We help
            members go from “new to cloud” to confidently building and deploying.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              variants={pickVariant(idx)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="group rounded-2xl border border-off/10 bg-off/5 backdrop-blur p-6
                         shadow-[0_18px_60px_rgba(0,0,0,0.28)]
                         hover:bg-off/10 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.35em] text-aws">
                  {it.tag}
                </span>

                <span className="h-2 w-2 rounded-full bg-aws/90 shadow-[0_0_0_6px_rgba(255,153,0,0.12)]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-off group-hover:text-off transition">
                {it.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-off/70">
                {it.desc}
              </p>

              <div className="mt-5 h-px w-full bg-off/10" />

              <div className="mt-4 flex items-center gap-2 text-xs text-off/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-off/30" />
                <span>Explore more below</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}