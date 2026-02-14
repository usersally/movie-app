import { useNavigate } from "react-router";

export default function MovieCard({ movie, onFav, isFav }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movies/${movie.id}`)}
      className="bg-cyan-900 rounded shadow p-4 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="h-64 w-full object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2 text-blue-300">{movie.title}</h2>

      <p className="text-sm text-shadow-amber-50">{movie.description}</p>

      <p className="mt-1">⭐ {movie.rating}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onFav(movie);
        }}
        className={`mt-2 px-3 py-1 rounded text-white ${
          isFav ? "bg-red-500" : "bg-blue-600"
        }`}
      >
        {isFav ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}
