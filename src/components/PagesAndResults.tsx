import React from 'react'
import { Movie } from '../types'

export default function PagesAndResults(props: { movies: Movie[] }) {
  const { movies } = props

  return (
    <>
      {movies?.length && <>
        <p>total pages {movies[0].total_pages}</p>
        <p>total results {movies[0].total_results}</p>
      </>}
    </>
  )
}
