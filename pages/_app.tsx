import { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/sanitize.css'
import '../styles/globals.css'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/protected">Protected</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
