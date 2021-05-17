import Image from 'next/image'
import styled from 'styled-components'
import { globalValues } from '../../styles/ThemeConfig'

const HowItWorks = () => {
  return (
    <DIV id="howItWorks">
      <div className="textDiv">
        <h3>How It Works</h3>
        <h1>Explore an exciting way to spice up your meals.</h1>
        <p>Go on a culinary adventure to discover your next favourite food through our mystery dishes.</p>
      </div>

      <div className="imgDiv">
        <Image
          src="/v1620748191/HomeGraphics/pancake_odsbqd.png"
          alt="Pancakes and Cafe Latte"
          width={337}
          height={342}
        />
      </div>

      <div className="stepsDiv">
        <ul>
          <li>
            <div className="iconDiv">
              <Image
                src="/v1620756476/HomeGraphics/champagne_i4hk0z.png"
                alt="Champagne glass"
                width={32}
                height={67}
              />
            </div>

            <p>Sign up and create your unique flavour profile.</p>
          </li>
          <li>
            <div className="iconDiv">
              <Image src="/v1620756476/HomeGraphics/arrow_c1i6qt.png" alt="Arrow" width={28} height={45} />
            </div>

            <p>Hit “Order Now” and we will take care of the rest.</p>
          </li>
          <li>
            <div className="iconDiv">
              <Image src="/v1620756476/HomeGraphics/heart_gxihuc.png" alt="Heart" width={40} height={36} />
            </div>

            <p>Enjoy a yummy meal tailored to your taste.</p>
          </li>
        </ul>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  padding: 142px ${globalValues.edgePaddingMobile};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 22.5px 0;
  }

  .imgDiv {
    margin: 57.5px 0;
  }

  li {
    display: grid;
    grid-template: 1fr / 40px 1fr;
    grid-gap: 32px;
    margin: 41px 0;

    .iconDiv {
      margin: 0 auto;
    }
  }
`

export default HowItWorks
