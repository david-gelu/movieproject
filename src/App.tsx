import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'
import Search from './components/Search'
import { Genre, Movie } from './types'

function App() {
  const [movies, setMovies] = useState<Movie[]>()
  const [genresList, setGenresList] = useState<Genre[]>()
  const [genre, setGenre] = useState<number>()
  const [page, setPage] = useState((movies?.length && movies[0].page) || 1)
  const [lang, setLang] = useState<string[]>()
  const [searchData, setSearchData] = useState([])
  const [search, setSearch] = useState('')
  const [path, setPath] = useState('/search')

  const handleChange = (path: string) => {
    if (search === '') return
    else setPath(prev => prev = path)
  }
  const handleSearch = (e: any) => {
    if (e.target.value === '') window.location.href = '/'
    else setSearch(e.target.value)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=${lang}${search ? `&query=${search}` : ''}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setSearchData([data]))
  }, [search, lang])

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
      <nav>
        <Link to="/">Movie List</Link>
        <input type="search" onChange={(e) => handleSearch(e)} />
        <Link to={path}>
          <button onClick={() => search && handleChange(path)}>s</button>
        </Link>
      </nav>
      <Routes>
        dsdsdv
        <Route path="/" element={
          <MainPage page={page} setPage={setPage} setLang={setLang} movies={movies} setGenre={setGenre} genresList={genresList} />

        } />
        <Route path={path} element={
          <Search searchData={searchData} search={search} lang={lang} handleChange={handleChange} />
        } />
      </Routes>
    </>
  )
}

export default App;
