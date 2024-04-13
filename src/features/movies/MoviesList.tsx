import { useMovies } from "../../hooks/useMovies";
import MovieItem from "./MovieItem";
import LoadingScreen from "../../ui/LoadingScreen";

function MoviesList(): JSX.Element {
  const [isLoading, movies] = useMovies();
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-2 px-4 my-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
