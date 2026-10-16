import { createFileRoute, redirect } from "@tanstack/react-router";

// The Siya9a Pro page moved to its own site; keep old links and search results working.
export const Route = createFileRoute("/pro")({
  beforeLoad: () => {
    throw redirect({ href: "https://siya9apro.ma/", statusCode: 301 });
  },
});
