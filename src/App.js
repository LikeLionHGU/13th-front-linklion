import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Main from "./routes/Main";
import List from "./routes/List";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/List">
            <List />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
