import Card from 'react-bootstrap/Card'
import DOMPurify from 'dompurify'
import { type Episode as EpisodeType } from '../types'
import { scrollToTop } from '../helpers/helpers'

interface EpisodeProps {
  episode: EpisodeType | null
}
const Episode = ({ episode }: EpisodeProps) => {
  scrollToTop()
  return (
    <div className='episode'>
      <Card className='episode-information'>
        <Card.Body>
          <Card.Text>
            <p className='episode-name'><b>{episode?.name}</b></p>
            <div className='episode-description' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(episode?.description as string) }} />
          </Card.Text>
          <figure>
            <audio
                controls
                src={episode?.audio}>
            </audio>
          </figure>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Episode
