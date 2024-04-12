import { Movie } from "../../types/movieType";

function MovieItem({ movieData }: { movieData: Movie }): JSX.Element {
  const { movie, rating } = movieData;

  return (
    <div className="rounded-md cursor-pointer text-center py-4 flex flex-col justify-between min-h-28 shadow-cardShadow">
      <p className="text-2xl">{movie}</p>
      <p className="text-xl">Rating : {rating}</p>
    </div>
  );
}

export default MovieItem;
