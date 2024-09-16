import React from 'react'

const Header = () => {
  return (
    <>

      <nav className='justify-center w-48 md:w-64 text-center flex mt-6 text-white rounded-full font-sans border-white shadow-lg bg-gray-900 border-2'>
        <ul className='flex space-x-3 p-1 text-base'>
          <li><a href="/">Home</a></li>
          <li><a href="../About">About</a></li>
          <li><a href="../Wait">Connect</a></li>
        </ul>
      </nav>

    </>
  )
}

export default Header