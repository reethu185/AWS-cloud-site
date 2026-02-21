import { useEffect, useState } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "level-up", label: "Level Up" },
  { id: "events", label: "Events" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "join", label: "Join Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section while scrolling
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={[
            "mt-4 rounded-2xl border backdrop-blur",
            "transition-all duration-200",
            scrolled
              ? "border-aws/60 bg-navy/35 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
              : "border-aws/60 bg-navy/35",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <button
              onClick={() => jump("home")}
              className="flex items-center gap-3"
            >
              <span className="h-3 w-3 rounded-full bg-aws shadow-[0_0_0_6px_rgba(255,153,0,0.12)]" />
              <span className="text-sm font-semibold tracking-[0.22em] text-off cursor-pointer">
                {"AWS CLOUD CLUB".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-125 hover:text-aws hover:drop-shadow-[0_4px_16px_rgba(255,153,0,0.45)]"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </button>

            {/* Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => jump(item.id)}
                    className={[
                      "px-3 py-2 rounded-xl text-sm transition",
                      isActive
                        ? "text-aws bg-off/10"
                        : "text-off/80 hover:text-off hover:bg-off/10",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => jump("join")}
                className="ml-2 rounded-2xl bg-aws px-4 py-2 text-sm font-semibold text-navy hover:brightness-110 transition shadow-[0_10px_26px_rgba(255,153,0,0.22)]"
              >
                Join →
              </button>
            </nav>

            {/* Mobile */}
            <button
              className="lg:hidden rounded-xl border border-off/15 bg-off/5 px-3 py-2 text-off"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="lg:hidden px-4 pb-4">
              <div className="rounded-2xl border border-off/10 bg-navy/80 p-2">
                {NAV.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => jump(item.id)}
                      className={[
                        "w-full text-left px-3 py-2 rounded-xl text-sm transition",
                        isActive
                          ? "text-aws bg-off/10"
                          : "text-off/80 hover:text-off hover:bg-off/10",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => jump("join")}
                  className="mt-2 w-full rounded-2xl bg-aws px-4 py-2 text-sm font-semibold text-navy hover:brightness-110 transition"
                >
                  Join →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
