import { useRouter } from 'next/router'

// materialUI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'

import { signIn } from '../../../pages/api/authentication'

const SignInForm = (props) => {
  const router = useRouter()
  const { values, setValues } = props

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const signInProcess = async (event) => {
    event.preventDefault()

    await signIn(values.email, values.password).then((res) => {
      switch (res) {
        case 'Success':
          router.push('/dashboard')
          break
        case 'Fail':
          alert('Wrong password or email')
          break
        default:
          alert('There was an error. Try again.')
      }
    })
  }

  return (
    <form>
      <TextField label="Email" variant="outlined" value={values.email} onChange={handleChange('email')} />

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

      <button onClick={signInProcess}>Sign In</button>
    </form>
  )
}

export default SignInForm
