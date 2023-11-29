import { MoviesList } from '../MoviesList'
import { MovieItem } from '../MoviesList/MovieItem'
import Styles from './MoviesSeen.module.css'

export const MoviesSeen = () => {
  return(
    <div className={ Styles.mainContainer } >
      <div className={ Styles.titleContainer }>
        <h1>Movies Seen</h1>
      </div>

      <div className={ Styles.moviesSeen__Container }>
        <MoviesList>
          <MovieItem photoUrl='' name='' />
        </MoviesList>
      </div>
      
    </div>
  )  
}