import Image from 'next/image'
import { Button, TextField } from '../../UIkits'

const SignUp2 = (props) => {
  const { values, handleChange, setPage } = props

  return (
    <div className="secondPage">
      <div className="bodyDiv">
        <div className="textDiv">
          <h1>Tell us about your restaurant.</h1>
          <p>Team up with us and start growing your business 🤝</p>
        </div>

        <form>
          <TextField
            label="Restaurant Name"
            value={values.restaurantName}
            handleChange={handleChange('restaurantName')}
          />

          <TextField label="Phone Number" value={values.phoneNumber} handleChange={handleChange('phoneNumber')} />

          <TextField
            label="Restaurant Description"
            value={values.restaurantDescription}
            handleChange={handleChange('restaurantDescription')}
            multiline
            rows={5}
          />
        </form>

        <Button label="Back" onClick={() => setPage(1)} />
        <Button label="Next" onClick={() => setPage(3)} />
      </div>

      <div className="imgDiv">
        <Image
          src="/v1620757970/AppGraphics/crepe_yyviwb.png"
          alt="Crepe with strawberries"
          width={207.5}
          height={218}
        />
      </div>
    </div>
  )
}

export default SignUp2
