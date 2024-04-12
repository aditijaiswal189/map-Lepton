import { useMovies } from "../../hooks/useMovies";
import MovieItem from "./MovieItem";

function MoviesList(): JSX.Element {
  const [isLoading, movies] = useMovies();
  if (isLoading) <p>Loading...</p>;

  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
