import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between text-gray-600 px-4 py-4'>

      {/* Logo */}
      <div className='flex justify-between items-center lg:justify-start'>
        <a href="#" className='flex items-center space-x-2'>
          <span className='text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 hover:scale-105 transition-transform'>
            NoteEnd
          </span>
        </a>

        {/* Login (mobile right side) */}
        <button className='lg:hidden px-6 py-2 bg-white text-gray-800 rounded-3xl text-sm font-bold shadow hover:bg-gray-100 active:scale-95 transition transform duration-150'>
          Login
        </button>
      </div>

      {/* Center Links */}
      <div className='mt-3 lg:mt-0 text-center flex justify-center w-full lg:w-auto'>
        <p className='text-sm lg:text-base'>
          <a href="https://www.linkedin.com/in/vasu-gumber-4a1653328/">LinkedIn</a> /
          <a href="https://www.instagram.com/vx5uu/?utm_source=ig_web_button_share_sheet"> Instagram</a> /
          <a href="#"> Youtube</a>
        </p>
      </div>

      {/* Login (desktop right side) */}
      <button className='hidden lg:block px-6 py-2 bg-white text-gray-800 rounded-3xl text-sm font-bold shadow hover:bg-gray-100 active:scale-95 transition transform duration-150'>
        Login
      </button>

    </div>
  )
}

export default NavBar