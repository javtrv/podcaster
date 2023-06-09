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
