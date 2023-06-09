import { useEffect, useState } from 'react'
// import { hasPassed24Hours } from '../helpers/helpers'
import { type Episode } from '../types'
// import podcastData from '../data/podcast.json'
import { getPodcastDetailService } from '../services/getPodcastDetailService'

export const usePodcast = (podcastId: string | undefined) => {
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>()

  useEffect(() => {
    // console.log(getPodcastDetailService())
    setPodcastEpisodes(getPodcastDetailService())
  }, [podcastId])

  return { podcastEpisodes }
}
