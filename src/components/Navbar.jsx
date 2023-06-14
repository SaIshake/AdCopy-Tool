import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex py-8 px-20 justify-between items-center h-[30px]'>
        <h1 className='text-xl font-extrabold text-black text-center cursor-pointer'>Next<span className='orange_gradient'>Gen</span><span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ml-2">v1.0.0</span></h1>
        <div className='flex justify-center items-center space-x-2'>
          <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
            Logout
          </button>
          <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
            Register
          </button>
          <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
            Login
          </button>
        </div>
    </nav>  
    )
}

export default Navbar