import PropTypes from 'prop-types'

export const MoviesList = ({ children }) => {
  return(
    <div className=''>
      { children }
    </div>
  )
}

MoviesList.propTypes = {
  children: PropTypes.object
}

