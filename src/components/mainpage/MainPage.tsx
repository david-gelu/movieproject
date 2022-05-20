import React from 'react'
import { Movie, Genre } from '../../types'
import Language from './Language'
import MovieGenre from './MovieGenre'
import Movies from './Movies'
import PagesAndResults from './PagesAndResults'
import Pagination from './Pagination'

export default function MainPage(props: {
  movies: Movie[],
  setGenre: (id: number) => void,
  genresList: Genre[],
  setLang: (id: string[]) => void,
  page: number,
  setPage: (page: number) => void,
}) {
  const { movies, setGenre, genresList, page, setPage, setLang } = props
  return (
    <>
      <Pagination page={page} setPage={setPage} movies={movies} />
      <MovieGenre movies={movies} setGenre={setGenre} genresList={genresList} />
      <Language setLang={setLang} />
      <Movies movies={movies} />
      <PagesAndResults movies={movies} />
      <Pagination page={page} setPage={setPage} movies={movies} />
    </>
  )
}
