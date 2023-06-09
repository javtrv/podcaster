// const url = 'https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20'
// const URL = `https://proxy.cors.sh/${url}`
// const URL = `https://cors-anywhere.herokuapp.com/${url}`
import podcastData from '../data/podcast.json'
import { type Episode } from '../types.d'

// export const getPodcastDetailService = async () => {
//   try {
//     const resp = await fetch(URL, {
//       headers: {
//         'x-cors-api-key': 'temp_fa890a2d2174703e2f38944a2f6a63b7'
//       }
//     })
//     const data = await resp.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getPodcastDetailService = (): Episode[] => {
  const episodesList: Episode[] = podcastData[0].results.map((episode): Episode => ({
    id: episode.trackId,
    name: episode.trackName,
    date: episode.releaseDate,
    duration: episode.trackTimeMillis,
    description: episode.shortDescription ?? '',
    audio: episode.previewUrl ?? ''
  }))

  return episodesList
}
