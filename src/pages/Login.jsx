import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
      e.preventDefault()
      console.log(email + " " +password)
  }

  return (
    <div className=''>
        <Navbar />
        <div className='app'>
        <Hero desc="The ad copy tool simplifies ad creation with advanced algorithms,
       generating engaging copy tailored to marketing objectives.
        It's user-friendly, saves time, and delivers persuasive ads for effective audience engagement." firstTitle="Welcome to NextGen" secondTitle="Login" />
        <div className='mt-4 w-full max-w-xl m-10'>
              <form className='flex flex-col space-y-4' onSubmit={(e) => handleLogin(e)}>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Email:</label>
                  <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email"  placeholder='Email ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Password:</label>
                  <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password"  placeholder='Password ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <button type='submit' className="bg-transparent py-3 items-center justify-center mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Login
                </button>
              </form>
              <h1 className='text-[15px] mt-3 font-satoshi font-semibold'>You don't have An Account ? <span className='text-blue-400 hover:text-blue-800 cursor-pointer hover:underline'>Register</span></h1>
          </div>
        </div>
    </div>
  )
}

export default Login