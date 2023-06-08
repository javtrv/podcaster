import { type Podcast } from '../types.d'

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
