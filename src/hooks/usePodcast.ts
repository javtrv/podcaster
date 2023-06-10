import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { hasPassed24Hours } from '../helpers/helpers'
import { type Podcast, type Episode } from '../types'
// import podcastData from '../data/podcast.json'
import { getPodcastEpisodesService } from '../services/getPodcastEpisodesService'
import { getViewedPodcast, setEpisodesToViewedPodcast } from '../helpers/helpers'

export const usePodcast = (podcastId: string) => {
  const navigate = useNavigate()
  const [podcastEpisodesList, setPodcastEpisodesList] = useState<Episode[] | null>(null)
  const [podcast, setPodcast] = useState<Podcast>()

  useEffect(() => {
    const podcast = getViewedPodcast(podcastId)
    console.log('🚀 ~ file: usePodcast.ts:16 ~ useEffect ~ podcast:', podcast)
    if (podcast === null || podcast === undefined) {
      console.error('Podcast not found')
      navigate('/')
      return
    }
    setPodcast(podcast)
    if (podcast.episodes === undefined) {
      getPodcastEpisodesService(podcastId).then((episodes) => {
        setPodcastEpisodesList(episodes)
        setEpisodesToViewedPodcast(podcastId, episodes)
      }).catch((err) => {
        console.error(err)
        navigate('/')
      })
    } else {
      setPodcastEpisodesList(podcast.episodes)
    }
  }, [podcastId])

  return { podcast, podcastEpisodesList }
}
