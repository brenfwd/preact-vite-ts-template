import { Link } from "wouter-preact";

import { Routes } from "@/routes";

export function Home() {
  return (
    <>
      <p>Welcome to this web app, built using Preact, Vite, TypeScript, and Tailwind.</p>
      <p>
        This app uses Wouter for routing. You can{" "}
        <Link to={Routes.Test} class="underline">
          try it out
        </Link>
        .
      </p>
    </>
  );
}
