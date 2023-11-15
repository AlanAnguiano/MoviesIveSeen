import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"


const route = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Errorrrr!!</h1>
  }
])

const Routes = () => {
  return (
    <RouterProvider router={ route }/>
  )
}

export default Routes