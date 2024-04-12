import { useMovies } from "../../hooks/useMovies";

function MoviesList() {
  const [isLoading, movies] = useMovies();
  if (isLoading) <p>Loading...</p>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.movie}</div>
      ))}
    </div>
  );
}

export default MoviesList;
