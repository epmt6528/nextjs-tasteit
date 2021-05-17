import Image from 'next/image'
import { TextField, PasswordTextField, Button } from '../../UIkits'

const SignUp1 = (props) => {
  const { values, handleChange, setPage } = props

  return (
    <div className="firstPage">
      <div className="logoDiv">
        <a href="/">
          <img src="/img/ForHome/logoMobile.svg" alt="Taste it" width="37" height="41" />
        </a>
      </div>

      <Image
        src="/v1620757970/AppGraphics/signup_leosd9.jpg"
        alt="Tasty hamburger with fries and drink"
        width={375}
        height={431}
      />

      <div className="bodyDiv">
        <div className="textDiv">
          <h1>Become a partner</h1>
          <p>Expand your reach, grow your network and give a delightful experience to your customers 👏</p>
        </div>

        <form>
          <TextField label="Email" value={values.email} handleChange={handleChange('email')} />

          <PasswordTextField inputLabel="Password" value={values.password} handleChange={handleChange('password')} />

          <PasswordTextField
            inputLabel="Confirm Password"
            value={values.confirmPassword}
            handleChange={handleChange('confirmPassword')}
          />
        </form>

        <Button label="Next" onClick={() => setPage(2)} />
      </div>
    </div>
  )
}

export default SignUp1
