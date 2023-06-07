import Card from 'react-bootstrap/Card'

const PodcastCard = () => {
  return (
    <Card className='podcasts-card'>
      <Card.Img variant="top" src="https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000" />
      <Card.Body>
        <Card.Title className='truncate'>Podcast Name</Card.Title>
        <Card.Text className='truncate'>
          Author: Author Name
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PodcastCard