import React from 'react'
import { Movie } from '../../types'

export default function Pagination(props: { page: number, setPage: (page: number) => void, movies: Movie[] }) {
  const { page, setPage, movies } = props

  const pageMinusNr = (minusPage: number) => {
    setPage(page - minusPage)
    if (page - minusPage <= 0) setPage(1)
  }

  const pagePlusNr = (plusPage: number) => {
    setPage(page + plusPage)
    if (page + plusPage >= movies[0].total_pages) setPage(movies[0].total_pages)
  }
  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '.5em' }}>
      {movies?.length && <div>
        {movies[0].page > 1 && <button onClick={() => pageMinusNr(2)}>page {page - 2}</button>}
        {movies[0].page > 1 && <button onClick={() => pageMinusNr(1)}>page {page - 1}</button>}
        <button>page {page}</button>
        <button onClick={() => pagePlusNr(1)}>page {page + 1}</button>
        <button onClick={() => pagePlusNr(2)}>page {page + 2}</button>
      </div>
      }
    </div>
  )
}
