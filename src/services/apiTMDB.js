import {API_KEY, BASE_URL} from './../constants';
export const fetchFilms = async () => {
  const req = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr&page=1`,
  );

  const data = await req.json();
  return data;
};

export const fetchOneFilm = async (id) => {
  const req = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr`);
  const data = await req.json();
  return data;
};

export const getImagePath = file_path =>
  `https://image.tmdb.org/t/p/w500${file_path}`;
