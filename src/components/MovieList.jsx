import MovieCard from "./MovieCard";

export default function MovieList({ movies, onFav, favmovies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          movie={movie}
          onFav={onFav}
          isFav={favmovies.some((f) => f.title === movie.title)}
        />
      ))}
    </div>
  );
}
