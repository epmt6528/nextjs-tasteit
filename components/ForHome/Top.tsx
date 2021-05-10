import Image from 'next/image'

import { DIV } from './TopStyled'

const Top = () => {
  return (
    <DIV>
      <div className='heroImgDiv'>
        <Image
          src='/img/ForHome/hero.png'
          alt='Tasty hamburger with fries and drink'
          width={359}
          height={308}
          className='heroImage'
        />
      </div>

      <duv className='textDiv'>
        <h1>Exciting Food Tailored To Your Taste.</h1>
        <p>
          Discover your next favourite food and expand your taste horizons
          through mystery dishes, customized just for you.
        </p>
      </duv>

      <a href='login'>
        <button>Start Now</button>
      </a>
    </DIV>
  )
}

export default Top
