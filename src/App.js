import { createBrowserHistory } from "history";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Components/Home";

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
