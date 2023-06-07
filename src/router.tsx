import { createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"

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
        element: <h1>Podcast</h1>
      },
      {
        path: '/podcast/:id/episode/:episodeId',
        element: <h1>Episode</h1>
      },
    ]
  }

])