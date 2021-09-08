import { Route, Switch } from "react-router";
import { routes } from "./constants/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={routes.welcome().path}
          component={routes.welcome().component}
        />
        <Route
          exact
          path={routes.game().path}
          component={routes.game().component}
        />
      </Switch>
    </div>
  );
}

export default App;
