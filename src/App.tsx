import { Route, Switch } from "wouter-preact";

import { Routes } from "./routes";
import { Home } from "./components/pages/Home";
import { Test } from "./components/pages/Test";
import { DarkModeToggle } from "./components/ui/DarkModeToggle";

export function App() {
  return (
    <div class="md:mx-auto md:w-3/4 p-3">
      <h1 class="text-2xl">
        Preact-vite-ts-template <DarkModeToggle />
      </h1>
      <Switch>
        <Route path={Routes.Home} component={Home} />
        <Route path={Routes.Test} component={Test} />
      </Switch>
    </div>
  );
}
