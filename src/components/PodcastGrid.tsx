import Spinner from 'react-bootstrap/Spinner'
import { type Podcast } from '../types'
import PodcastCard from './PodcastCard'

interface PodcastGridProps {
  podcastList: Podcast[] | null
}

const PodcastGrid = ({ podcastList }: PodcastGridProps) => {
  return (
    <section className='podcast-grid'>
      {podcastList === null && <Spinner animation="grow" />}
      {podcastList?.length === 0 && <h2>No podcasts found</h2>}
      {podcastList?.map((podcast: Podcast) => {
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
