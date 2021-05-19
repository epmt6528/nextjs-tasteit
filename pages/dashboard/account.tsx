import { Header, PageTitle } from '../../components/ForApp/dashboard'
import { Button } from '../../components/UIkits'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

const Account = () => {
  const router = useRouter()

  const signOut = async () => {
    await Auth.signOut()
      .then(() => router.push('/'))
      .catch(() => alert('Try again.'))
  }

  return (
    <>
      <Header />
      <PageTitle comment="Keep your restaurant info updated. 👨‍🍳" pageTitle="Your Account" />

      <Button label="Sign Out" onClick={signOut} />
    </>
  )
}

export default Account
