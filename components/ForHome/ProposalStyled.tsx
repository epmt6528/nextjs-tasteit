import styled from 'styled-components'

import { globalValues, colorPallete } from '../../styles/ThemeConfig'

export const DIV = styled.div`
  padding: 76px ${globalValues.edgePaddingMobile};
  background-color: ${colorPallete.lightYellow};

  .textDiv {
    margin: 73.5px 0 44.5px;

    p {
      margin-top: 18px;
    }
  }
`
