import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'

interface SearchProps {
  quantity: number
  handleChangeSearch: (value: string) => void
}

const Search = ({quantity, handleChangeSearch}: SearchProps) => {

  return (
    <section className='search'>
        <Badge pill>
          {quantity}
        </Badge>{' '}
        <Form.Control
          type="text"
          id="podcast-search-text"
          aria-describedby="podcast-search"
          onChange={(e) => handleChangeSearch(e.target.value)}
          placeholder='Filter podcasts...'
        />
    </section>
  )
}

export default Search