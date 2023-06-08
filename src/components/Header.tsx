import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Podcaster</Link>
      </header>
      <Outlet />
    </>
  )
}

export default Header
