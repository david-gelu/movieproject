
export default function MovieGenre({ movies, setGenre, genresList }) {

  const filterMoviesByGenre = (id) => {
    setGenre(id)
    movies.filter(m => m.results.genre_ids === id)
  }

  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      {genresList.map(a => a.genres.map(r =>
        <button key={`${r.id}-${r.name}`} onClick={() => filterMoviesByGenre(r.id)}>{r.name}</button>
      ))}
    </div>
  )
}
