import Image from 'next/image'

import { DIV } from './SignUpStyled'

// materialUI
import TextField from '@material-ui/core/TextField'

const SignUp2 = (props) => {
  const { values, handleChange, setPage } = props

  return (
    <DIV className="secondPage">
      <div className="bodyDiv">
        <div className="textDiv">
          <h1>Tell us about your restaurant.</h1>
          <p>Team up with us and start growing your business 🤝</p>
        </div>

        <form>
          <TextField
            label="Restaurant Name"
            variant="outlined"
            value={values.restaurantName}
            onChange={handleChange('restaurantName')}
          />

          <TextField
            label="Phone Number"
            variant="outlined"
            value={values.phoneNumber}
            onChange={handleChange('phoneNumber')}
          />

          <TextField
            label="Restaurant Description"
            variant="outlined"
            multiline
            rows={5}
            value={values.restaurantDescription}
            onChange={handleChange('restaurantDescription')}
          />
        </form>

        <button onClick={() => setPage(1)}>Back</button>
        <button onClick={() => setPage(3)}>Next</button>
      </div>

      <div className="imgDiv">
        <Image
          src="/v1620757970/AppGraphics/crepe_yyviwb.png"
          alt="Crepe with strawberries"
          width={207.5}
          height={218}
        />
      </div>
    </DIV>
  )
}

export default SignUp2
