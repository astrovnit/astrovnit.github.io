import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/lib/theme";
import { themeInitScript } from "@/lib/theme-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Signal lost</p>
        <h1 className="font-display mt-4 text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">This part of the sky is empty</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border-input hover:bg-accent/10 inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AAC | Ashlesha Astronomy Club — VNIT Nagpur" },
      {
        name: "description",
        content:
          "Astronomy, astrophysics, cosmology, observational astronomy, astrophotography, research and space technology at VNIT Nagpur.",
      },
      { property: "og:site_name", content: "AAC — Ashlesha Astronomy Club" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0b0f1a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/images.png`,
        type: "image/png",
      },
      {
        rel: "shortcut icon",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/images.png`,
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/images.png`,
      },
      {
        rel: "icon",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/favicon.png`,
        type: "image/png",
      },
      {
        rel: "icon",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/favicon.ico`,
        type: "image/x-icon",
      },
      {
        rel: "manifest",
        href: `${(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}/manifest.json`,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [{ children: themeInitScript }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <a
          href="#main"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-h-screen">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
