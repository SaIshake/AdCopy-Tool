import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { Loading, loginFailed, loginSuccess } from '../redux/user'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {loading} = useSelector(state => state.user)
  const [error, setError] = useState({})

  const handleLogin = async(e) => {
      
      e.preventDefault()
      dispatch(Loading())
      try {
        const res = await axios.post("http://localhost:4000/auth/login", {
          email: email,
          password: password
        })
        if(res.data.details.isVerified) {
          nav("/Ad-Copy")
        } else {
          nav("/verification")
        }
        dispatch(loginSuccess(res.data.details))
      } catch (error) {
        dispatch(loginFailed(error.response.data))
        setError(error.response.data)
      }
  }

  return (
    <div className=''>
        <Navbar />
        <div className='app'>
        <Hero desc="The ad copy tool simplifies ad creation with advanced algorithms,
       generating engaging copy tailored to marketing objectives.
        It's user-friendly, saves time, and delivers persuasive ads for effective audience engagement." firstTitle="Welcome to NextGen" secondTitle="Login" />
        <div className='mt-4 w-full max-w-xl m-10'>
              {error.message && <h1 className='text-[15px] mb-4 rounded-xl border border-red-600 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4  text-center mt-3 font-satoshi font-semibold text-red-700'>Error : {error.message}</h1>}

              <form className='flex flex-col space-y-4' onSubmit={(e) => handleLogin(e)}>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Email:</label>
                  <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email"  placeholder='Email ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Password:</label>
                  <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password"  placeholder='Password ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <button disabled={loading} type='submit' className="bg-transparent cursor-pointer py-3 items-center justify-center mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Login
                </button>
              </form>
              <h1 className='text-[15px] mt-3 font-satoshi font-semibold'>You don't have An Account ? <span onClick={() => nav('/register')} className='text-blue-400 hover:text-blue-800 cursor-pointer hover:underline'>Register</span></h1>
          </div>
        </div>
    </div>
  )
}

export default Login