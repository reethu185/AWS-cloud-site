import { useEffect, useRef } from "react";

const TEAM = [
  { name: "Yashwanth R", role: "Captain" },
  { name: "Full Name", role: "Vice Captain" },
  { name: "Full Name", role: "Technical Lead" },
  { name: "Full Name", role: "Treasurer" },
  { name: "Full Name", role: "Chief Editor" },
  { name: "Full Name", role: "Event Management Lead" },
  { name: "Full Name", role: "Social Media Lead" },
  { name: "Full Name", role: "Communication Lead" },
  { name: "Full Name", role: "Logistics Lead" },
  { name: "Full Name", role: "Documentation Lead" },
];

export default function TeamSection() {
  const scrollerRef = useRef(null);

  // Wheel scroll -> horizontal scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Convert vertical scroll into horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.1;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    // Auto-scroll horizontally when section is in view (very slow)
    let autoScrollInterval;
    const onScroll = () => {
      const section = document.getElementById("team");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        !autoScrollInterval
      ) {
        autoScrollInterval = setInterval(() => {
          el.scrollLeft += 0.03; // even slower scroll
        }, 16); // ~60fps
      } else if (
        (rect.top >= window.innerHeight || rect.bottom <= 0) &&
        autoScrollInterval
      ) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    };
    window.addEventListener("scroll", onScroll);
    // Initial check
    onScroll();
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, []);

  return (
    <section
      id="team"
      className="scroll-mt-28 min-h-[calc(100vh-96px)] py-16 md:py-24 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.25em] text-off/65">
              [ 05 ]
            </span>
            <div className="h-px flex-1 bg-off/10" />
          </div>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-off">
            OUR CORE TEAM
          </h2>

          <p className="mt-4 max-w-3xl text-off/75 leading-relaxed">
            Meet the VVCE AWS Club core members. Scroll down to move
            horizontally through the team cards.
          </p>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="relative overflow-x-auto overflow-y-hidden pb-6
                     [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {/* Hide scrollbar (Chrome/Safari) */}
          <style>{`
            .hide-scroll::-webkit-scrollbar { display: none; }
          `}</style>

          <div className="hide-scroll flex gap-6 pr-6">
            {TEAM.map((m, idx) => (
              <div
                key={`${m.role}-${idx}`}
                className={[
                  "group min-w-[260px] max-w-[260px] md:min-w-[290px] md:max-w-[290px]",
                  "rounded-2xl border bg-off/5 backdrop-blur",
                  "shadow-[0_18px_60px_rgba(0,0,0,0.28)]",
                  "transition-all duration-300 hover:scale-105",
                  "hover:border hover:border-aws border-off/0",
                ].join(" ")}
              >
                <div className="p-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    {m.role === "Captain" ? (
                      <img
                        src="/team-placeholder.jpeg"
                        alt={m.name}
                        className="h-[210px] w-full object-cover transition duration-300 rounded-2xl"
                      />
                    ) : (
                      <img
                        src="/psoon.png"
                        alt={m.name}
                        className="h-[210px] w-full object-cover transition duration-300 rounded-2xl"
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-extrabold tracking-tight text-off">
                      {m.name}
                    </div>
                    <div className="mt-1 text-sm text-off/60">{m.role}</div>
                    <div className="mt-4 h-px w-full bg-off/10 group-hover:bg-aws/40 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <div className="mt-3 text-xs tracking-[0.25em] text-off/45 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-aws/80" />
          SCROLL TO EXPLORE →
        </div>
      </div>
    </section>
  );
}
