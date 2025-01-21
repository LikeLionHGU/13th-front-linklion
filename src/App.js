import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
