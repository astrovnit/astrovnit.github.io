import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import {
  committeeHeads,
  executiveLeadership,
  facultyIncharges,
  researchLeadership,
  type CoreMember,
} from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — AAC, VNIT Nagpur" },
      {
        name: "description",
        content: `Meet the Faculty Incharges and Core Committee 2026–27 of ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:title", content: "Team — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: `Faculty Incharges and Core Committee 2026–27 of ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function MemberShowcase({ member, priority = false }: { member: CoreMember; priority?: boolean }) {
  return (
    <figure className="group flex flex-col items-center text-center">
      {/* Large Portrait Photograph */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 shadow-2xl transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] ${
          priority ? "aspect-[3/4] max-w-sm sm:max-w-md" : "aspect-[3/4] max-w-xs sm:max-w-sm"
        }`}
      >
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: member.objectPosition || "center" }}
        />
        {/* Subtle bottom vignette to ground the portrait */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </div>

      {/* Editorial Typography */}
      <figcaption className="mt-5 flex flex-col items-center">
        <h3
          className={`font-display font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent ${
            priority ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {member.name}
        </h3>

        <p
          className={`text-accent font-medium tracking-wide ${
            priority ? "mt-1.5 text-base sm:text-lg" : "mt-1 text-sm sm:text-base"
          }`}
        >
          {member.role}
        </p>

        {member.tagline ? (
          <p className="text-muted-foreground/80 mt-2.5 max-w-xs text-balance italic leading-relaxed text-xs sm:text-sm">
            {member.tagline}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}

function TeamPage() {
  return (
    <div className="relative min-h-screen">
      {/* Full-Page Dark Astronomy & Starry Universe Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Soft celestial radial glows */}
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-accent/10 via-indigo-950/15 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 bg-gradient-to-bl from-accent/5 via-sky-950/10 to-transparent blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-tr from-accent/5 via-indigo-950/10 to-transparent blur-3xl opacity-40" />

        {/* Ambient starfield drift */}
        <div className="starfield drift absolute inset-0 opacity-30" />
      </div>

      <PageHeader
        eyebrow="Core Committee 2026–27"
        title="The People Behind the Telescopes."
        description={`The student committee driving astronomy, astrophysics research, space technology, and observational stargazing at ${site.instituteShort}.`}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 space-y-32 sm:space-y-40 pb-36">
        {/* ========================================================= */}
        {/* 1. FACULTY INCHARGES                                      */}
        {/* ========================================================= */}
        <section aria-labelledby="faculty-heading">
          <Reveal>
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="border-accent/40 bg-accent/10 text-accent rounded-full border px-4 py-1 font-mono text-[11px] tracking-[0.22em] uppercase">
                Faculty Advisors
              </span>
              <h2
                id="faculty-heading"
                className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl text-balance"
              >
                Faculty Incharges
              </h2>
              <div className="bg-accent/30 mt-4 h-px w-16" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 justify-items-center">
            {facultyIncharges.map((member, i) => (
              <Reveal key={member.id} delay={i * 100} className="w-full">
                <MemberShowcase member={member} priority />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. PRESIDENT & VICE-PRESIDENT                             */}
        {/* ========================================================= */}
        <section aria-labelledby="executive-heading">
          <Reveal>
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="border-accent/40 bg-accent/10 text-accent rounded-full border px-4 py-1 font-mono text-[11px] tracking-[0.22em] uppercase">
                Executive Leadership
              </span>
              <h2
                id="executive-heading"
                className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl text-balance"
              >
                President & Vice-President
              </h2>
              <div className="bg-accent/30 mt-4 h-px w-16" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 justify-items-center">
            {executiveLeadership.map((member, i) => (
              <Reveal key={member.id} delay={i * 100} className="w-full">
                <MemberShowcase member={member} priority />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. HEADS OF RESEARCH                                      */}
        {/* ========================================================= */}
        <section aria-labelledby="research-heading">
          <Reveal>
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="border-accent/40 bg-accent/10 text-accent rounded-full border px-4 py-1 font-mono text-[11px] tracking-[0.22em] uppercase">
                Research Leadership
              </span>
              <h2
                id="research-heading"
                className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl text-balance"
              >
                Heads of Research
              </h2>
              <div className="bg-accent/30 mt-4 h-px w-16" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 justify-items-center">
            {researchLeadership.map((member, i) => (
              <Reveal key={member.id} delay={i * 100} className="w-full">
                <MemberShowcase member={member} priority />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. DOMAIN & TECHNICAL LEADS                               */}
        {/* ========================================================= */}
        <section aria-labelledby="committee-heading">
          <Reveal>
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="border-border/70 bg-secondary/50 text-muted-foreground rounded-full border px-4 py-1 font-mono text-[11px] tracking-[0.22em] uppercase">
                Committee Heads
              </span>
              <h2
                id="committee-heading"
                className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl text-balance"
              >
                Domain & Technical Leads
              </h2>
              <div className="bg-border/60 mt-4 h-px w-16" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="space-y-12 sm:space-y-16">
            {/* Disha Garpal (Technical Head) & Mrunal Jadhav (Head of Content Creation) */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 justify-items-center">
              {committeeHeads.slice(0, 2).map((member, i) => (
                <Reveal key={member.id} delay={i * 70} className="w-full">
                  <MemberShowcase member={member} />
                </Reveal>
              ))}
            </div>

            {/* Head of Design, Head of Multimedia, Head of Public Relations */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 justify-items-center">
              {committeeHeads.slice(2).map((member, i) => (
                <Reveal key={member.id} delay={(i + 2) * 70} className="w-full">
                  <MemberShowcase member={member} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
