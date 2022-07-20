import "./index.css";
import MovieList from "./MovieList";
import Navbarr from "./Navbar";
import Search from "./Search";

function App() {
  return (
    <div className="grid">
      <Navbarr />
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
