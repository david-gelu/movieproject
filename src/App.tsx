import React from 'react'
import { useState, useEffect } from 'react'
import Language from './components/Language'
import MovieGenre from './components/MovieGenre'
import Movies from './components/Movies'
import PagesAndResults from './components/PagesAndResults'
import Pagination from './components/Pagination'
import { Genre, Movie } from './types'

function App() {
  const [movies, setMovies] = useState<Movie[]>()
  const [genresList, setGenresList] = useState<Genre[]>()
  const [genre, setGenre] = useState<number>()
  const [page, setPage] = useState((movies?.length && movies[0].page) || 1)
  const [lang, setLang] = useState<string[]>()
  const [searchData, setSearchData] = useState(movies)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=${lang}${search ? `&query=${search}` : ''}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setSearchData([data]))
  }, [search, lang])

  // console.log(searchData);
  console.log(genresList)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genre !== null ? `&with_genres=${genre}` : ''}&with_watch_monetization_types=flatrate`)
      .then(res => res.json())
      .then(data => setMovies([data]))
  }, [genre, page, lang])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=${lang}`)
      .then(res => res.json())
      .then(data => setGenresList([data]))
  }, [lang])
  return (
    <>
      <MovieGenre movies={movies} genresList={genresList} setGenre={setGenre} lang={lang} />
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <Language setLang={setLang} />
      <PagesAndResults movies={movies} />
      <Pagination page={page} setPage={setPage} movies={movies} />
      <Movies movies={movies} />
      <Pagination page={page} setPage={setPage} movies={movies} />
    </>
  )
}

export default App;
