import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { AuthRoute, PrivateRoute } from "./HOC/Route";
import SignIn from "./Views/SignIn";

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <PrivateRoute Component={Home} exact path="/" redirectPath="/signin" />
        <AuthRoute Component={SignIn} exact path="/signin" redirectPath="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
