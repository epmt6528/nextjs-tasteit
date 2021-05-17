import { useState } from 'react'
import Modal from 'react-modal'
import { Auth } from 'aws-amplify'
import { TextField } from '../../UIkits'
import styled from 'styled-components'
import { colorPallete } from '../../../styles/ThemeConfig'

const ConfirmSignUpModal = (props) => {
  const { modalIsOpen, restaurantName, email, setPage } = props

  const [verificationCode, setVerificationCode] = useState('')

  const verification = async () => {
    await Auth.confirmSignUp(email, verificationCode)
      .then(() => {
        setPage(4)
      })
      .catch((error) => {
        console.log('Error confirming sign up: ', error)
      })
  }

  const resednConfirmationCode = async () => {
    await Auth.resendSignUp(email).catch((error) => console.log('Error resending code: ', error))
  }

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <DIV>
        <img src="/img/ForHome/logoMobile.svg" alt="Taste It" width="50" height="50" />

        <div className="textDiv">
          <h2>Hi, {restaurantName} !</h2>
          <p>
            We've sent verification code to your email. <br />
            Please enter the code here and verify your email address.
          </p>
        </div>

        <TextField label="Verification Code" value={verificationCode} handleChange={setVerificationCode} />
        <button onClick={verification}>Verify</button>
        <p>
          Lost your code? <span onClick={resednConfirmationCode}>Resend Code</span>
        </p>
      </DIV>
    </Modal>
  )
}

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    padding: '60px 15px',
    textAlign: 'center',
  },
}

const DIV = styled.div`
  .textDiv {
    margin: 20px 0;
  }

  button {
    margin: 20px 0;
  }

  span {
    color: ${colorPallete.burple};
    text-decoration: underline;
  }
`

export default ConfirmSignUpModal
