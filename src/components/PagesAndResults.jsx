
export default function PagesAndResults({ movies }) {
  return (
    <>
      {movies.length && <>
        <p>total pages {movies[0].total_pages}</p>
        <p>total results {movies[0].total_results}</p>
      </>}
    </>
  )
}
