import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import type { AacEvent, BlogPost, GalleryItem, Project, TeamMember } from "@/data/types";
import { cn, formatDate } from "@/lib/utils";

export function PlaceholderTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "border-ember/50 text-ember rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] uppercase",
        className,
      )}
      title="Placeholder content — to be replaced with real AAC data"
    >
      Placeholder
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-border/70 text-muted-foreground rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] uppercase">
      {children}
    </span>
  );
}

export function EventCard({ event }: { event: AacEvent }) {
  return (
    <article className="card-lift group border-border/70 bg-card/60 flex h-full flex-col overflow-hidden rounded-xl border">
      <Link to="/events/$slug" params={{ slug: event.slug }} className="block overflow-hidden bg-black/40">
        <img
          src={event.image}
          alt=""
          loading="lazy"
          decoding="async"
          width={1280}
          height={853}
          className="aspect-16/10 w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Tag>{event.category}</Tag>
          {event.placeholder ? <PlaceholderTag /> : null}
        </div>
        <h3 className="font-display text-xl leading-snug font-semibold">
          <Link
            to="/events/$slug"
            params={{ slug: event.slug }}
            className="hover:text-accent transition-colors"
          >
            {event.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{event.excerpt}</p>
        <dl className="text-muted-foreground mt-5 space-y-1.5 text-xs">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Date</dt>
            <dd>{event.displayDate || formatDate(event.date)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Time</dt>
            <dd>{event.time}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Venue</dt>
            <dd>{event.venue}</dd>
          </div>
        </dl>
        <div className="mt-6 flex items-center gap-3 pt-2">
          <Link
            to="/events/$slug"
            params={{ slug: event.slug }}
            className="text-accent inline-flex items-center gap-1 text-sm hover:underline"
          >
            Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="border-border/70 hover:border-accent hover:text-accent ml-auto rounded-full border px-3.5 py-1.5 text-xs transition-colors"
            >
              {event.registrationUrl.includes("whatsapp") ? "Join Group" : "Register"}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-lift group border-border/70 bg-card/60 flex h-full flex-col overflow-hidden rounded-xl border">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="block overflow-hidden">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          width={1280}
          height={853}
          className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          <Tag>{project.year}</Tag>
          {project.placeholder ? <PlaceholderTag /> : null}
        </div>
        <h3 className="font-display text-xl leading-snug font-semibold">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
          {project.excerpt}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((t) => (
            <li
              key={t}
              className="bg-secondary text-secondary-foreground rounded px-2 py-0.5 text-[11px]"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="text-accent mt-6 inline-flex items-center gap-1 text-sm hover:underline"
        >
          Read more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-lift group border-border/70 bg-card/60 flex h-full flex-col overflow-hidden rounded-xl border">
      <Link to="/blogs/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          decoding="async"
          width={1280}
          height={853}
          className="aspect-16/9 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Tag>{post.category}</Tag>
          {post.placeholder ? <PlaceholderTag /> : null}
        </div>
        <h3 className="font-display text-xl leading-snug font-semibold">
          <Link
            to="/blogs/$slug"
            params={{ slug: post.slug }}
            className="hover:text-accent transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
        <p className="text-muted-foreground mt-5 font-mono text-[11px] tracking-wide">
          {post.author} · {formatDate(post.date)} · {post.readingTime}
        </p>
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.role
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="card-lift border-border/70 bg-card/60 flex h-full flex-col rounded-xl border p-6">
      {/* Portrait placeholder — swap for a real photo when available. */}
      <div
        aria-hidden="true"
        className="border-border/70 bg-secondary text-muted-foreground font-display grid h-16 w-16 place-items-center rounded-full border text-sm tracking-widest"
      >
        {initials}
      </div>
      <h3 className="font-display mt-5 text-lg font-semibold">{member.name}</h3>
      <p className="text-accent mt-1 text-sm">{member.role}</p>
      <p className="text-muted-foreground mt-2 font-mono text-[11px] tracking-wide uppercase">
        {member.batch} · {member.department}
      </p>
      <p className="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed">{member.bio}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {member.placeholder ? <PlaceholderTag /> : null}
        {member.links?.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-accent text-xs transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-lift group border-border/70 bg-card/60 relative block w-full overflow-hidden rounded-xl border text-left cursor-pointer"
      aria-label={`Open photo from ${item.location || item.title}`}
    >
      <div className="overflow-hidden aspect-16/10 w-full bg-secondary/30">
        <img
          src={item.image}
          alt={item.description || item.location || item.title}
          loading="lazy"
          decoding="async"
          width={1280}
          height={853}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col p-5 space-y-1.5 text-sm">
        {item.event && (
          <p className="leading-snug">
            <span className="text-muted-foreground">Event: </span>
            <span className="font-medium text-foreground">{item.event}</span>
          </p>
        )}
        {item.location && (
          <p className="leading-snug">
            <span className="text-muted-foreground">Location: </span>
            <span className="text-foreground">{item.location}</span>
          </p>
        )}
        <p className="leading-snug">
          <span className="text-muted-foreground">Clicked by: </span>
          <span className="text-foreground">{item.photographer}</span>
        </p>
      </div>
    </button>
  );
}
