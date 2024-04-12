import { useMovies } from "../../hooks/useMovies";
import MovieItem from "./MovieItem";

function MoviesList(): JSX.Element {
  const [isLoading, movies] = useMovies();
  if (isLoading) <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4 my-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
