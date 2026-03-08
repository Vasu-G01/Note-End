import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between text-gray-600'>
          <div className='m-6 flex gap-10'>
            <a href="#" className='flex items-center space-x-2'>
              <span className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 hover:scale-105 transition-transform'>
                NoteEnd
              </span>
            </a>
            <button className='px-6 py-2 bg-white text-gray-800 rounded-3xl text-sm font-bold shadow hover:bg-gray-100 active:scale-95 transition transform duration-150'>
              Login
            </button>
          </div>
          <div className='m-6'>
            <p>
              <a href="#">LinkedIn</a> / <a href="#">Instagram</a> / <a href="#">Youtube</a>
            </p>
          </div>
    </div>
  )
}

export default NavBar