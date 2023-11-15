import { useOutlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Styles from './Home.module.css'

const Home = () => {
  const outlet = useOutlet()

  return(
    <div className={ Styles.HomeContainer }>
      <Sidebar/>
      {outlet || <h1>No outlet</h1>}
    </div>
  )
}

export default Home