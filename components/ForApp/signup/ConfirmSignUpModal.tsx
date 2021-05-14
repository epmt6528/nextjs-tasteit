import { useState } from 'react'
import Modal from 'react-modal'
import TextField from '@material-ui/core/TextField'
import { confirmSignUp, resednConfirmationCode } from '../../../pages/api/authentication'

import { DIV } from './ConfirmSignUpModalStyled'

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

const ConfirmSignUpModal = (props) => {
  const { modalIsOpen, restaurantName, email, setPage } = props

  const [verificationCode, setVerificationCode] = useState('')

  const verification = async () => {
    await confirmSignUp(email, verificationCode).then((res) => {
      if (res) {
        setPage(4)
      } else {
        console.log('Try again')
      }
    })
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

        <TextField
          label="Verification Code"
          variant="outlined"
          value={verificationCode}
          onChange={(e) => {
            setVerificationCode(e.target.value)
          }}
        />
        <button onClick={verification}>Verify</button>
        <p>
          Lost your code? <span onClick={() => resednConfirmationCode(email)}>Rsend Code</span>
        </p>
      </DIV>
    </Modal>
  )
}

export default ConfirmSignUpModal
