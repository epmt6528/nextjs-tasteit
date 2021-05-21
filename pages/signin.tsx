import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { globalValues, colorPallete } from '../styles/ThemeConfig'
import { SignInForm, ResetPasswordModal } from '../components/ForApp/signin'
import Loading from '../components/UIkits/Loading'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

const Login = (): JSX.Element => {
  const router = useRouter()
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const [isLoading, setIsLoading] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Auth returning user
  Auth.currentAuthenticatedUser()
    .then(() => {
      router.push('/dashboard')
    })
    .catch(() => {
      setIsLoading(false)
    })

  return isLoading ? (
    <Loading />
  ) : (
    <DIV>
      {' '}
      <div className="logoDiv">
        <Link href="/">
          <a>
            <img src="/img/ForHome/logoMobile.svg" alt="Taste it" width="37" height="41" />
          </a>
        </Link>
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

        <h3 className="signUpCTA">
          <a onClick={() => setModalIsOpen(true)}>Forgot password</a>
        </h3>

        <h3 className="signUpCTA">
          Not in partner with Taste It?{' '}
          <Link href="/signup">
            <a>Sign up now</a>
          </Link>
        </h3>
      </div>
      <ResetPasswordModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </DIV>
  )
}

const DIV = styled.div`
  .logoDiv {
    position: absolute;
    top: 20px;
    left: ${globalValues.edgePaddingMobile};
    z-index: 1;
  }

  .bodyDiv {
    padding: 80px ${globalValues.edgePaddingMobile};
  }

  form {
    margin: 24px 0;
  }

  .signUpCTA {
    margin: 23px 0;

    a {
      font-family: 'Nexa Bold';
      text-decoration: underline;
      color: ${colorPallete.burple};
    }
  }
`

export default Login
