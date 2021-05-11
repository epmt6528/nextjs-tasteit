import Image from 'next/image'

import { DIV } from './TopStyled'

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/tasteit/image/upload/v1620748191/HomeGraphics/${src}?w=${width}&q=${quality || 75}`
}

const Top = () => {
  return (
    <DIV>
      <div className="heroImgDiv">
        <Image
          loader={myLoader}
          src="/hero_teptw2.png"
          alt="Tasty hamburger with fries and drink"
          width={359}
          height={308}
          className="heroImage"
        />
      </div>

      <div className="textDiv">
        <h1>Exciting Food Tailored To Your Taste.</h1>
        <p>
          Discover your next favourite food and expand your taste horizons through mystery dishes, customized just for
          you.
        </p>
      </div>

      <a href="login">
        <button>Start Now</button>
      </a>
    </DIV>
  )
}

export default Top
