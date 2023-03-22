import { handleSearch } from 'src/utils';
import { language } from './utils';

const movieKey = process.env.REACT_APP_MOVIE_KEY

export const dataSearch = async (page = 0, lang = language() || 'en', searchFn = handleSearch || null) => {
  const search = searchFn();
  console.log("search:", search)
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${movieKey}&language=${lang}${search ? `&query=${search}` : ''}&page=${page}&include_adult=false`);
  const data = await response.json();
  console.log("data:", data)
  return data;
}

// export const dataMovies=async(page = 0, lang = language)=> {
//   const response =await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genre !== null ? `&with_genres=${genre}` : ''}&with_watch_monetization_types=flatrate`)
//   const data = await response.json();
//   console.log(data)
//   return data;
// }

// useEffect(() => {
//   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${movieKey}&language=${language()}`)
//     .then(res => res.json())
//     .then(data => setGenresList([data]))
// }, [lang, movieKey])