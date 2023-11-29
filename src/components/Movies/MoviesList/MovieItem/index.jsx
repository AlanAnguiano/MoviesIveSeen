import Styles from './MovieItem.module.css'
import image from '../../../../../public/hp.webp' // TODO: remove this when implements backend
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const MovieItem = () => {
  return(
    <div className={ Styles.cardMovie__container } >
      <img src={ image } alt="" />

      <div className={ Styles.cardMovie__description }>
        <div className= { Styles.cardMovie__title_rate}>
          <h2>Harry Potter and sorcerers stone</h2>
          <div className={ Styles.cardMovie__rate_stars }>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
            <FaRegStar/>
          </div>
        </div>

        <div className={ Styles.cardMovie__info }>
          <span></span>
          <span>Last Seen: Yesterday</span>
          <span>Seen 5 times</span>
        </div>
        
        <div className={ Styles.cardMovie__seeMore }>
          <span>More Details</span>
        </div>
      </div>
    </div>
  )
}