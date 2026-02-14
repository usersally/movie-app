import { useParams, useNavigate } from "react-router";
import MovieCard from "./MovieCard";

export default function Description({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <p className="text-white">Movie not found</p>;
  }

  return (
    <div className="min-h-screen bg-cyan-950 text-white p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-600 px-4 py-2 rounded cursor-pointer"
      >
        ⬅ Back
      </button>

      <div className="max-w-3xl mx-auto">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-96 object-cover rounded"
        />

        <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>

        <p className="mt-2 text-lg">
          {movie.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ea, at obcaecati saepe architecto aliquam sint vitae eius
          eveniet reprehenderit similique esse, excepturi, quibusdam vel. Aut
          nemo ea possimus quas hic! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea, at obcaecati saepe architecto aliquam sint vitae
          eius eveniet reprehenderit similique esse, excepturi, quibusdam vel.
          Aut nemo ea possimus quas hic!
        </p>

        <p className="mt-2 text-yellow-400 text-xl">⭐ {movie.rating}</p>
      </div>
    </div>
  );
}
