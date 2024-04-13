import { Movie } from "../../types/movieType";

function MovieItem({ movieData }: { movieData: Movie }): JSX.Element {
  const { movie, rating, imdb_url } = movieData;

  return (
    <div className=" cursor-pointer text-center px-5 py-7 m-3 flex flex-col justify-between min-h-28 shadow-cardShadow border-solid border-[1px] border-x-secondary rounded-xl">
      <p className="text-2xl font-bold text-tertiary">{movie}</p>
      <p className="text-lg pb-8">Rating : {rating}</p>
      <button className="bg-tertiary text-primary text-2xl mx-4 rounded-xl">
        <a href={imdb_url} target="_blank">
          IMBD Link
        </a>
      </button>
    </div>
  );
}

export default MovieItem;
