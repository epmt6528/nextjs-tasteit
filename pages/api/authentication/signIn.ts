import { Auth } from 'aws-amplify'

const signIn = async (email, password) => {
  const result = await Auth.signIn(email, password)
    .then(() => {
      return 'Success'
    })
    .catch((error) => {
      return 'Fail'
    })

  return result
}

export default signIn
