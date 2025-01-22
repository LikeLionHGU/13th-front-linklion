import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Main from "./routes/Main";
import List from "./routes/List";
import Join from "./routes/Join";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
