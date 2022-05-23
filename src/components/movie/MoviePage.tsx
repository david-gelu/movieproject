import React, { useEffect, useState } from 'react'
import { Company, Genre, VideoDetails } from '../../types'

export default function Movie(props: { movieId: number, lang: string[] }) {
  const { movieId, lang } = props
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=${lang}&append_to_response=videos`)
      .then(res => res.json())
      .then(data => setMovie([data]))
  }, [lang, movieId])


  console.log(movie)
  return (
    <div>
      {movie.map((m: any) =>
        <div key={m.title}>
          <span>{m.title}</span>
          <span>{m.original_title}</span>
          <span>{m.original_language}</span>
          {m.genres.map((g: Genre) => <span key={g.id}>{g.name} ||</span>)}
          <img src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`} alt={m.title} />
          <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={m.title} />
          <span>{m.overview}</span>
          <span>{m.imdb_id}</span>
          <span>{m.popularity}</span>
          {m.production_companies.map((pc: Company) =>
            <div key={pc.name}>
              {pc.logo_path && <img src={`https://image.tmdb.org/t/p/w500/${pc.logo_path}`} alt={m.title} />}
              <span>{pc.name}</span>
              <span>{pc.origin_country}</span>
            </div>
          )}
          {m.production_countries.map((pc: Company) =>
            <div key={pc.name}>
              <span>{pc.name}</span>
            </div>
          )}
          <span>{m.release_date}</span>
          <span>${m.revenue}</span>
          <span>{m.runtime} minutes</span>
          {m.spoken_languages.map((lang: any) =>
            <div key={lang.name}>
              <span>{lang.name}</span>
            </div>
          )}
          <span>{m.status}</span>
          <span>{m.tagline}</span>
          <span>{m.vote_average}</span>
          <span>{m.vote_count}</span>
          <span>{m.release_date}</span>
          <span>official {m.homepage} link</span>
          {m.videos.results.map((video: VideoDetails, idx: number) =>
            <div key={idx}>
              <iframe
                crossOrigin='true'
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                //  width="420" height="315"
                src={`https://www.youtube.com/embed/${video.key}`}>
              </iframe>
              <span>{video.site}</span>
              <span>{video.published_at}</span>
            </div>
          )}
        </div>
      )}
    </div >
  )
}
