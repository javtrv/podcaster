import Card from 'react-bootstrap/Card'

const PodcastInfo = () => {
  return (
    <Card className='podcast-info'>
    <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} />
    <Card.Body>
      <Card.Title>
        Title<br/>
        by Author
      </Card.Title>
      <Card.Text>
        <b>Description:</b><br/>
        <i>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vitae laudantium suscipit rerume</i>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default PodcastInfo
