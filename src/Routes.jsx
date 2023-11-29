import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import { ErrorPage } from "./components/ErrorPage"
import { MoviesSeen } from "./components/Movies/Seen"


const route = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/movies/seen',
        element: <MoviesSeen/>
      }
    ]
  }
])

const Routes = () => {
  return (
    <RouterProvider router={ route }/>
  )
}

export default Routes