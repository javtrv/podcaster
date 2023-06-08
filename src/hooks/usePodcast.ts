import { useEffect, useState, useRef } from 'react'
import { type Podcast } from '../types.d'
import { getPodcast } from '../services/getPodcast'
import { scrollToTop } from '../helpers/helpers'

export const usePodcast = () => {
  const [filteredPodcastList, setFilteredPodcastList] = useState<Podcast[]>([])
  const originalPodcastList = useRef<Podcast[]>([])

  const refreshPodcastList = () => {
    getPodcast().then((res)=>{
      const podcastListAux:Podcast[] = res.map((podcast:any) => {
        return{
          id: podcast.id.attributes['im:id'],
          title: podcast['im:name'].label,
          author: podcast['im:artist'].label,
          image: podcast['im:image'][2].label
        }
      })
      setFilteredPodcastList(podcastListAux)
      originalPodcastList.current = podcastListAux
    })
  }

  const filterPodcastList = (value:string) => {
    scrollToTop()
    if (value === '') {
      setFilteredPodcastList(originalPodcastList.current)
      return
    }
    const filteredPodcastListAux = originalPodcastList.current.filter((podcast:Podcast) => {
      return podcast.title.toLowerCase().includes(value.toLowerCase()) ||
        podcast.author.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredPodcastList(filteredPodcastListAux)
  }

  useEffect(() => {
    refreshPodcastList()
  }, [])

  return {
    podcastList: filteredPodcastList ,
    filterPodcastList
  }
}

  
