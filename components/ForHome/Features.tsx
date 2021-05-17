import Image from 'next/image'
import styled from 'styled-components'
import { globalValues, colorPallete } from '../../styles/ThemeConfig'

const Features = () => {
  return (
    <DIV>
      <div className="imgDiv">
        <Image src="/v1620748193/HomeGraphics/lobster_rhon1u.png" alt="A dish of lobster" width={342} height={487} />
      </div>

      <div className="textDiv" id="features">
        <h3>Features</h3>
        <h1>Discover new ways to manage your online restaurant orders.</h1>
      </div>

      <div className="featureDiv">
        <ul>
          <li>
            <Image src="/v1620748190/HomeGraphics/tomatoSoup_jndl63.png" alt="Tomato Soup" width={110} height={110} />
            <h3>Customize your menu</h3>
            <p>Easily and quickly add, edit and remove your restaurant’s dishes.</p>
          </li>
          <li>
            <Image src="/v1620748189/HomeGraphics/sushi_htsuk3.png" alt="Tuna nigiri" width={110} height={110} />
            <h3>Update your order status</h3>
            <p>Keep your customers informed with order status updates.</p>
          </li>
        </ul>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  padding: 0 ${globalValues.edgePaddingMobile} 102.5px;
  background-color: ${colorPallete.lightYellow};

  display: flex;
  flex-direction: column;
  align-items: center;

  .imgDiv {
    margin-top: 103px;
  }

  .textDiv {
    padding-top: 72px;
  }

  h1 {
    margin: 22.5px 0;
  }

  li {
    margin: 50px 0;

    h3 {
      margin: 34.5px 0 16px;
    }
  }
`

export default Features
