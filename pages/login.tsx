import { useState } from 'react'

import Image from 'next/image'

import { DIV } from '../styles/loginStyles'

// materialUI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <DIV>
      <div className="logoDiv">
        <a href="/">
          <Image src="/img/ForHome/logoMobile.svg" alt="Taste it" width={37} height={41} />
        </a>
      </div>

      <Image src="/img/ForApp/login.jpg" alt="Tasty hamburger with fries and drink" width={375} height={431} />

      <div className="bodyDiv">
        <div className="textDiv">
          <h1>Take your restaurant to the next level.</h1>
          <p>Discover a new way for your restaurant to manage your online orders 🔥</p>
        </div>

        <form>
          <TextField label="Email" variant="outlined" />

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </form>

        <button>Sign In</button>

        <h3 className="signUpCTA">
          Not in partner with Taste It? <a href="/signup">Sign up now</a>
        </h3>
      </div>
    </DIV>
  )
}

export default Login
