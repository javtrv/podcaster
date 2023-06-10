import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { useParams, useNavigate } from 'react-router-dom'
import PodcastInfo from '../components/PodcastInfo'
import Episodes from '../components/Episodes'
import Episode from '../components/Episode'
import { usePodcast } from '../hooks/usePodcast'

interface PodcastDetailProps {
  type: string
}

const PodcastDetail = ({ type }: PodcastDetailProps) => {
  const navigate = useNavigate()
  const { id, episodeId } = useParams()
  const podcastId = id as string
  const { podcast, podcastEpisodesList } = usePodcast(podcastId)
  let episode = null
  if (type === 'episode') {
    episode = podcastEpisodesList?.filter(episode => episode.id === parseInt(episodeId as string))
    if (episode === undefined || episode.length === 0) {
      console.error('Episode not found')
      navigate('/')
      return null
    }
    if (episode !== null) episode = episode[0]
  }

  return (
    <section className={`detail-view ${type}-view`}>
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
              {type === 'podcast'
                ? (
                    <Episodes episodes={podcastEpisodesList} />
                  )
                : (
                    <Episode episode={episode} />
                  )}
            </Col>
          </>
            )}

      </Row>
    </section>
  )
}

export default PodcastDetail
