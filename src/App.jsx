import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [genre, setGenre] = useState('')
  const [page, setPage] = useState((movies.length && movies[0].page) || 1)
  // const [lang, setLang] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=ro-RO')
      .then(res => res.json())
      .then(data => setGenres([data]))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=ro-RO&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genre !== '' ? `&with_genres=${genre}` : ''}&with_watch_monetization_types=flatrate`)
      .then(res => res.json())
      .then(data => setMovies([data]))
  }, [genre, page])

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/discover/movie?api_key=42cd67bf7f7e2edf50a5670874fbcaef&language=ro&sort_by=popularity.desc&include_adult=false&include_video=false&page=10&with_watch_monetization_types=flatrate')
  //     .then(res => res.json())
  //     .then(data => setLang([data]))
  // }, [])

  const filterMoviesByGenre = (id) => {
    setGenre(id)
    movies.filter(m => m.results.genre_ids === id)
  }
  const pageMinusNr = (minusPage) => {
    setPage(page - minusPage)
    if (page - minusPage <= 0) setPage(1)
  }
  const pagePlusNr = (plusPage) => {
    setPage(prev => prev + plusPage)
    if (page + plusPage >= movies[0].total_pages) setPage(movies[0].total_pages)
  }

  return (
    <>
      <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {genres.map(a => a.genres.map(r =>
          <button onClick={() => filterMoviesByGenre(r.id)}>{r.name}</button>
        ))}
      </div>
      {movies.length && <>
        <p>total pages {movies[0].total_pages}</p>
        <p>total results {movies[0].total_results}</p>
      </>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }}>
        {movies.map(a => a.results.map(r =>
          <div style={{ marginTop: '1rem', border: '1px solid', width: '300px' }}>
            <p>title {r.title}</p>
            <p>movie language {r.original_language}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="" />
            <p>overview {r.overview}</p>
            <p>genre ids {r.genre_ids.map(g => <span> {g} </span>)}</p>
            <p>release {r.release_date}</p>
            <p>vote average {r.vote_average}</p>
            <p>vote count {r.vote_count}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {movies.length && <div>
          {console.log(movies[0].page, 'aici')}
          {movies[0].page > 1 && <button onClick={() => pageMinusNr(2)}>page dsa {page - 2}</button>}
          {movies[0].page > 1 && <button onClick={() => pageMinusNr(1)}>pagevvv {page - 1}</button>}
          <button>page {page}</button>
          <button onClick={() => pagePlusNr(1)}>page {page + 1}</button>
          <button onClick={() => pagePlusNr(2)}>page {page + 2}</button>
        </div>
        }
      </div>
    </>
  )
}

export default App;
