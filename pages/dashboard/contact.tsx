import { useState } from 'react'
import styled from 'styled-components'
import DashboardWrap from '../../components/ForApp/dashboard/DashboardWrap'
import { Button, TextField, Wrapper } from '../../components/UIkits'
import { colorPallete } from '../../styles/ThemeConfig'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Contact = () => {
  const user = useSelector((state: RootState) => state.user.user)

  const [values, setValues] = useState({
    name: user.restaurantName,
    phoneNumber: user.phone,
    email: user.email,
    message: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const submitMessage = (e) => {
    e.preventDefault
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
    })
  }

  return (
    <DashboardWrap comment="Let's keep in touch ✉️" pageTitle="Contact">
      <DIV>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.732352763874!2d-123.11087518431248!3d49.224602779324925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e0!3m2!1sen!2sca!4v1621460888491!5m2!1sen!2sca"
          loading="lazy"
        />

        <div className="infoDiv">
          <div className="infoItemDiv">
            <img src="/img/ForApp/icons/location.svg" alt="Location" />{' '}
            <p>100 West 49th Avenue, Vancouver, BC, V5Y 2Z6</p>
          </div>
          <div className="infoItemDiv">
            <img src="/img/ForApp/icons/phone.svg" alt="Phone" /> <p>(604) 323 -5511</p>
          </div>
        </div>

        <Wrapper>
          <form>
            <h2>Get in touch with us</h2>
            <TextField label="Name" value={values.name} handleChange={handleChange('name')} />
            <TextField label="Phone Number" value={values.phoneNumber} handleChange={handleChange('phoneNumber')} />
            <TextField label="Email" value={values.email} handleChange={handleChange('email')} />
            <TextField
              label="Message"
              value={values.message}
              handleChange={handleChange('message')}
              multiline
              rows={10}
            />
            <Button label="Submit" onClick={submitMessage} />
          </form>
        </Wrapper>
      </DIV>
    </DashboardWrap>
  )
}

const DIV = styled.div`
  iframe {
    width: 100%;
  }

  .infoDiv {
    margin: 47px 0;
  }

  .infoItemDiv {
    display: flex;
    margin-bottom: 20px;

    img {
      width: 26px;
      margin-right: 28px;
    }
  }

  form {
    h2 {
      color: ${colorPallete.burple};
      font-size: 1.5rem;
    }
  }
`

export default Contact
