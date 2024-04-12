import { Movie } from "../../types/movieType";

function MovieItem({ movieData }: { movieData: Movie }): JSX.Element {
  const { movie } = movieData;

  return <div className="bg-slate-200 m-3">{movie}</div>;
}

export default MovieItem;
