import Amplify, { API, withSSRContext } from 'aws-amplify'
import awsconfig from '../../aws-exports'

Amplify.configure({ ...awsconfig, ssr: true })

export default async (req, res) => {
  const { Auth } = withSSRContext({ req })

  const values = JSON.parse(req.body)

  const params = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
    },
    body: { name: values.name, phoneNumber: values.phoneNumber, email: values.email, message: values.message },
  }

  return await API.post('tasteIt', '/contact', params)
    .then((data) => {
      res.json(data.message)
    })
    .catch((error) => {
      res.json(error.message)
    })
}
