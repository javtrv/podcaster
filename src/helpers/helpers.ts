import { type Podcast, type Episode } from '../types.d'

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}

export const hasPassed24Hours = (date: number): boolean => {
  const timeDifference = milisecondsDate() - date
  const hoursDifference = timeDifference / (1000 * 60 * 60)

  return hoursDifference > 24 || hoursDifference <= 0
}

const milisecondsDate = (): number => {
  const currentDate = new Date()
  return currentDate.getTime()
}

export const milisecondsToTime = (miliseconds: number): string => {
  if (miliseconds === undefined) return 'No data'
  const totalSeconds = Math.floor(miliseconds / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`.replace(/^00:/, '')
}

export const formatDate = (date: string): string => {
  const dateObject = new Date(date)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()
  return `${day}/${month}/${year}`
}

export const savePodcastList = (podcastList: Podcast[]) => {
  localStorage.setItem('podcaster-podcastList', JSON.stringify(podcastList))
  localStorage.setItem('podcaster-lastUpdate', milisecondsDate().toString())
}

export const getPodcastList = (): Podcast[] => {
  const podcastList = localStorage.getItem('podcaster-podcastList')
  if (podcastList === null) return []
  return JSON.parse(podcastList)
}

export const getLastUpdate = (): number => {
  const lastUpdate = localStorage.getItem('podcaster-lastUpdate')
  if (lastUpdate === null) return milisecondsDate()
  return parseInt(lastUpdate)
}

export const setViewedPodcast = (podcast: Podcast) => {
  const viewedPodcastLocalStorage = localStorage.getItem('podcaster-viewedPodcast') ?? '[]'
  const viewedPodcastList = JSON.parse(viewedPodcastLocalStorage)
  const podcastExist = viewedPodcastList.find((podcastItem: Podcast) => podcastItem.id === podcast.id)
  if (podcastExist !== undefined) return
  podcast.lastUpdate = milisecondsDate()
  viewedPodcastList.push(podcast)
  localStorage.setItem('podcaster-viewedPodcast', JSON.stringify(viewedPodcastList))
}

export const getViewedPodcast = (id: string): Podcast => {
  const viewedPodcastLocalStorage = localStorage.getItem('podcaster-viewedPodcast') ?? '[]'
  const viewedPodcastList = JSON.parse(viewedPodcastLocalStorage)
  const podcastExist = viewedPodcastList.find((podcastItem: Podcast) => podcastItem.id === id)
  return podcastExist
}

export const setEpisodesToViewedPodcast = (id: string, episodes: Episode[]) => {
  const viewedPodcastLocalStorage = localStorage.getItem('podcaster-viewedPodcast') ?? '[]'
  const viewedPodcastList = JSON.parse(viewedPodcastLocalStorage)
  const podcastExist = viewedPodcastList.find((podcastItem: Podcast) => podcastItem.id === id)
  if (podcastExist === undefined) return
  podcastExist.episodes = episodes
  localStorage.setItem('podcaster-viewedPodcast', JSON.stringify(viewedPodcastList))
}

export const getEpisodeFromViewedPodcast = (podcastId: string, episodeId: string): Episode | null => {
  const viewedPodcastLocalStorage = localStorage.getItem('podcaster-viewedPodcast') ?? '[]'
  const viewedPodcastList = JSON.parse(viewedPodcastLocalStorage)
  const podcastExist = viewedPodcastList.find((podcastItem: Podcast) => podcastItem.id === podcastId)
  if (podcastExist === undefined) return null
  const episodeExist = podcastExist.episodes.find((episodeItem: Episode) => episodeItem.id === parseInt(episodeId))
  return episodeExist
}
