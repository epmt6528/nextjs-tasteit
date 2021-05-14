import { useState } from 'react'

import { SignUp1, SignUp2, SignUp3 } from '../components/ForApp/signup'
import Welcome from '../components/ForApp/signup/Welcome'

export default function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    restaurantName: '',
    phoneNumber: '',
    restaurantDescription: '',
    province: '',
    city: '',
    address: '',
    postalCode: '',
  })

  const [page, setPage] = useState(1)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <div>
      {page === 1 ? <SignUp1 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 2 ? <SignUp2 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 3 ? <SignUp3 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 4 ? <Welcome values={values} /> : <></>}
    </div>
  )
}
