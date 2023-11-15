import { useOutlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Styles from './Home.module.css'

const Home = () => {
  const outlet = useOutlet()

  return(
    <div className={ Styles.HomeContainer }>
      <Sidebar/>
      { outlet || <div className={ Styles.empty }>Select an option from Sidebar to start.</div> }
    </div>
  )
}

export default Home