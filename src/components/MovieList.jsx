import { useState } from "react";
import { useNavigate } from "react-router";
import Filter from "./filter";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating
    );
  });

  const toggleFavorite = (movie) => {
    if (favorites.includes(movie.id)) {
      setFavorites(favorites.filter((id) => id !== movie.id));
    } else {
      setFavorites([...favorites, movie.id]);
    }
  };

  return (
    <div className="min-h-screen bg-cyan-950 p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        🎬 Movie App
      </h1>

      <Filter
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFav={toggleFavorite}
            isFav={favorites.includes(movie.id)}
          />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <p className="text-white text-center mt-8">No movies found</p>
      )}
    </div>
  );
}
