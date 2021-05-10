import styled from 'styled-components'

import { globalValues } from '../../styles/ThemeConfig'

export const DIV = styled.div`
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
