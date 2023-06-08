import Table from 'react-bootstrap/Table'

const EpisodesTable = () => {
  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <th style={{ width: '60%' }}>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Episode 1</td>
          <td>01/01/2023</td>
          <td style={{ textAlign: 'center' }}>14:23</td>
        </tr>
        <tr>
          <td>Episode 2</td>
          <td>08/01/2023</td>
          <td style={{ textAlign: 'center' }}>15:45</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default EpisodesTable
