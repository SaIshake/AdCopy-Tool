import React from 'react'
import ResultatAdCopy from '../components/ResultatAdCopy'
import DemoAdCopy from '../components/DemoAdCopy'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { logout } from '../redux/user'
import styles from '../styles/style'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion'
import { discount, robot } from "../assets/assets";
import { TitleText, TypingText } from '../components/Text'
import { Download } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import StartSteps from '../components/StartSteps'
import axios from 'axios'




const LandingPage = () => {
  const {success, user} = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:4000/auth/logout")
      dispatch(logout())
      localStorage.clear()
      navigate("/login")
    } catch (error) {
    }
  }

  return (
    <main className='relative overflow-x-hidden'>

      <Navbar />

      <div className='main'>
        <div className='gradient' />
      </div>

      <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show" className=''>
        <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show" className={`flex xl:flex-row flex-col overflow-x-hidden md:mx-12 ${styles.paddingY}`}>
            <motion.div variants={fadeIn('left', 'tween', 0.1, 0.3)} className={`flex-1 ${styles.flexStart} flex-col mt-10 xl:px-0 sm:px-16 px-6`}>
              <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-start'>
                Ad Copy Tool with <br className='max-md:hidden'/> <span className='orange_gradient'>GPT-4</span>
              </h1>
              <h2 className={`${styles.paragraph} text-lg text-gray-600 sm:text-2xl text-start max-w-xl mt-5`}>The ad copy tool simplifies ad creation with advanced algorithms,
              generating engaging copy tailored to marketing objectives.
              It's user-friendly, saves time, and delivers persuasive ads for effective audience engagement.</h2>
              <div className='flex w-[100%] md:w-[60%] justify-center items-center space-x-2'>
              {user.isVerified && <motion.button variants={staggerContainer}
    initial="hidden"
    whileInView="show" onClick={(e) => handleLogout(e)} className="text-white md:text-[18px] text-[15px] flex  justify-center mt-5 items-center w-[100%] md:w-[60%] bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 font-bold rounded-full  px-5 md:py-4 py-2 text-center mr-2 mb-2 dark:focus:ring-pink-900 uppercase font-satoshi">
                 Logout <motion.div className='mx-2' variants={fadeIn('down', 'tween', 0.1, 0.5)}><LogoutIcon /></motion.div>
              </motion.button>}
              {user.isVerified && <button onClick={(e) => navigate("/Ad-Copy")} className="text-white md:text-[18px] text-[15px] flex  justify-center mt-5 items-center w-[100%] md:w-[60%] bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-bold rounded-full  px-5 md:py-4 py-2 text-center mr-2 mb-2 dark:focus:ring-orange-900 uppercase font-satoshi">
                 Open
              </button>}
              {!user.isVerified && <button onClick={() => navigate("/register")} className="text-white md:text-[18px] text-[15px] flex  justify-center mt-5 items-center w-[100%] md:w-[60%] bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 font-bold rounded-full  px-5 md:py-4 py-2 text-center mr-2 mb-2 dark:focus:ring-pink-900 uppercase font-satoshi">
                 Register
              </button>}
              {!user.isVerified && <motion.button variants={staggerContainer}
    initial="hidden"
    whileInView="show" onClick={() => navigate("/login")} className="text-white md:text-[18px] text-[15px] flex  justify-center mt-5 items-center w-[100%] md:w-[60%] bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-bold rounded-full  px-5 md:py-4 py-2 text-center mr-2 mb-2 dark:focus:ring-orange-900 uppercase font-satoshi">
                Login <motion.div className='mx-2' variants={fadeIn('down', 'tween', 0.1, 0.5)}><LoginIcon /></motion.div>
              </motion.button>}
        </div>
              <motion.button variants={staggerContainer}
    initial="hidden"
    whileInView="show" className="text-white md:text-[18px] text-[15px] flex  justify-center mt-5 items-center w-[100%] md:w-[60%] bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-bold rounded-full  px-5 md:py-4 py-2 text-center mr-2 mb-2 dark:focus:ring-cyan-900 uppercase font-satoshi">Download Desktop App <motion.div className='mx-2' variants={fadeIn('down', 'tween', 0.1, 0.5)}><Download /></motion.div></motion.button>

            </motion.div>
            <motion.div variants={fadeIn('right', 'tween', 0.1, 0.3)} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
               <img src={robot} alt="billing" className="xl:w-[85%] xl:h-[85%] w-[60%] h-[60%] relative z-[4]" />
               <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            </motion.div>
        </motion.div>
        <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show" className='relative flex justify-center items-center flex-col my-10  mx-auto sm:px-16 px-6'>
        <TypingText title="| About NextGen" textStyles="text-center text-cyan-500 text-3xl font-bold font-poppins my-8" />
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 0.7)}
        className="my-4 font-normal text-[20px] text-center text-gray-600 font-poppins max-w-[600px] "
      >
        <span className="font-extrabold text-black">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-black">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-black">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-orange-500">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
      </motion.div> 
      <motion.div className="relative mt-24 overflow-x-hidden flex justify-center  items-center flex-col my-10  mx-auto sm:px-16 px-6" variants={fadeIn('down', 'tween', 0.2, 1)}>
        <TypingText title="| What You Need To Know About Our Tool" textStyles={`font-poppins text-cyan-500`} />
        <TitleText title="Our tool features" textStyles={`font-poppins`} />
        <div className='flex flex-col gap-[24px] max-w-[370px] mt-8'>
            <StartSteps  text="You Can Save And Delete And Edit Ads " number={1} />
            <StartSteps  text="You Can Generate Multiple Ads" number={2} />
            <StartSteps  text="Our Web Application Fully Responsive And Very Safe" number={3} />
        </div>
      </motion.div>  
      </motion.div>
    </main>
  )
}

export default LandingPage