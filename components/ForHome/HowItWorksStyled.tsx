import styled from 'styled-components'

import { globalValues } from '../../styles/ThemeConfig'

export const DIV = styled.div`
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
