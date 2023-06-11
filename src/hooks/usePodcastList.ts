import { useEffect, useState, useRef } from 'react'
import { type Podcast } from '../types'
import { getPodcastListService } from '../services/getPodcastListService'
import { scrollToTop, hasPassed24Hours, savePodcastList, getPodcastList, getLastUpdate } from '../helpers/helpers'

export const usePodcastList = () => {
  const [filteredPodcastList, setFilteredPodcastList] = useState<Podcast[] | null>(null)
  const originalPodcastList = useRef<Podcast[]>([])

  const refreshPodcastList = () => {
    getPodcastListService().then((res) => {
      if (res === null) return
      setFilteredPodcastList(res)
      originalPodcastList.current = res
      savePodcastList(res)
    }).catch((err: any) => {
      console.error(err)
    })
  }

  const filterPodcastList = (value: string) => {
    scrollToTop()
    if (value === '') {
      setFilteredPodcastList(originalPodcastList.current)
      return
    }
    const filteredPodcastListAux = originalPodcastList.current.filter((podcast: Podcast) => {
      return podcast.title.toLowerCase().includes(value.toLowerCase()) ||
        podcast.author.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredPodcastList(filteredPodcastListAux)
  }

  useEffect(() => {
    const lastUpdate = getLastUpdate()
    if (hasPassed24Hours((lastUpdate))) {
      refreshPodcastList()
    } else {
      const podcastList = getPodcastList()
      setFilteredPodcastList(podcastList)
      originalPodcastList.current = podcastList
    }
  }, [])

  return {
    podcastList: filteredPodcastList,
    filterPodcastList
  }
}
