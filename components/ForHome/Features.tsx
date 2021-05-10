import Image from 'next/image'

import { DIV } from './FeaturesStyled'

const Features = () => {
  return (
    <DIV>
      <div className='imgDiv'>
        <Image
          src='/img/ForHome/lobster.png'
          alt='A dish of lobster'
          width={342}
          height={487}
        />
      </div>

      <div className='textDiv' id='features'>
        <h3>Features</h3>
        <h1>Discover new ways to manage your online restaurant orders.</h1>
      </div>

      <div className='featureDiv'>
        <ul>
          <li>
            <Image
              src='/img/ForHome/tomatoSoup.png'
              alt='Tomato Soup'
              width={110}
              height={110}
            />
            <h3>Customize your menu</h3>
            <p>
              Easily and quickly add, edit and remove your restaurant’s dishes.
            </p>
          </li>
          <li>
            <Image
              src='/img/ForHome/sushi.png'
              alt='Tuna nigiri'
              width={110}
              height={110}
            />
            <h3>Update your order status</h3>
            <p>Keep your customers informed with order status updates.</p>
          </li>
        </ul>
      </div>
    </DIV>
  )
}

export default Features
