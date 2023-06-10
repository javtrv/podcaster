import Card from 'react-bootstrap/Card'
import { type Podcast } from '../types.d'
import { useNavigate } from 'react-router-dom'
import { setViewedPodcast } from '../helpers/helpers'

interface PodcastCardProps {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: PodcastCardProps) => {
  if (podcast === null) return null

  const navigate = useNavigate()
  const handleClickCard = () => {
    navigate(`/podcast/${podcast.id}`)
    setViewedPodcast(podcast)
  }
  return (
    <Card className='podcast-card' onClick={handleClickCard}>
      <Card.Img variant="top" src={podcast.image} width={180} />
      <Card.Body>
        <Card.Title className='truncate'>{podcast.title}</Card.Title>
        <Card.Text className='truncate'>
          Author: {podcast.author}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PodcastCard
