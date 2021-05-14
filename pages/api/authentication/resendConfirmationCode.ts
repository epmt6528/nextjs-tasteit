import { Auth } from 'aws-amplify'

const resendConfirmationCode = async (username) => {
  await Auth.resendSignUp(username).catch((error) => console.log('Error resending code: ', error))
}

export default resendConfirmationCode
