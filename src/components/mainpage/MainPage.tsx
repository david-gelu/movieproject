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
  movieId: number,
  setMovieId: (id: number) => void,
  currentPage: any
}) {

  const { movies, setLang, currentPage } = props
  console.log(currentPage)
  return (
    <>
      <Pagination {...props} />
      <MovieGenre  {...props} />
      <Language setLang={setLang} />
      <Movies {...props} />
      <PagesAndResults movies={movies} />
      <Pagination  {...props} />
    </>
  )
}
