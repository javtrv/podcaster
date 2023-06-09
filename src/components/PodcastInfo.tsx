import Card from 'react-bootstrap/Card'
import { type Podcast } from '../types'
interface PodcastInfoProps {
  podcast: Podcast | undefined
}
const PodcastInfo = ({ podcast }: PodcastInfoProps) => {
  if (podcast === undefined) return
  return (
    <Card className='podcast-info'>
    <Card.Img variant="top" src={podcast.image} />
    <Card.Body>
      <Card.Title>
        {podcast.title}<br/>
        by {podcast.author}
      </Card.Title>
      <Card.Text>
        <b>Description:</b><br/>
        <i>{podcast.summary}</i>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default PodcastInfo
