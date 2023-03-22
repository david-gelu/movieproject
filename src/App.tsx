import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './components/mainpage/MainPage'
import MoviePage from './components/movie/MoviePage'
import Search from './components/Search'
import { Genre, Movie } from './types'
import { handleSearch, language } from './utils'

function App() {


  const [movies, setMovies] = useState<Movie[]>()
  const [genresList, setGenresList] = useState<Genre[]>()
  const [searchData, setSearchData] = useState([])
  const [genre, setGenre] = useState<number>()
  const [page, setPage] = useState((movies?.length && movies[0].page) || 1)
  const [lang, setLang] = useState<string[]>()
  const [search, setSearch] = useState('')
  const [path, setPath] = useState('/search')
  const [movieId, setMovieId] = useState(null)
  const movieKey = process.env.REACT_APP_MOVIE_KEY
  const client = new QueryClient()
  const handleChange = (path: string) => {
    if (search === '') return;
    handleSearch(search); // Pass the search value to handleSearch
    setSearch(search);
    setPath('/search');
    console.log(search, 'handle change');
  }



  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/search/multi?api_key=${movieKey}&language=${language()}${search ? `&query=${search}` : ''}&page=${page}&include_adult=false`)
  //     .then(res => res.json())
  //     .then(data => setSearchData([data]))
  // }, [search, lang, page])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=${language()}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genre !== null ? `&with_genres=${genre}` : ''}&with_watch_monetization_types=flatrate`)
      .then(res => res.json())
      .then(data => setMovies([data]))
  }, [genre, page, lang, movieKey])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${movieKey}&language=${language()}`)
      .then(res => res.json())
      .then(data => setGenresList([data]))
  }, [lang, movieKey])

  return (

    <QueryClientProvider client={client}>
      <nav>
        <Link to="/">Movie List</Link>
        <input type="search" onChange={(e) => {
          setSearch(e.target.value)
        }} />
        <Link to={path}>
          <button onClick={() => {
            handleChange('/search')
          }}>s</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <MainPage
            page={page}
            setPage={setPage}
            setLang={setLang}
            movies={movies}
            setGenre={setGenre}
            genresList={genresList}
            movieId={movieId}
            setMovieId={setMovieId}
            currentPage={movies}
          />
        } />
        <Route path="/:movie" element={
          <MoviePage
            movieId={movieId}
            lang={lang} />
        } />
        <Route path={path} element={
          <Search
            setPage={setPage}
            movies={movies}
            page={page}
            searchData={searchData}
            currentPage={searchData}
          />
        } />
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
