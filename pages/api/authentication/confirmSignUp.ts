import { Auth } from 'aws-amplify'

async function confirmSignUp(username, verificationCode) {
  const result = await Auth.confirmSignUp(username, verificationCode)
    .then(() => {
      console.log('The user is confirmed!')
      return true
    })
    .catch((error) => {
      console.log('Error confirming sign up: ', error)
      return false
    })

  return result
}

export default confirmSignUp
