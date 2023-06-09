export interface Podcast {
  id: string
  title: string
  author: string
  image: string
  summary: string
  lastUpdate?: number
  episodes?: Episode[]
}

export interface Episode {
  id: number
  name: string
  date: string
  duration: number
  description: string
  audio: string
}
