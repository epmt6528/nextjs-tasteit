import { createGlobalStyle } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

// Variables
export const globalValues = {
  edgePaddingMobile: '16px',
}

export const colorPallete = {
  black: '#000000',
  white: '#ffffff',
  burple: '#632DF1',
  darkParple: '#3E315A',
  lightParple: '#D4CDE3',
  yellow: '#FEC042',
  lightYellow: '#FFFDEC',
}

// media queries
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

// Global Styles (Typography)
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Nexa Light';
    src: url('/fonts/NexaLight.otf') format('truetype');
  }

  @font-face {
    font-family: 'Nexa Regular';
    src: url('/fonts/NexaRegular.otf') format('truetype');
  }

  @font-face {
    font-family: 'Nexa Bold';
    src: url('/fonts/NexaBold.otf') format('truetype');
  }

  @font-face {
    font-family: 'Nexa XBold';
    src: url('/fonts/NexaXBold.otf') format('truetype');
  }

  body{
    color: ${colorPallete.darkParple}
  }

  ${'' /* Headings */}
  h1{
    font-family: 'Nexa XBold';
    font-size: 2.375rem;
    line-height: 1.26;
    color: ${colorPallete.burple}
  }

  ${'' /* Sub Headings */}
  h2{
    font-family: 'Nexa XBold';
    font-size: 2.315rem;
  }

  ${'' /* Titles */}
  h3{
    font-family: 'Nexa Bold';
    font-size: 1rem;
  }

  button{
    font-family: 'Nexa XBold';
    font-size: 1rem;

    border: none;
    border-radius: 20px;
    padding: 19px 64px;
    color: ${colorPallete.white};
    background-color: ${colorPallete.burple};
  }

  ${'' /* Body Text */}
  p, a{
    font-family: 'Nexa Light';
    font-size: 1rem;
    line-height: 1.5;
  }

  a{
    text-decoration: none;
    color: ${colorPallete.darkParple}
  }
}
`
// materialUI
export const muiTheme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
        margin: '20px 0',
        border: `2px solid ${colorPallete.lightParple}`,
        borderRadius: '20px',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: 'none',
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: 'Nexa Bold',
        color: `${colorPallete.darkParple}`,
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Nexa Regular',
        color: `${colorPallete.darkParple}`,
      },
    },
    MuiInputLabel: {
      shrink: {
        backgroundColor: `${colorPallete.white}`,
        color: `${colorPallete.darkParple}`,
        padding: '0 5px',
      },
    },
  },
})
