import React, { useEffect, useState } from 'react'
import { AllGenres, Genres, MovieGenre, Genre } from './types'
const Test = (props: { gendreId: MovieGenre[], genresList: AllGenres }) => {

  const { gendreId, genresList } = props

  const [genreMovie, setGenreMovie] = useState([])

  const allGenres = genresList.map((g: Genres) => g.genres)
  const filtered = allGenres.map((a: { id: number }) => a.id)

  // .filter((item:number[]) => gendreId.includes(item))

  console.log(allGenres, 'all')
  console.log(gendreId, 'gi')
  console.log(filtered, 'f')
  return (
    <p style={{ display: 'flex', gap: '.5em' }}>
      genre {genreMovie?.map(f => <span> f.name </span>)}
    </p>
  )
}
export default Test