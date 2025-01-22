import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./routes/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/List">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
