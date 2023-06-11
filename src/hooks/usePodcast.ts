import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { hasPassed24Hours, getViewedPodcast, setEpisodesToViewedPodcast } from '../helpers/helpers'
import { type Podcast, type Episode } from '../types'
import { getPodcastEpisodesService } from '../services/getPodcastEpisodesService'

export const usePodcast = (podcastId: string) => {
  const navigate = useNavigate()
  const [podcastEpisodesList, setPodcastEpisodesList] = useState<Episode[] | null>(null)
  const [podcast, setPodcast] = useState<Podcast>()

  const refreshPodcastEpisodes = () => {
    getPodcastEpisodesService(podcastId).then((episodes) => {
      setPodcastEpisodesList(episodes)
      setEpisodesToViewedPodcast(podcastId, episodes)
    }).catch((err) => {
      console.error(err)
      navigate('/')
    })
  }

  useEffect(() => {
    const podcast = getViewedPodcast(podcastId)
    if (podcast === null || podcast === undefined) {
      console.error('Podcast not found')
      navigate('/')
      return
    }
    setPodcast(podcast)
    if (podcast.episodes === undefined) {
      refreshPodcastEpisodes()
    } else {
      const hasPassed24HoursSinceLastUpdate = hasPassed24Hours(podcast.lastUpdate ?? 0)
      if (hasPassed24HoursSinceLastUpdate) {
        refreshPodcastEpisodes()
      } else {
        setPodcastEpisodesList(podcast.episodes)
      }
    }
  }, [podcastId])

  return { podcast, podcastEpisodesList }
}
