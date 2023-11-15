import { SidebarOptions } from './SidebarOptions'
import { OptionItem } from './SidebarOptions/OptionItem'
import Styles from './Sidebar.module.css'
import { ImBookmark } from 'react-icons/im';
import { MdMovieCreation } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { Profile } from './Profile';


const Sidebar = () => {
  return (
    <nav className={ Styles.container }>
      <div className={ Styles.title }>
        <h1>MoviesIveSeen</h1>
      </div>
      <SidebarOptions>
        <OptionItem optionText='Movies Seen' path='/movies/seen'>
          <MdMovieCreation />
        </OptionItem>

        <OptionItem optionText='Movies Saved' path='/movies/saved'>
          <ImBookmark/>
        </OptionItem>

        <OptionItem optionText='Friends' path='/friends'>
          <FaUserGroup/>
        </OptionItem>        
      </SidebarOptions>
      <Profile/>
    </nav>
  )
}

export default Sidebar