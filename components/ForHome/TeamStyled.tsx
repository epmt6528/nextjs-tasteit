import styled from 'styled-components'

import { globalValues, colorPallete } from '../../styles/ThemeConfig'

export const DIV = styled.div`
  padding: 96px ${globalValues.edgePaddingMobile};

  h1 {
    margin-bottom: 15px;
  }
`

export const CARDDIV = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 49px;
  padding: 21px 18px;
  background-color: ${colorPallete.lightYellow};

  text-align: center;

  h3 {
    color: ${colorPallete.burple};
    font-size: 1.5rem;
    line-height: 1.5;
    margin-top: 22px;
  }

  ul {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;
    }
  }
`
