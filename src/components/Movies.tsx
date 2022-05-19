import React from "react";
import { Movie, Results } from '../types'

export default function Movies(props: { movies: Movie[] }) {
  const { movies } = props

  return (
    <div >
      {movies?.map((a: Movie, idx: number) =>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }} key={`-${idx}`}>
          {a.results.map((r: Results) =>
            <div key={r.title} style={{ marginTop: '1rem', border: '1px solid', width: '370px', padding: '.5em 1em' }}>
              <p>title {r.title}</p>
              <p>movie original language {r.original_language}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="" />
              <p>overview {r.overview}</p>
              <p>release {r.release_date}</p>
              <p>vote average {r.vote_average}</p>
              <p>vote count {r.vote_count}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
