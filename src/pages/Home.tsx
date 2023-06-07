import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Search from '../components/Search'
import PodcastsGrid from '../components/PodcastsGrid'

const Home = () => {
  const handleChangeSearch = (value:string) => { 
    console.log('handleChangeSearch')
    console.log(value)
   }
  return (
    <Container className='p-0'>
      <Row>
        <Col>
          <Search 
            quantity={100}
            handleChangeSearch={handleChangeSearch}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PodcastsGrid />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
