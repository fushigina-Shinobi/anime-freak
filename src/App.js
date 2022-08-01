import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./Popular";
import SingleAnime from "./SingleAnime";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="singleanime/:animeId" element={<SingleAnime />} />
      </Routes>
    </Router>
  );
}

export default App;
