import { type Podcast } from "../types"
import PodcastCard from "./PodcastCard"

interface PodcastGridProps {
  podcastList: Podcast[]
}

const PodcastGrid = ({podcastList}: PodcastGridProps) => {
  if(!podcastList) return null
  return (
    <section className='podcasts-grid'>
      {podcastList.map((podcast:Podcast) => {
        return (
          <PodcastCard
            key={podcast.id}
            podcast={podcast}
          />
        )
      })}
    </section>
  )
}

export default PodcastGrid