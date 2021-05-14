import { Auth } from 'aws-amplify'

const signOut = async () => {
  const result = await Auth.signOut()
    .then(() => {
      return 'Success'
    })
    .catch(() => {
      return 'Fail'
    })

  return result
}

export default signOut
