import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"


const route = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  }
])

const Routes = () => {
  return (
    <RouterProvider router={ route }/>
  )
}

export default Routes