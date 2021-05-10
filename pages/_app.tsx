import { AppProps } from 'next/app'
import Header from '../components/Head'
import '../styles/sanitize.css'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme, GlobalStyles } from '../styles/ThemeConfig'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure({
  ...config,
  ssr: true,
})

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
