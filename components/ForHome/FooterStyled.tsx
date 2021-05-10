import styled from 'styled-components'

import { globalValues, colorPallete } from '../../styles/ThemeConfig'

export const DIV = styled.div`
  margin: 76px ${globalValues.edgePaddingMobile};

  p,
  a {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .bodyDiv {
    margin: 61px 0;
    display: grid;
    gap: 30px 5px;
    grid-template: 1fr / 1fr 1fr;

    h3 {
      color: ${colorPallete.burple};
      margin-bottom: 20px;
    }
  }

  .aboutUs {
    grid-column: 1 / -1;
  }

  hr {
    border: 1px solid ${colorPallete.lightParple};
  }

  .footerDiv {
    margin-top: 43px;
    text-align: center;

    p {
      margin-bottom: 21px;
    }
  }
`
