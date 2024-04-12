import { useEffect, useState } from "react";
import { getMovies } from "../services/api.services";
import { Movie } from "../types/movieType";

export function useMovies(): [boolean, Movie[]] {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(function () {
    async function settingMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    settingMovies();
  }, []);

  return [isLoading, movies];
}
