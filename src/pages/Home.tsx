import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Search from '../components/Search'
import PodcastGrid from '../components/PodcastGrid'
import { type Podcast } from '../types.d'
import { API } from '../API'


const Home = () => {

  const [podcastList, setPodcastList] = useState<Podcast[]>([])

  useEffect(() => {
    axios.get(API.urlGetPodcasts).then((res)=>{
      const podcastListAux:Podcast[] = res.data.feed.entry.map((podcast:any) => {
        return{
          id: podcast.id.attributes['im:id'],
          title: podcast['im:name'].label,
          author: podcast['im:artist'].label,
          image: podcast['im:image'][2].label
        }
      })
      console.log(podcastListAux)
      setPodcastList(podcastListAux)
    })
  }, [])


  const handleChangeSearch = (value:string) => { 
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
          <PodcastGrid podcastList={podcastList} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
