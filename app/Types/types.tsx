export type Information = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
export type Location = {
  name: string
  url: string
}
export type Origin = {
  name: string
  url: string
}

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  Location: Location
  image: string
  episodes: string[]
  url: string
  created: string
}

export type CharactersInformation = {
  info: Information
  results: Character[]
}

// 0, "", null, undefined
// 1 == "1"
// 1 === "1"
