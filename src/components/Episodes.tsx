import Card from 'react-bootstrap/Card'
import EpisodesTable from './EpisodesTable'

const Episodes = () => {
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
          <Card.Text>
            <EpisodesTable/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Episodes
