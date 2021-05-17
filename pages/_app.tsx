import { AppProps } from 'next/app'
import '../styles/sanitize.css'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme, GlobalStyles } from '../styles/ThemeConfig'
import Header from '../components/Head'
import '../configureAmplify'
import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../store'

Modal.setAppElement('#__next')

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
