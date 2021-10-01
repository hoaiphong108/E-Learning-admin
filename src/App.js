import { createBrowserHistory } from "history";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Views/SignIn";

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={SignIn} exact path="/signin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
