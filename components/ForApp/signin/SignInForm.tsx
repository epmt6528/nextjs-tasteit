import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

import { TextField, PasswordTextField, Button } from '../../UIkits'

import { useDispatch } from 'react-redux'
import { userSlice } from '../../../store/user'

const SignInForm = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { values, setValues } = props

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const signInProcess = async (event) => {
    event.preventDefault()
    await Auth.signIn(values.email, values.password)
      .then((res) => {
        dispatch(
          userSlice.actions.updateUser({
            restaurantName: res.attributes['custom:restaurantName'],
            phone: res.attributes['custom:phone'],
            email: res.attributes.email,
            province: res.attributes['custom:province'],
            city: res.attributes['custom:city'],
            address: res.attributes['custom:address'],
            postalCode: res.attributes['custom:postalCode'],
            description: res.attributes['custom:description'],
          })
        )
        router.push('/dashboard')
      })
      .catch(() => {
        alert('Wrong password or email')
      })
  }

  return (
    <form>
      <TextField label="Email" value={values.email} handleChange={handleChange('email')} />

      <PasswordTextField label="Password" value={values.password} handleChange={handleChange('password')} />

      <Button label="Sign In" onClick={signInProcess} />
    </form>
  )
}

export default SignInForm
