import Fooder from '@/components/Base/Fooder'
import React from 'react'

const AboutPg = () => {
  return (
   <>
   <div className='min-h-screen content-center justify-center bg-yellow-100'>
    <h2 className='text-base font-mono md:text-3xl font-semibold flex text-center justify-center'>About</h2>
    <p className='text-[10px] font-serif font-normal md:text-lg md:px-[200px] flex text-center justify-center'>File Dumping for the group Binary Pirates refers to the organized sharing and storing of digital files within the Binary Pirates community, often focusing on collaborative file exchanges and secure data management.</p>
   </div>
   <Fooder/>
   </>
  )
}

export default AboutPg