import { Link, Route } from "wouter-preact";

import { DarkModeToggle } from "./components/ui/DarkModeToggle";
import { Test } from "./components/pages/Test";

export const App = () => {
  return (
    <div class="md:mx-auto md:w-3/4 p-3">
      <h1 class="text-3xl">Hello World</h1>
      <p>
        You can edit this file in the <code>src/App.tsx</code> file.
      </p>
      <p>
        <Link to="/" class="text-primary">
          Home
        </Link>
        <br />
        <Link to="/test" class="text-primary">
          Test Page
        </Link>
      </p>
      <Route path="/test" component={Test} />
      <DarkModeToggle />
    </div>
  );
};
