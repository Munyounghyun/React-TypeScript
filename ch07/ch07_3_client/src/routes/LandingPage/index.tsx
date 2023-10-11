import React from 'react'
import Hero from './Hero'
import Promotion from './Promotion'

type LandingPageProps = {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <section className="mt-4">
      <Hero />
      <Promotion />
    </section>
  )
}

export default LandingPage
