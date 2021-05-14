import { useRouter } from 'next/router'

import { withSSRContext } from 'aws-amplify'

import { signOut } from '../pages/api/authentication'

const Dashboard = ({ restaurantName }) => {
  const router = useRouter()
  const signOutProcess = () => {
    signOut().then((res) => {
      switch (res) {
        case 'Success':
          router.push('/signin')
          break
        default:
          alert('There was an error. Try again.')
      }
    })
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi, {restaurantName}</p>
      <button onClick={signOutProcess}>Sign Out</button>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })

  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        authenticated: true,
        restaurantName: user.attributes['custom:restaurantName'],
      },
    }
  } catch (error) {
    res.writeHead(302, { Location: '/signin' })
    res.end()
  }

  return { props: {} }
}

export default Dashboard
