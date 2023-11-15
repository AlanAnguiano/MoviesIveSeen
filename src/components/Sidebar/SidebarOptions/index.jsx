import styles from './SidebarOptions.module.css';
import PropTypes from 'prop-types'

export const SidebarOptions  = ({ children }) => {
  return(
    <>
      <div className={styles.sidebarOptions__container}>
        { children }
      </div>
    </>
  )
}

SidebarOptions.propTypes = {
  children: PropTypes.array.isRequired
}