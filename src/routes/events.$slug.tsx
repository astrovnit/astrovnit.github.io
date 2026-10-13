import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { PlaceholderTag, Tag } from "@/components/cards";
import { events, getEvent } from "@/data/events";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event not found — AAC" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — AAC Events` },
        { name: "description", content: event.excerpt },
        { property: "og:title", content: `${event.title} — AAC Events` },
        { property: "og:description", content: event.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/events/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/events/${params.slug}` }],
    };
  },
  component: EventDetail,
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

function EventDetail() {
  const { event } = Route.useLoaderData();
  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <article>
      <header className="relative overflow-hidden pt-28">
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl px-5 pt-12 pb-16 lg:px-8">
          <Link
            to="/events"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All events
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Tag>{event.category}</Tag>
            <Tag>{event.status}</Tag>
            {event.placeholder ? <PlaceholderTag /> : null}
            {event.organizedBy && (
              <span className="text-muted-foreground font-mono text-xs">
                Organized by: {event.organizedBy}
              </span>
            )}
          </div>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            {event.title}
          </h1>
          <dl className="text-muted-foreground mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Date</dt>
              <dd>{event.displayDate || formatDate(event.date)}</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Time</dt>
              <dd>{event.time}</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Venue</dt>
              <dd>{event.venue}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="overflow-hidden bg-black/40 flex justify-center rounded-xl border border-border/70">
          <img
            src={event.image}
            alt={`Visual for ${event.title}`}
            loading="lazy"
            width={1131}
            height={1600}
            className="max-h-[640px] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-12 space-y-5 text-base leading-relaxed whitespace-pre-line">
          {event.description.map((p, idx) => (
            <p key={idx} className="text-muted-foreground">
              {renderContentWithLinks(p)}
            </p>
          ))}
        </div>

        {event.speakers?.length ? (
          <section className="mt-12">
            <h2 className="font-display text-xl font-semibold">Speakers</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {event.speakers.map((s) => (
                <li key={s.name}>
                  {s.name} — {s.affiliation}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {event.report ? (
          <section className="border-border/70 bg-card/50 mt-12 rounded-xl border p-8">
            <h2 className="font-display text-xl font-semibold">Event report</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{event.report}</p>
          </section>
        ) : null}

        {event.registrationUrl ? (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-12 inline-flex rounded-full px-6 py-3 text-sm font-medium transition-colors"
          >
            {event.registrationUrl.includes("whatsapp") ? "Join WhatsApp Group" : "Register for this event"}
          </a>
        ) : null}

        {related.length > 0 ? (
          <section className="border-border/60 mt-20 border-t pt-10">
            <h2 className="font-display text-xl font-semibold">Other events</h2>
            <ul className="mt-6 space-y-3">
              {related.map((e) => (
                <li key={e.slug}>
                  <Link
                    to="/events/$slug"
                    params={{ slug: e.slug }}
                    className="text-muted-foreground hover:text-accent flex items-baseline justify-between gap-4 text-sm transition-colors"
                  >
                    <span>{e.title}</span>
                    <span className="font-mono text-xs">{formatDate(e.date)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
