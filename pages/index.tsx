import React from 'react'
import { Header, Top, HowItWorks, Features, Team, Proposal, Footer } from '../components/ForHome'

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Top />
      <HowItWorks />
      <Features />
      <Team />
      <Proposal />
      <Footer />
    </div>
  )
}
export default Home
