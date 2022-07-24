import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./Popular";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="popular" element={<Popular />} />
      </Routes>
    </Router>
  );
}

export default App;
