import Card from 'react-bootstrap/Card'
import EpisodesTable from './EpisodesTable'
import { type Episode } from '../types'

interface EpisodesProps {
  episodes: Episode[] | undefined
}

const Episodes = ({ episodes }: EpisodesProps) => {
  console.log('🚀 ~ file: Episodes.tsx:10 ~ Episodes ~ episodes:', episodes)
  return (
    <div className='episodes'>
      <Card className='episodes-quantity'>
        <Card.Body>
          <Card.Text>
            <b>Episodes: 123</b><br/>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='episodes-table'>
        <Card.Body>
            <EpisodesTable/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Episodes
