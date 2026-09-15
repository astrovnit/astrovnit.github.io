import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GalleryCard, PlaceholderTag, Tag } from "@/components/cards";
import { FilterBar } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { gallery, galleryCategories } from "@/data/gallery";
import type { GalleryItem } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Astrophotography, observation sessions, projects and events archive from Ashlesha Astronomy Club, VNIT Nagpur.",
      },
      { property: "og:title", content: "Gallery — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content:
          "Visual archive of astrophotography, stargazing nights and club activities at VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? gallery : gallery.filter((g) => g.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Frames from the sky and the ground."
        description="Astrophotography, observation sessions, project documentation and club archives."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FilterBar
          options={galleryCategories}
          value={category}
          onChange={setCategory}
          label="Filter gallery by category"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <GalleryCard item={item} onOpen={() => setActiveItem(item)} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground mt-16 text-sm">No items in this category yet.</p>
        ) : null}
      </section>

      <Dialog open={!!activeItem} onOpenChange={(open) => !open && setActiveItem(null)}>
        {activeItem ? (
          <DialogContent className="border-border/80 bg-background/95 max-w-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-lg">
              <img
                src={activeItem.image}
                alt={activeItem.description}
                className="aspect-16/10 w-full object-cover"
              />
            </div>
            <DialogHeader className="text-left">
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Tag>{activeItem.category}</Tag>
                {activeItem.placeholder ? <PlaceholderTag /> : null}
                <span className="text-muted-foreground font-mono text-xs">
                  {formatDate(activeItem.date)}
                </span>
              </div>
              <DialogTitle className="font-display mt-2 text-xl font-semibold">
                {activeItem.title}
              </DialogTitle>
              <p className="text-accent text-xs">By {activeItem.photographer}</p>
              <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {activeItem.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
