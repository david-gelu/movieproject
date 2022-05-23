export type Genre = {
  id: number,
  name: string
}

export type AllGenres = []

export type Genres = {
  genres: Genre
}

export type MovieGenre = {
  genre_ids: number | number[]
}
export type Results = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number | number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
export type Movie = {
  page: number,
  results: Results[],
  total_pages: number,
  total_results: number,
}

export type SearchResult = {
  media_type: string
  adult: boolean,
  backdrop_path: string,
  genre_ids: number | number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type Company = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type VideoDetails = {
  iso_639_1?: string,
  iso_3166_1?: string,
  name?: string,
  key?: string,
  site?: string,
  size?: number,
  type?: string,
  official?: boolean,
  published_at?: string,
  id?: string
}
export type Video = {
  results?: VideoDetails[]
}