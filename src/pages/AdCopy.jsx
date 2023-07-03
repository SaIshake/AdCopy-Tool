import React from 'react'
import ResultatAdCopy from '../components/ResultatAdCopy'
import DemoAdCopy from '../components/DemoAdCopy'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { logout } from '../redux/user'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const AdCopy = () => {
  const dispatch = useDispatch()
  const [isNotAuth, setIsNotAuth] = useState(false)
  const handleProtected = async() => {
    try {
      const res = await axios.post("http://localhost:4000/auth/protected")
    } catch (error) {
      setIsNotAuth(true)
      toast.info('Your Session Is Expired Pleas Login Again!', {
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
        dispatch(logout())
        localStorage.clear()
      }, 7000);
    }
  }
  useEffect(() => {
    handleProtected()
  }, [])

  return (
    <main className='relative overflow-x-hidden'>

      <Navbar />
      {isNotAuth && <ToastContainer className="mt-10"
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

      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='flex flex-col sm:flex-row items-start mt-10 z-[5]'>
        <div className="flex-1 app z-0">
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