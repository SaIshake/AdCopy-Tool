import { Menu } from '@mui/icons-material'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex fixed top-0 z-10 w-full  bg-white py-8  px-20 sm:justify-around justify-between items-center h-[30px]'>
        <h1 className='text-xl font-extrabold text-black cursor-pointer'>Next<span className='orange_gradient'>Gen</span><span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ml-2">v1.0.0</span></h1>
        <div className='sm:flex hidden justify-center items-center space-x-2'>
          <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Logout
          </button>
          <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Register
          </button>
          <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Login
          </button>
        </div>
    </nav>  
    )
}

export default Navbar