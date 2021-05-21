import { useState } from 'react'
import styled from 'styled-components'
import { DashboardWrap } from '../../../components/ForApp/dashboard'
import { Button, TextField, PasswordTextField, Dropdown, Wrapper } from '../../../components/UIkits'
import { Auth } from 'aws-amplify'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { colorPallete } from '../../../styles/ThemeConfig'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../../store/user'

const Edit = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)

  const [values, setValues] = useState({
    restaurantName: user.restaurantName,
    phone: user.phone,
    email: user.email,
    password: '',
    description: user.description,
    province: user.province,
    city: user.city,
    address: user.address,
    postalCode: user.postalCode,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const provinces = ['British Columbia', 'Ontario']
  const cities = ['Vancouver', 'Burnaby']

  const saveNewChange = async () => {
    const user = await Auth.currentAuthenticatedUser()

    await Auth.updateUserAttributes(user, {
      email: values.email,
      'custom:restaurantName': values.restaurantName,
      'custom:phone': values.phone,
      'custom:description': values.description,
      'custom:province': values.province,
      'custom:city': values.city,
      'custom:address': values.address,
      'custom:postalCode': values.postalCode,
    })
      .then((res) => {
        console.log(res)
        dispatch(
          userSlice.actions.updateUser({
            restaurantName: values.restaurantName,
            phone: values.phone,
            email: values.email,
            province: values.province,
            city: values.city,
            address: values.address,
            postalCode: values.postalCode,
            description: values.description,
          })
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <DashboardWrap comment="Keep your restaurant info updated. 👨‍🍳" pageTitle="Your Account">
      <DIV>
        <Wrapper>
          <h2>Account Information</h2>
          <TextField
            label="Restaurant Name"
            value={values.restaurantName}
            handleChange={handleChange('restaurantName')}
          />
          <TextField label="Phone Number" value={values.phone} handleChange={handleChange('phone')} />
          <TextField label="Email" value={values.email} handleChange={handleChange('email')} />
          <PasswordTextField label="Password" value={values.password} handleChange={handleChange('password')} />
          <TextField
            label="Restaurant Description"
            value={values.description}
            handleChange={handleChange('description')}
            rows={5}
          />
        </Wrapper>

        <Wrapper>
          <h2>Location</h2>
          <Dropdown
            label="Province"
            value={values.province}
            handleChange={handleChange('province')}
            options={provinces}
          />
          <Dropdown label="City" value={values.city} handleChange={handleChange('city')} options={cities} />
          <TextField label="Address" value={values.address} handleChange={handleChange('address')} />
          <TextField label="Postal Code" value={values.postalCode} handleChange={handleChange('postalCode')} />
        </Wrapper>

        <Button label="Save New Changes" onClick={saveNewChange} />
      </DIV>
    </DashboardWrap>
  )
}

const DIV = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${colorPallete.burple};
    margin-bottom: 20px;
  }

  & > div {
    margin-bottom: 44px;
  }

  .buttonDiv {
    margin: 50px 0 70px;

    button {
      margin-bottom: 30px;
    }
  }
`

export default Edit
