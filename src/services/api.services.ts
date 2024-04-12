import { BASEURL, MOVIES } from "../constants/api.constants";

export const getMovies = async () => {
  const data = await fetch(BASEURL + MOVIES);
  const json = await data.json();
  console.log(json);
  return json;
};
