import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { hasPassed24Hours } from '../helpers/helpers'
import { type Podcast, type Episode } from '../types'
// import podcastData from '../data/podcast.json'
import { getPodcastDetailService } from '../services/getPodcastDetailService'
import { getViewedPodcast, setEpisodesToViewedPodcast } from '../helpers/helpers'

export const usePodcast = (podcastId: string) => {
  const navigate = useNavigate()
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([])
  const [podcast, setPodcast] = useState<Podcast>()

  useEffect(() => {
    const podcast = getViewedPodcast(podcastId)
    if (podcast === undefined) navigate('/')
    setPodcast(podcast)
    if (podcast.episodes === undefined) {
      const episodes = getPodcastDetailService()
      setPodcastEpisodes(episodes)
      setEpisodesToViewedPodcast(podcastId, episodes)
    } else {
      setPodcastEpisodes(podcast.episodes)
    }
  }, [podcastId])

  return { podcast, podcastEpisodes }
}
