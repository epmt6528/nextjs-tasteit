import Image from 'next/image'
import Link from 'next/link'
import { DIV } from './SignUpStyled'

const Welcome = (props) => {
  const { values } = props

  return (
    <DIV>
      <div className="bodyDiv">
        <Image src="/v1620757971/AppGraphics/welcomeMobileView_hvynoz.png" alt="Toast" width={347} height={359} />

        <div className="textDiv">
          <h3>Hi, {values.restaurantName} !</h3>
          <h1>Welcome Aboard!</h1>
          <p>
            Ready to do e-commerce your way?
            <br /> <br /> Tackle the complexity of growing your business and selling online—with a platform designed to
            make it simple at any stage.
          </p>
        </div>

        <Link href="/dashboard">
          <a>
            <button>Get Started</button>
          </a>
        </Link>
      </div>
    </DIV>
  )
}

export default Welcome
