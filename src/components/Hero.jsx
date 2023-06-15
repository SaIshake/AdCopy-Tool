import React from 'react'

const Hero = ({desc, firstTitle, secondTitle}) => {
  return (
    <div className='my-10 z-0'>
      <h1 className='head_text'>
        {firstTitle} <br className='max-md:hidden'/> <span className='orange_gradient'>{secondTitle}</span>
      </h1>
      <h2 className='desc'>{desc}</h2>
    </div>
  )
}

export default Hero