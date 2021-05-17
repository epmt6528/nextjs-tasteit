import Image from 'next/image'
import styled from 'styled-components'
import { globalValues, colorPallete } from '../../styles/ThemeConfig'
import { Button } from '../UIkits'

const Proposal = () => {
  return (
    <DIV>
      <Image src="/v1620748194/HomeGraphics/cooking_n1pyvn.png" alt="Salmon and Egg" width={343} height={302} />
      <div className="textDiv">
        <h1>Ready to see what we are working on?</h1>
        <p>
          If you are curious to know more about our solutions, please feel free to take a look at our project proposal
        </p>
      </div>

      <a
        href="https://drive.google.com/file/d/1couz50H6GlM9GlTLKE4Zx032h2m0bowI/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button label="Download Now" />
      </a>
    </DIV>
  )
}

const DIV = styled.div`
  padding: 76px ${globalValues.edgePaddingMobile};
  background-color: ${colorPallete.lightYellow};

  .textDiv {
    margin: 73.5px 0 44.5px;

    p {
      margin-top: 18px;
    }
  }
`

export default Proposal
