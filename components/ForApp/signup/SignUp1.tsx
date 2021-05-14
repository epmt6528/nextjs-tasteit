import { useState } from 'react'

import Image from 'next/image'

import { DIV } from './SignUpStyled'

// materialUI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'

const SignUp1 = (props) => {
  const { values, handleChange, setPage } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <DIV className="firstPage">
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
          <TextField label="Email" variant="outlined" value={values.email} onChange={handleChange('email')} />

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </form>

        <button onClick={() => setPage(2)}>Next</button>
      </div>
    </DIV>
  )
}

export default SignUp1
