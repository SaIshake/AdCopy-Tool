import React from 'react'
import ResultatAdCopy from '../components/ResultatAdCopy'
import DemoAdCopy from '../components/DemoAdCopy'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const AdCopy = () => {
  return (
    <main>
      <Navbar />
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='flex flex-col sm:flex-row items-start'>
        <div className="flex-1 app">
          <Hero />
          <DemoAdCopy />
        </div>
        <ResultatAdCopy />
      </div>
    </main>
  )
}

export default AdCopy