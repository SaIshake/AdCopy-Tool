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
          <Hero desc="The ad copy tool simplifies ad creation with advanced algorithms,
       generating engaging copy tailored to marketing objectives.
        It's user-friendly, saves time, and delivers persuasive ads for effective audience engagement." firstTitle="Ad Copy Tool with" secondTitle="GPT-4" />
          <DemoAdCopy />
        </div>
        <ResultatAdCopy />
      </div>
    </main>
  )
}

export default AdCopy