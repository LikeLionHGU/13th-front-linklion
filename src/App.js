import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import List from "./routes/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Main">
          <Main />
        </Route>
        <Route path="/List">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
