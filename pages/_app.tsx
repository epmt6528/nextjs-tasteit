import { AppProps } from 'next/app'
import Header from '../components/Head'
import '../styles/sanitize.css'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme, GlobalStyles } from '../styles/ThemeConfig'
import Modal from 'react-modal'

import '../configureAmplify'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
