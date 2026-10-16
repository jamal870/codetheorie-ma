import { createFileRoute, redirect } from "@tanstack/react-router";

// Former standalone page; the student offer lives on /eleves.
export const Route = createFileRoute("/code")({
  beforeLoad: () => {
    throw redirect({ to: "/eleves", statusCode: 301 });
  },
});
