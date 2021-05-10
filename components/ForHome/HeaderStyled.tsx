import styled from 'styled-components'

import { colorPallete, globalValues } from '../../styles/ThemeConfig'

export const DIV = styled.div`
  .mobileHeader {
    padding: ${globalValues.edgePaddingMobile};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobileNav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${globalValues.edgePaddingMobile};
    background-color: ${colorPallete.lightYellow};
    text-align: center;

    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;

    transition: left 0.5s, right 0.5s;

    &Header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &Links {
      padding-top: 50px;
      flex-grow: 1;

      li {
        margin: 35px 0;
      }

      a {
        font-size: 1.5rem;
      }
    }

    &Footer {
      p {
        font-size: 0.75rem;
        margin-bottom: 21px;
      }
    }
  }

  .close {
    left: 100vw;
    right: -100vw;
  }

  .open {
    left: 0;
    right: 0;
  }
`
