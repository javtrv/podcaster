import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { type Podcast } from '../types'
interface PodcastInfoProps {
  podcast: Podcast | undefined
}
const PodcastInfo = ({ podcast }: PodcastInfoProps) => {
  if (podcast === undefined) return

  return (
    <Card className='podcast-info'>
      <Link to={`/podcast/${podcast.id}`}><Card.Img variant="top" src={podcast.image} /></Link>
      <Card.Body>
        <Link to={`/podcast/${podcast.id}`}><Card.Title >
          {podcast.title}<br/>
          by {podcast.author}
        </Card.Title></Link>
        <Link to={`/podcast/${podcast.id}`}><Card.Text >
          <b>Description:</b><br/>
          <i>{podcast.summary}</i>
        </Card.Text></Link>
      </Card.Body>
  </Card>
  )
}

export default PodcastInfo
