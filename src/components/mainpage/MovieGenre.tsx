import React from "react"
import { Genre, Movie } from '../../types'

export default function MovieGenre(props: { movies: Movie[], setGenre: (id: number) => void, genresList: Genre[] }) {
  const { movies, setGenre, genresList } = props

  const filterMoviesByGenre = (id: number) => {
    setGenre(id)
    movies?.filter((m: any) => m.results.genre_ids === id)
  }

  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      {genresList?.map((a: any) => a.genres.map((r: Genre) =>
        <button key={`${r.id}-${r.name}`} onClick={() => filterMoviesByGenre(r.id)}>{r.name}</button>
      ))}
    </div>
  )
}
