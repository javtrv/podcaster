import axios from 'axios'
import { API } from '../API'
import { type Podcast } from '../types'

export const getPodcastListService = async () => {
  return await axios.get(API.urlGetPodcasts).then((res) => {
    const podcastList: Podcast[] = res.data.feed.entry.map((podcast: any) => {
      return {
        id: podcast.id.attributes['im:id'],
        title: podcast['im:name'].label,
        author: podcast['im:artist'].label,
        image: podcast['im:image'][2].label,
        summary: podcast.summary.label
      }
    })
    return podcastList
  }).catch((err) => {
    console.error(err)
    return null
  })
}
