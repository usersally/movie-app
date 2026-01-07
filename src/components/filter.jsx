export default function Filter({ search, setSearch, rating, setRating }) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      <input
        type="text"
        placeholder="Search by title"
        className="border p-2 rounded w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={0}>All ratings</option>
        <option value={3}>3+</option>
        <option value={5}>5+</option>
        <option value={8}>8</option>
      </select>
    </div>
  );
}
