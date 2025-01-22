import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import List from "./routes/List";

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
