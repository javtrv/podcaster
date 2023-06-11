import Card from 'react-bootstrap/Card'
import EpisodesTable from './EpisodesTable'
import { type Episode } from '../types'
import { scrollToTop } from '../helpers/helpers'

interface EpisodesProps {
  episodes: Episode[]
}

const Episodes = ({ episodes }: EpisodesProps) => {
  scrollToTop()
  return (
    <div className='episodes'>
      <Card className='episodes-quantity'>
        <Card.Body>
          <Card.Text>
            <b>Episodes: {episodes?.length}</b><br/>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='episodes-table'>
        <Card.Body>
            <EpisodesTable episodes={episodes}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Episodes
