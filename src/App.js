import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
