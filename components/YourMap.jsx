import React from 'react'
import dynamic from 'next/dynamic';
import AdressTiles from './AdressTiles'

const Mapi = dynamic(() => import("../components/Mapi.jsx"), {
  ssr: false
});
const YourMap = () => {

  return (
    <div className='flex justify-center w-full flex-col md:flex-row gap-5'>
      <div className='md:w-[50%] w-full h-auto bg-[#0c203d83] py-5'>
        <AdressTiles />
      </div>
      <div className='md:w-[50%] w-full h-auto bg-[#0c203d83] py-5'>
        <Mapi />
      </div>
    </div>
  )
}

export default YourMap