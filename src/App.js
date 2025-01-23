import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import List from "./routes/List";
import Join from "./routes/Join";
import ApplyModal from "./components/ApplyModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/apply" element={<ApplyModal />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
