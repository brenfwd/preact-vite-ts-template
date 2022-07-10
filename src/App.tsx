import { Link, Route, Switch } from "wouter";

import styles from "./App.module.scss";
import { Test } from "./Test";

export const App = () => {
  return (
    <div class={styles.App}>
      <h1>Hello World</h1>
      <p>
        You can edit this file in the <code class="mono">src/App.tsx</code> file.
      </p>
      <p>
        <Link to="/">Home</Link>
        <br />
        <Link to="/test">Test Page</Link>
      </p>
      <Switch>
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
};
