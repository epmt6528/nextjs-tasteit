import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { DashboardWrap } from '../../../components/ForApp/dashboard'
import { Button, TextFieldReadOnly, Wrapper } from '../../../components/UIkits'
import { Auth } from 'aws-amplify'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const Account = () => {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user.user)

  const signOut = async () => {
    await Auth.signOut()
      .then(() => router.push('/'))
      .catch(() => alert('Try again.'))
  }

  console.log(user)

  const location = `${user.address}, ${user.city}, ${user.province}`

  return (
    <DashboardWrap comment="Keep your restaurant info updated. 👨‍🍳" pageTitle="Your Account">
      <Wrapper>
        <DIV>
          <div className="textFieldDiv">
            <TextFieldReadOnly label="Restaurant Name" value={user.restaurantName} />
            <TextFieldReadOnly label="Phone Number" value={user.phone} />
            <TextFieldReadOnly label="Email" value={user.email} />
            <TextFieldReadOnly label="Password" value="●●●●●●●●●●●●" />
            <TextFieldReadOnly label="Location" value={location} rows={2} />
            <TextFieldReadOnly label="Description" value={user.description} rows={5} />
          </div>

          <div className="buttonDiv">
            <Link href="/dashboard/account/edit">
              <a>
                <Button label="Edit Account" />
              </a>
            </Link>

            <Button label="Sign Out" onClick={signOut} secondary />
          </div>
        </DIV>
      </Wrapper>
    </DashboardWrap>
  )
}

const DIV = styled.div`
  .buttonDiv {
    margin: 50px 0 70px;

    button {
      margin-bottom: 30px;
    }
  }
`

export default Account
