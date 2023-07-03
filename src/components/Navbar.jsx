import { Close, Menu } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { logout } from '../redux/user'

axios.defaults.withCredentials = true
const Navbar = () => {
  const {user} = useSelector(state => state.user)
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
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex fixed top-0 z-10  w-full  bg-white py-8  px-10 md:px-20 sm:justify-around justify-between items-center h-[30px]'>
        <h1 onClick={() => navigate("/")} className='text-xl font-extrabold text-black cursor-pointer'>Next<span className='orange_gradient'>Gen</span><span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ml-2">v1.0.0</span></h1>
        <div className='sm:flex hidden justify-center items-center space-x-2'>
        {user.isVerified && <button onClick={(e) => handleLogout(e)} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Logout
        </button>}
        {user.isVerified && <button onClick={(e) => navigate("/Ad-Copy")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Open
        </button>}
        {!user.isVerified && <button onClick={() => navigate("/register")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Register
          </button>}
        {!user.isVerified && <button onClick={() => navigate("/login")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Login
        </button>}
        </div>
        <div className='md:hidden flex  justify-end items-center'>
          {toggle ? <Close className='z-[10] cursor-pointer' onClick={() => setToggle(!toggle)} /> : <Menu className='z-[10] cursor-pointer' onClick={() => setToggle(!toggle)} />}
        </div>
        <div className={`${toggle ? "fixed right-0 top-0" : "fixed right-[-100%] top-0"} bg-gray-200 w-[50%] pt-20 px-5 h-full ease-in-out duration-500 `}>
        <div className='sm:hidden flex-col justify-center items-center space-y-2'>
        {user.isVerified && <button onClick={(e) => handleLogout(e)} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Logout
        </button>}
        {user.isVerified && <button onClick={(e) => navigate("/Ad-Copy")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Open
        </button>}
        {!user.isVerified && <button onClick={() => navigate("/register")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Register
          </button>}
        {!user.isVerified && <button onClick={() => navigate("/login")} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Login
        </button>}
        </div>
        </div>
    </nav>  
    )
}

export default Navbar