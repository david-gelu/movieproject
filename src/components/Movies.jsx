import Test from './Test'

export default function Movies({ movies, genresList, genre, setGenre }) {

  return (
    <div >
      {movies.map((a, idx) =>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }} key={`${a.title}-${idx}`}>
          {a.results.map(r =>
            <div key={r.title} style={{ marginTop: '1rem', border: '1px solid', width: '370px', padding: '.5em 1em' }}>
              <p>title {r.title}</p>
              <p>movie original language {r.original_language}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="" />
              <p>overview {r.overview}</p>
              <Test gendreId={r.genre_ids} genresList={genresList} />
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
