import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PodcastDetail from './pages/PodcastDetail'

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/podcast/:id',
        element: <PodcastDetail type='podcast'/>
      },
      {
        path: '/podcast/:id/episode/:episodeId',
        element: <PodcastDetail type='episode'/>
      }
    ]
  }

])
