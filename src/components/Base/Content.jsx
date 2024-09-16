import React from 'react'

const Content = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-5">
        <img
          className="h-64 rounded-lg border-2 border-gray-950 shadow-lg contrast-100 md:h-96"
          src="dump.gif"
          alt="Content Image"
        />
         <div className=" font-serif font-light text-3xl popBlack pt-3 text-center">BINARY PIRATES⚓</div>
        <a href='/Password' className="flex gap-3 justify-center rounded-full border-white border-1 shadow-md shadow-blue-300 bg-blue-700 text-white py-3 mt-3 px-4 mb-4 hover:shadow-gray-600 hover:bg-gray-900" >
         Dump here📩
        </a>
      </div>
    </>
  )
}

export default Content