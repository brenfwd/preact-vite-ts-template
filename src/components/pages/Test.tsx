import { Link } from "wouter-preact";

import { Routes } from "@/routes";

export function Test() {
  return (
    <>
      <p>
        This is the test page. You can{" "}
        <Link to={Routes.Home} class="underline">
          go back to the home page
        </Link>{" "}
        at any time.
      </p>
    </>
  );
}
