import "./index.css";
import AnimeList from "./AnimeList";
import Navbarr from "./Navbar";
import Search from "./Search";

function App() {
  return (
    <div className="grid">
      <Navbarr />
      <Search />
      <AnimeList />
    </div>
  );
}

export default App;
