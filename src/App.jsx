import { BrowserRouter, Routes, Route } from "react-router"; // Keep as react-router
import MovieList from "./components/MovieList";
import Description from "./components/Description";
import { movies } from "./movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<Description movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}
