import { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'
import DashboardWrap from '../../components/ForApp/dashboard/DashboardWrap'

const Dashboard = (): JSX.Element => {
  return <DashboardWrap comment="Welcome back! 👋🏻" pageTitle="Active Orders"></DashboardWrap>
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
