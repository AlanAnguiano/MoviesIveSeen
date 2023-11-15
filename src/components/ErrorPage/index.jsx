import { Link } from 'react-router-dom'
import quotes from '../../../quotes'
import Styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  const {quote, movie} = quotes[Math.floor(Math.random() * quotes.length)]
  return(
    <div className={ Styles.container }>
      <div className={ Styles.cardInfo }>
        <div className={ Styles.cardLeft }>
          <h1>404</h1>
          <span><b>Page not found</b></span>
          <p>Well, not much to see here, you can breathe or stretch while you&apos;re here :)</p>
          <Link to='/'>
            <button className='btn-primary'>Back Home</button>
          </Link>
        </div>
        <div className={ Styles.cardRight }>
          <div>&quot;{ quote }&quot;</div>
          <div className={ Styles.cardAuthor }>- <b>{ movie }</b></div>
        </div>
      </div>
    </div>
  )
}
