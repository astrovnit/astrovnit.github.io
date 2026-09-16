import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { PlaceholderTag, Tag } from "@/components/cards";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Observation sessions, orientations, stargazing nights, workshops and talks by Ashlesha Astronomy Club at VNIT Nagpur.",
      },
      { property: "og:title", content: "Events — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: "Upcoming, ongoing and past events from the astronomy club of VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function renderContentWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent underline font-medium break-all hover:text-accent/80 transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Schedule"
        title="Observation nights, talks & workshops."
        description="Upcoming observation sessions, astronomy orientations, lectures, and hands-on workshops."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        {events.length > 0 ? (
          <div className="space-y-12">
            {events.map((event) => (
              <Reveal key={event.slug}>
                <article className="border-border/70 bg-card/60 relative overflow-hidden rounded-2xl border shadow-xl">
                  {/* Event Poster Image */}
                  <div className="bg-black/50 border-b border-border/70 flex items-center justify-center p-4 sm:p-8">
                    <img
                      src={event.image}
                      alt={`Visual for ${event.title}`}
                      loading="eager"
                      width={1131}
                      height={1600}
                      className="max-h-[640px] w-auto max-w-full rounded-xl object-contain shadow-md"
                    />
                  </div>

                  {/* Event Details & Description strictly BELOW the image */}
                  <div className="p-6 sm:p-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag>{event.category}</Tag>
                      <Tag className="border-accent/40 text-accent">{event.status}</Tag>
                      {event.placeholder ? <PlaceholderTag /> : null}
                      {event.organizedBy && (
                        <span className="text-muted-foreground font-mono text-xs">
                          Organized by: {event.organizedBy}
                        </span>
                      )}
                    </div>

                    <h2 className="font-display mt-4 text-3xl font-semibold text-balance sm:text-4xl">
                      {event.title}
                    </h2>

                    <dl className="text-muted-foreground mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-border/50 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
                        <dt className="sr-only">Date</dt>
                        <dd>{event.displayDate || formatDate(event.date)}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                        <dt className="sr-only">Time</dt>
                        <dd>{event.time}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                        <dt className="sr-only">Venue</dt>
                        <dd>{event.venue}</dd>
                      </div>
                    </dl>

                    {/* Polished Description Below Image */}
                    <div className="mt-8 space-y-4 text-base leading-relaxed whitespace-pre-line text-muted-foreground">
                      {event.description.map((p, idx) => (
                        <p key={idx}>{renderContentWithLinks(p)}</p>
                      ))}
                    </div>

                    {event.registrationUrl ? (
                      <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors shadow-sm"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          Join WhatsApp Group
                        </a>
                        <Link
                          to="/events/$slug"
                          params={{ slug: event.slug }}
                          className="border-border/80 text-muted-foreground hover:border-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
                        >
                          Event Details
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border-border/70 bg-card/50 relative overflow-hidden rounded-2xl border p-12 text-center sm:p-16">
              <div
                aria-hidden="true"
                className="border-accent/20 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-60"
              />
              <div
                aria-hidden="true"
                className="border-accent/10 absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-40"
              />

              <div className="border-accent/40 bg-secondary/80 text-accent mx-auto grid h-12 w-12 place-items-center rounded-full border shadow-sm">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>

              <h2 className="font-display mt-6 text-2xl font-semibold sm:text-3xl">
                No events scheduled on the horizon yet.
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base leading-relaxed">
                The event calendar for the upcoming session is currently being finalized. Observation
                nights, workshops, and guest talks will be posted here soon.
              </p>
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
