import Table from 'react-bootstrap/Table'
import { type Episode } from '../types'
import { Link, useParams } from 'react-router-dom'
import { milisecondsToTime, formatDate } from '../helpers/helpers'

interface EpisodesTableProps {
  episodes: Episode[]
}

const EpisodesTable = ({ episodes }: EpisodesTableProps) => {
  const { id } = useParams()
  const podcastId = id as string
  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <th style={{ width: '60%' }}>Title</th>
          <th>Date</th>
          <th style={{ textAlign: 'center' }}>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <tr key={episode.id}>
            <td><Link to={`/podcast/${podcastId}/episode/${episode.id}`}>{episode.name}</Link></td>
            <td>{formatDate(episode.date)}</td>
            <td style={{ textAlign: 'center' }}>{milisecondsToTime(episode.duration)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default EpisodesTable
