import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Movie, Results } from '../../types'

export default function Movies(props: { movies: Movie[], setMovieId: (id: number) => void }) {

  const { movies, setMovieId } = props

  return (
    <div >
      {movies?.map((movie: Movie, idx: number) =>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }} key={`-${idx}`}>
          {movie.results.map((result: Results) =>
            <div key={result.title} style={{ marginTop: '1rem', border: '1px solid', width: '370px', padding: '.5em 1em' }}>
              <p>title {result.title}</p>
              <p>movie original language {result.original_language}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="" />
              <p>overview {result.overview}</p>
              <p>release {result.release_date}</p>
              <p>vote average {result.vote_average}</p>
              <p>vote count {result.vote_count}</p>
              <NavLink to={`/:${result.title}`} onClick={() => setMovieId(result.id)}>Details</NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
