import styled from 'styled-components'

import { globalValues, colorPallete } from '../../styles/ThemeConfig'

export const DIV = styled.div`
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
