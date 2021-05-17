import { useState } from 'react'
import styled from 'styled-components'
import { globalValues } from '../styles/ThemeConfig'
import { SignUp1, SignUp2, SignUp3, Welcome } from '../components/ForApp/signup'

const Signup = () => {
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
    <DIV>
      {page === 1 ? <SignUp1 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 2 ? <SignUp2 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 3 ? <SignUp3 values={values} handleChange={handleChange} setPage={setPage} /> : <></>}
      {page === 4 ? <Welcome values={values} /> : <></>}
    </DIV>
  )
}

const DIV = styled.div`
  .logoDiv {
    position: absolute;
    top: 20px;
    left: ${globalValues.edgePaddingMobile};
    z-index: 1;
  }

  .bodyDiv {
    padding: 80px ${globalValues.edgePaddingMobile};
  }

  form {
    margin: 24px 0;
  }

  .imgDiv {
    display: flex;
    justify-content: flex-end;
  }
`

export default Signup
