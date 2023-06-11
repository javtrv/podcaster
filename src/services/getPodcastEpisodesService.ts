import { type Episode } from '../types'
import axios from 'axios'
import { API } from '../API'

export const getPodcastEpisodesService = async (podcastId: string) => {
  const url = API.urlGetPodcastEpisodes(podcastId)
  // const URL = `https://proxy.cors.sh/${url}`
  const corsURL = `https://cors-anywhere.herokuapp.com/${url}`

  return await axios.get(corsURL).then((resp) => {
    resp.data.results.shift()
    const episodesList: Episode[] = resp.data.results.map((episode: any): Episode => ({
      id: episode.trackId,
      name: episode.trackName,
      date: episode.releaseDate,
      duration: episode.trackTimeMillis,
      description: episode.description ?? '',
      audio: episode.previewUrl ?? ''
    }))
    return episodesList
  }).catch((error) => {
    console.error(error)
    return []
  })
}
