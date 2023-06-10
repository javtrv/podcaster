import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import PodcastInfo from '../components/PodcastInfo'
import Episodes from '../components/Episodes'
import { usePodcast } from '../hooks/usePodcast'

const PodcastDetail = () => {
  const { id } = useParams()
  const podcastId = id as string
  const { podcast, podcastEpisodesList } = usePodcast(podcastId)

  return (
    <section className='podcast-detail'>
      <Row>
        {(podcastEpisodesList == null)
          ? (
            <Col md={12} className='text-center'>
              <Spinner animation="grow" />
            </Col>
            )
          : (
          <>
            <Col md={4}>
              <PodcastInfo podcast={podcast} />
            </Col>
            <Col md={8}>
              <Episodes episodes={podcastEpisodesList} />
            </Col>
          </>
            )}

      </Row>
    </section>
  )
}

export default PodcastDetail
