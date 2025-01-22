import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./routes/Main";
import List from "./routes/List";
import Join from "./routes/Join";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
