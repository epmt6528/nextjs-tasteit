import styled from 'styled-components'

import { globalValues, colorPallete } from './ThemeConfig'

export const DIV = styled.div`
  .logoDiv {
    position: absolute;
    top: 20px;
    left: ${globalValues.edgePaddingMobile};
    z-index: 1;
  }

  .bodyDiv {
    padding: 80px ${globalValues.edgePaddingMobile};
  }

  form {
    margin: 24px 0;
  }

  .imgDiv {
    display: flex;
    justify-content: flex-end;
  }
`
