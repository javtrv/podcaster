import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import PodcastInfo from '../components/PodcastInfo'
import Episodes from '../components/Episodes'

const PodcastDetail = () => {
  const { id } = useParams()
  console.log('🚀 ~ file: PodcastDetail.tsx:5 ~ PodcastDetail ~ id:', id)

  return (
    <section className='podcast-detail'>
      <Row>
        <Col md={4}>
          <PodcastInfo />
        </Col>
        <Col md={8}>
          <Episodes />
        </Col>
      </Row>
    </section>
  )
}

export default PodcastDetail
