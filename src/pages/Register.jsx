import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [success, setSuccess] = useState(false)
    const {loading} = useSelector(state => state.user)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const handleRegister = async(e) => {
        e.preventDefault()
        try {
          const res = await axios.post("http://localhost:4000/auth/register", {
            email: email,
            username: username,
            password: password
          })
          setSuccess(true)
          toast.info('Registered Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setTimeout(() => {
            navigate("/login")
          }, 5000);
        } catch (error) {
          setError(error.response.data)
        }
    }
  return (
    <div className=''>
        <Navbar />
        <div className='app'>
           <Hero desc="The ad copy tool simplifies ad creation with advanced algorithms,
           generating engaging copy tailored to marketing objectives.
           It's user-friendly, saves time, and delivers persuasive ads for effective audience engagement." firstTitle="Welcome to NextGen" secondTitle="Register" />
         <div className='mt-4 w-full max-w-xl m-10'>
              {error.message && <h1 className='text-[15px] mb-4 rounded-xl border border-red-600 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4  text-center mt-3 font-satoshi font-semibold text-red-700'>Error : {error.message}</h1>}
              <form className='flex flex-col space-y-4' onSubmit={(e) => handleRegister(e)}>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Email:</label>
                  <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email"  placeholder='Email ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Username:</label>
                  <input required onChange={(e) => setUsername(e.target.value)} value={username} type="text"  placeholder='Username ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <div className='flex-1 space-y-2'>
                  <label className='text-[15px] font-satoshi font-semibold'>Password:</label>
                  <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password"  placeholder='Password ?'  className='block w-full rounded-md border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' />
                </div>
                <button disabled={loading} className="bg-transparent cursor-pointer py-3 items-center justify-center mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Register
                </button>
              </form>
              <h1 className='text-[15px] mt-3 font-satoshi font-semibold'>Already Have An Account ? <span onClick={() => navigate('/login')} className='text-blue-400 hover:text-blue-800 cursor-pointer hover:underline'>Login</span></h1>
          </div>
        </div>
        {success && <ToastContainer
          className="mt-20"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        }
    </div>
  )
}

export default Register