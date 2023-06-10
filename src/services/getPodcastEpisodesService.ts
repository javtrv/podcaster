// const URL = `https://cors-anywhere.herokuapp.com/${url}`
// import podcastData from '../data/podcast.json'
import { type Episode } from '../types'
import axios from 'axios'

export const getPodcastEpisodesService = async (podcastId: string) => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`
  // const URL = `https://proxy.cors.sh/${url}`
  const corsURL = `https://cors-anywhere.herokuapp.com/${url}`
  return await axios.get(corsURL).then((resp) => {
    const [first, ...rest] = resp.data.results
    const episodesList: Episode[] = rest.map((episode: any): Episode => ({
      id: episode.trackId,
      name: episode.trackName,
      date: episode.releaseDate,
      duration: episode.trackTimeMillis,
      description: episode.shortDescription ?? '',
      audio: episode.previewUrl ?? ''
    }))
    return episodesList
  }).catch((error) => {
    console.log(error)
    return []
  })
}
