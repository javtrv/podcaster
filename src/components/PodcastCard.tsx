import Card from 'react-bootstrap/Card'
import {type Podcast} from '../types.d'

interface PodcastCardProps {
  podcast: Podcast
}

const PodcastCard = ({podcast}: PodcastCardProps) => {
  if (!podcast) return null
  
  return (
    <Card className='podcasts-card'>
      <Card.Img variant="top" src={podcast.image} />
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