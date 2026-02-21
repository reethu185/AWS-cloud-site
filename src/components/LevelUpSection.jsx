const CARDS = [
  {
    title: "VVCE Cloud Practice",
    desc:
      "At VVCE AWS Club, we focus on real implementation. Students deploy apps, configure services, and learn how AWS works in practical scenarios—beyond classroom theory.",
  },
  {
    title: "Campus Skill Workshops",
    desc:
      "Workshops inside VVCE on AWS fundamentals, DevOps basics, cloud security, and deployment. Designed for beginners and intermediate learners to grow confidently.",
  },
  {
    title: "VVCE Tech Community",
    desc:
      "A campus community for cloud learners. Meet VVCE students, form teams, share resources, and collaborate on projects in a supportive environment.",
  },
  {
    title: "Hackathons & Showcases",
    desc:
      "Participate in cloud challenges, internal hackathons, and project showcases. Improve problem-solving, presentation skills, and build a strong portfolio.",
  },
];

export default function LevelUpSection() {
  return (
    <section id="level-up" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.25em] text-off/65">
              [ 02 ]
            </span>
            <div className="h-px flex-1 bg-off/10" />
          </div>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-off">
            LEVEL UP
          </h2>

          <div className="mt-3 h-[3px] w-44 rounded-full bg-aws" />

          <p className="mt-4 max-w-3xl text-off/75 leading-relaxed">
            Level Up at VVCE AWS Club is where classroom learning turns into real
            implementation. Explore what you’ll gain as a member.
          </p>
        </div>

        {/* 2 Columns — each column has 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {CARDS.slice(0, 2).map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-off/10 bg-off/5 backdrop-blur p-7
                           shadow-[0_18px_60px_rgba(0,0,0,0.28)]
                           transition-all duration-300
                           hover:border-aws/40 hover:bg-aws/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-extrabold tracking-tight text-off">
                    {card.title}
                  </h3>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aws shadow-[0_0_0_7px_rgba(255,153,0,0.12)]" />
                </div>

                <p className="mt-3 text-off/70 leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-6 h-px w-full bg-off/15 group-hover:bg-aws/40 transition" />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {CARDS.slice(2, 4).map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-off/10 bg-off/5 backdrop-blur p-7
                           shadow-[0_18px_60px_rgba(0,0,0,0.28)]
                           transition-all duration-300
                           hover:border-aws/40 hover:bg-aws/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-extrabold tracking-tight text-off">
                    {card.title}
                  </h3>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aws shadow-[0_0_0_7px_rgba(255,153,0,0.12)]" />
                </div>

                <p className="mt-3 text-off/70 leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-6 h-px w-full bg-off/15 group-hover:bg-aws/40 transition" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}