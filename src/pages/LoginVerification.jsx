import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../redux/user'
const LoginVerification = () => {
  const [otp, setOtp] = useState()
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleVerify = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:4000/auth/verify/${user._id}`, {
        otp: otp
      })
      console.log(res.data)
      dispatch(verifyUser())
      navigate("/Ad-Copy")
    } catch (error) {
      console.log(error)
    }
  }
  const handleResend = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:4000/auth/resend`, {
        email: user.email
      })
    } catch (error) {
    }
  }


  return (
    <div className=''>
        <Navbar />
        <div className='app'>
        <Hero desc="Check Your Email Account To Verify Your Account Pleas Wait, If You Dont recive Any Code, Click Resend" firstTitle="Welcome to NextGen" secondTitle="OTP Verification" />
        <div className='w-full mt-28 max-w-xl m-10'>
              {/*error.message && <h1 className='text-[15px] mb-4 rounded-xl border border-red-600 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4  text-center mt-3 font-satoshi font-semibold text-red-700'>Error : {error.message}</h1>*/}

              <form className='flex flex-col space-y-4' onSubmit={(e) => handleVerify(e)}>
                <div className='flex-1 space-y-2'>
                  <label className='text-[20px] font-satoshi font-semibold'>OTP:</label>
                  <input onChange={(e) => setOtp(e.target.value)} value={otp || ""} required  type="number"  placeholder='OTP'  className='block w-full rounded-md border border-gray-200 bg-white py-5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <button type='submit' className="bg-transparent py-5 text-[20px] items-center justify-center mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Verify
                </button>
              </form>
              <h1 className='text-[15px] mt-3 font-satoshi font-semibold'>You don't recive OTP ? <span onClick={(e) => handleResend(e)} className='text-blue-400 hover:text-blue-800 cursor-pointer hover:underline'>resend</span></h1>
          </div>
        </div>
    </div>
  )
}

export default LoginVerification