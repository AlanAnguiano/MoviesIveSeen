import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import { ErrorPage } from "./components/ErrorPage"


const route = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
])

const Routes = () => {
  return (
    <RouterProvider router={ route }/>
  )
}

export default Routes