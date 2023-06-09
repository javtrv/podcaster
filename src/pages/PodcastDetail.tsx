import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import PodcastInfo from '../components/PodcastInfo'
import Episodes from '../components/Episodes'
import { usePodcast } from '../hooks/usePodcast'

const PodcastDetail = () => {
  const { id } = useParams()
  const { podcastEpisodes } = usePodcast(id)

  return (
    <section className='podcast-detail'>
      <Row>
        <Col md={4}>
          <PodcastInfo />
        </Col>
        <Col md={8}>
          <Episodes episodes={podcastEpisodes} />
        </Col>
      </Row>
    </section>
  )
}

export default PodcastDetail
