import { useState } from 'react'
import Modal from 'react-modal'
import { Auth } from 'aws-amplify'
import { PasswordTextField, TextField } from '../../UIkits'
import styled from 'styled-components'
import { colorPallete } from '../../../styles/ThemeConfig'

const ResetPasswordModal = (props) => {
  const { modalIsOpen, setModalIsOpen } = props

  const [values, setValues] = useState({
    email: '',
    verificationCode: '',
    newPassword: '',
  })

  const [page, setPage] = useState(1)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const resetPassword = async () => {
    await Auth.forgotPasswordSubmit(values.email, values.verificationCode, values.newPassword)
      .then(() => {
        setModalIsOpen(false)
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
  }

  const sendVerificationCode = async () => {
    await Auth.forgotPassword(values.email).then(() => {
      setPage(2)
    })
  }

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      {page === 1 ? (
        <DIV>
          <img src="/img/ForHome/logoMobile.svg" alt="Taste It" width="50" height="50" />
          <div className="textDiv">
            <p>Submit your email</p>
          </div>
          <TextField label="Email" value={values.email} handleChange={handleChange('email')} />
          <button onClick={sendVerificationCode}>Submit</button>{' '}
        </DIV>
      ) : (
        <DIV>
          <img src="/img/ForHome/logoMobile.svg" alt="Taste It" width="50" height="50" />
          <div className="textDiv">
            <p>Enter verification code and your email</p>
          </div>
          <TextField
            label="Verification Code"
            value={values.verificationCode}
            handleChange={handleChange('verificationCode')}
          />
          <PasswordTextField
            inputLabel="New Password"
            value={values.newPassword}
            handleChange={handleChange('newPassword')}
          />
          <button onClick={resetPassword}>Reset</button>{' '}
        </DIV>
      )}
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

export default ResetPasswordModal
