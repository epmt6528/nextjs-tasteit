import Image from 'next/image'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import ConfirmSignUpModal from './ConfirmSignUpModal'
import { TextField, Dropdown, Button } from '../../UIkits'

const SignUp3 = (props) => {
  const { values, handleChange, setPage } = props
  const { email, password, restaurantName, description, province, city, address, postalCode, phoneNumber } = values
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const signUpProcess = async () => {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        'custom:email': email,
        'custom:restaurantName': restaurantName,
        'custom:phoneNumber': 0,
        'custom:description': description,
        'custom:province': province,
        'custom:city': city,
        'custom:address': address,
        'custom:postalCode': postalCode,
        'custom:phone': phoneNumber,
      },
    })
      .then(() => {
        setModalIsOpen(true)
      })
      .catch((error) => {
        console.log('Error signing up: ', error)
      })
  }

  const provinces = ['British Columbia', 'Ontario']
  const cities = ['Vancouver', 'Burnaby']

  return (
    <div className="thirdPage">
      <div className="bodyDiv">
        <div className="textDiv">
          <h1>You are just a few steps away.</h1>
          <p>Your restaurant location will help us reach out to your target customers better 📍</p>
        </div>

        <form>
          <Dropdown
            label="Province"
            value={values.province}
            handleChange={handleChange('province')}
            options={provinces}
          />

          <Dropdown label="City" value={values.city} handleChange={handleChange('city')} options={cities} />

          <TextField label="Address" value={values.address} handleChange={handleChange('address')} />

          <TextField label="Postal Code" value={values.postalCode} handleChange={handleChange('postalCode')} />
        </form>

        <Button label="Back" onClick={() => setPage(2)} />
        <Button label="Sign Up" onClick={() => signUpProcess()} />
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
    </div>
  )
}

export default SignUp3
