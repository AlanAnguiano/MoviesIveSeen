import Styles from './Login.module.css'

const Login = () => {
  return(
    <div className={ Styles.mainContainer }>
      <div className={ Styles.cardContainer }>
        <div className={ Styles.cardDescriptionLeft  }>
          <h1>Join us!</h1>
          <div>
            Add the movies that you have seen, or the ones that you want to see,
            rate them and track when you watch it again.
          </div>
          <button className='btn-secondary sm'>Sign Up</button>
        </div>

        <div className={ Styles.separator }></div>

        <div className={ Styles.cardLogin }>
          <h1>Login</h1>
          <label htmlFor='UserEmail'>Email: </label>
          <input id='UserEmail' type="text" placeholder='youremail@site.com'/>
          <label htmlFor='UserPass'>Password: </label>
          <input id='UserPass' type="password" placeholder='Pineapple1234'/>
          <button className='btn-primary'>Enter</button>
        </div>
      </div>
    </div>
  )
}

export default Login