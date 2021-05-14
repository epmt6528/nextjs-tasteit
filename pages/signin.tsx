import { useState } from 'react'
// import { Auth } from 'aws-amplify'
import Image from 'next/image'
import Link from 'next/link'

import { DIV } from '../styles/loginStyles'

import { SignInForm } from '../components/ForApp/signin'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  // const googleOauth = async () => {
  //   await Auth.federatedSignIn({ provider: 'Google' })
  //     .then((res) => console.log(res))
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // const facebookOauth = () => {
  //   Auth.federatedSignIn({ provider: 'Facebook' })
  // }

  return (
    <DIV>
      <div className="logoDiv">
        <a href="/">
          <img src="/img/ForHome/logoMobile.svg" alt="Taste it" width="37" height="41" />
        </a>
      </div>

      <Image
        src="/v1620757971/AppGraphics/login_wndmoo.jpg"
        alt="Tasty sushi with miso soup and drink"
        width={375}
        height={431}
      />

      <div className="bodyDiv">
        <div className="textDiv">
          <h1>Take your restaurant to the next level.</h1>
          <p>Discover a new way for your restaurant to manage your online orders 🔥</p>
        </div>

        <SignInForm values={values} setValues={setValues} />

        {/* Social Sign In */}
        {/* <button onClick={googleOauth}>Sign in with Google</button>
        <button onClick={facebookOauth}>Sign in with Facebook</button> */}

        <h3 className="signUpCTA">
          Not in partner with Taste It?{' '}
          <Link href="/signup">
            <a>Sign up now</a>
          </Link>
        </h3>
      </div>
    </DIV>
  )
}

export default Login
