import { useState } from 'react'

import Image from 'next/image'

import { DIV } from '../styles/signupStyled'

// materialUI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

export default function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    province: '',
    city: '',
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
      <div className="firstPage">
        <div className="logoDiv">
          <a href="/">
            <Image src="/img/ForHome/logoMobile.svg" alt="Taste it" width={37} height={41} />
          </a>
        </div>

        <Image src="/img/ForApp/signup.jpg" alt="Tasty hamburger with fries and drink" width={375} height={431} />

        <div className="bodyDiv">
          <div className="textDiv">
            <h1>Become a partner</h1>
            <p>Expand your reach, grow your network and give a delightful experience to your customers 👏</p>
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

            <FormControl variant="outlined">
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type={values.showPassword ? 'text' : 'password'}
                value={values.confirmPassword}
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

          <button>Sign Up</button>
        </div>
      </div>

      <div className="secondPage">
        <div className="bodyDiv">
          <div className="textDiv">
            <h1>Tell us about your restaurant.</h1>
            <p>Team up with us and start growing your business 🤝</p>
          </div>

          <form>
            <TextField label="Restaurant Name" variant="outlined" />

            <TextField label="Phone Number" variant="outlined" />

            <TextField label="Restaurant Description" variant="outlined" multiline rows={5} />
          </form>

          <button>Next</button>
        </div>

        <div className="imgDiv">
          <Image src="/img/ForApp/crepe.png" alt="Crepe with strawberries" width={207.5} height={218} />
        </div>
      </div>

      <div className="thirdPage">
        <div className="bodyDiv">
          <div className="textDiv">
            <h1>You are just a few steps away.</h1>
            <p>Your restaurant location will help us reach out to your target customers better 📍</p>
          </div>

          <form>
            <FormControl variant="outlined">
              <InputLabel id="province">Province</InputLabel>
              <Select labelId="province" id="province" value={values.province} onChange={handleChange} label="Province">
                <MenuItem value="British Columbia">British Columbia</MenuItem>
                <MenuItem value="Ontario">Ontario</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel id="city">City</InputLabel>
              <Select labelId="city" id="city" value={values.city} onChange={handleChange} label="City">
                <MenuItem value="Vancouver">Vancouver</MenuItem>
                <MenuItem value="Burnaby">Burnaby</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Address" variant="outlined" />

            <TextField label="Postal Code" variant="outlined" />
          </form>

          <button>Done</button>
        </div>

        <div className="imgDiv">
          <Image src="/img/ForApp/croissant.png" alt="Yummy croissant" width={207.5} height={268} />
        </div>
      </div>

      <div className="thirdPage">
        <div className="bodyDiv">
          <Image src="/img/ForApp/welcomeMobileView.png" alt="Toast" width={347} height={359} />

          <div className="textDiv">
            <h3>Hi Anh and Chi !</h3>
            <h1>Welcome Aboard!</h1>
            <p>
              Ready to do e-commerce your way?
              <br /> <br /> Tackle the complexity of growing your business and selling online—with a platform designed
              to make it simple at any stage.
            </p>
          </div>

          <button>Get Started</button>
        </div>
      </div>
    </DIV>
  )
}
