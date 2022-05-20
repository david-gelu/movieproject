import React, { useEffect, useState } from 'react'
import { Results, SearchResult } from 'src/types';

export default function Search(props: {
  searchData: SearchResult[],
  search: string,
  lang: string[],
  handleChange: (path: string) => void
}) {
  const { search, lang, handleChange, searchData } = props

  return (
    <div>
      {searchData?.map((a: any, idx: number) =>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }} key={`-${idx}`}>
          {a?.results?.map((r: Results) =>
            <div key={`${r.vote_count}-${r.release_date}-${r.original_language}-${idx}`} style={{ marginTop: '1rem', border: '1px solid', width: '370px', padding: '.5em 1em' }}>
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
