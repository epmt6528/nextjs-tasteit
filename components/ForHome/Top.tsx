import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { globalValues } from '../../styles/ThemeConfig'
import { Button } from '../UIkits'

const Top = () => {
  return (
    <DIV>
      <div className="heroImgDiv">
        <Image
          src="/v1620748191/HomeGraphics/hero_teptw2.png"
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

      <Link href="/signin">
        <a>
          <Button label="Start Now" />
        </a>
      </Link>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .heroImgDiv {
    align-self: flex-end;
  }

  .textDiv {
    padding: ${globalValues.edgePaddingMobile};
  }

  h1 {
    text-align: center;
    line-height: 1.26;
    margin: 26px 0;
  }

  p {
    text-align: center;
    line-height: 1.5;
  }

  button {
    margin: 34px 0;
  }
`

export default Top
