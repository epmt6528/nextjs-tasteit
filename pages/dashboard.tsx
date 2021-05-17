import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'
import { Auth } from 'aws-amplify'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Dashboard = () => {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user.user)

  // Sign Out
  const signOutProcess = async () => {
    await Auth.signOut()
      .then(() => {
        router.push('/signin')
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi, {user.restaurantName}</p>
      <button onClick={signOutProcess}>Sign Out</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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
