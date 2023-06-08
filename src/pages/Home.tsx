import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Search from '../components/Search'
import PodcastGrid from '../components/PodcastGrid'
import { usePodcast } from '../hooks/usePodcast'

const Home = () => {
  const { podcastList, filterPodcastList } = usePodcast()

  return (
    <Container className='p-0'>
      <Row>
        <Col>
          <Search
            quantity={podcastList.length}
            handleChangeSearch={filterPodcastList}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PodcastGrid podcastList={podcastList} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
