import Image from 'next/image'

import { useState } from 'react'
import { DIV } from './SignUpStyled'

import signUp from '../../../pages/api/authentication/signUp'

// materialUI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import ConfirmSignUpModal from './ConfirmSignUpModal'

const SignUp3 = (props) => {
  const { values, handleChange, setPage } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const signUpProcess = async () => {
    console.log('clicked')
    await signUp(values)
      .then(() => {
        console.log('Success')
        setModalIsOpen(true)
      })
      .catch(() => {
        console.log('Fail')
      })
  }

  return (
    <DIV className="thirdPage">
      <div className="bodyDiv">
        <div className="textDiv">
          <h1>You are just a few steps away.</h1>
          <p>Your restaurant location will help us reach out to your target customers better 📍</p>
        </div>

        <form>
          <FormControl variant="outlined">
            <InputLabel id="province">Province</InputLabel>
            <Select
              labelId="province"
              id="province"
              value={values.province}
              onChange={handleChange('province')}
              label="Province"
            >
              <MenuItem value="British Columbia">British Columbia</MenuItem>
              <MenuItem value="Ontario">Ontario</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel id="city">City</InputLabel>
            <Select labelId="city" id="city" value={values.city} onChange={handleChange('city')} label="City">
              <MenuItem value="Vancouver">Vancouver</MenuItem>
              <MenuItem value="Burnaby">Burnaby</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Address" variant="outlined" value={values.address} onChange={handleChange('address')} />

          <TextField
            label="Postal Code"
            variant="outlined"
            value={values.postalCode}
            onChange={handleChange('postalCode')}
          />
        </form>

        <button onClick={() => setPage(2)}>Back</button>
        <button onClick={() => signUpProcess()}>Sign Up</button>
      </div>

      <div className="imgDiv">
        <Image src="/v1620757970/AppGraphics/croissant_hba4x8.png" alt="Yummy croissant" width={207.5} height={268} />
      </div>
      <ConfirmSignUpModal
        modalIsOpen={modalIsOpen}
        restaurantName={values.restaurantName}
        email={values.email}
        setPage={setPage}
      />
    </DIV>
  )
}

export default SignUp3
