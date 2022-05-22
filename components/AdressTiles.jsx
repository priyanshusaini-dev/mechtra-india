import React from 'react'
import { faker } from '@faker-js/faker';

const AdressTiles = () => {
  return (
    <>
      <div className="flex w-full gap-3 flex-wrap justify-center item-center">
          <div className="bg-white border w-44 h-44 text-center p-2 shadow-lg rounded">
            <div className='text-[cyan]'><i className=" fa-solid fa-location-dot fa-4x"></i></div>
            <h2 className='text-base'>OUR MAIN OFFICE</h2>
            <div className='text-xs p-3'>
              {faker.address.buildingNumber()},
              {faker.address.streetAddress(true)},
              {faker.address.country()}
            </div>
          </div>
          <div className="bg-white border w-44 h-44 text-center p-2 shadow-lg rounded">
            <div className='text-[cyan]'><i className=" fa-duotone fa-phone  fa-4x"></i></div>
            <h2 className='text-base'>PHONE NUMBER</h2>
            <div className='text-xs p-3'>
              {faker.phone.phoneNumber('+91 91 ### ## ##')},
              {faker.phone.phoneNumber('+91 91 ### ## ##')},
              (Toll Free)
            </div>
          </div>
          <div className="bg-white border w-44 h-44 text-center p-2 shadow-lg rounded">
            <div className='text-[cyan]'><i className=" fa-duotone fa-fax  fa-4x"></i></div>
            <h2 className='text-base'>FAX</h2>
            <div className='text-xs p-3'>
              {faker.phone.phoneNumber()}
            </div>
          </div>
          <div className="bg-white border w-44 h-44 text-center p-2 shadow-lg rounded">
            <div className='text-[cyan]'><i className=" fa-solid fa-envelope  fa-4x"></i></div>
            <h2 className='text-base'>EMAIL</h2>
            <div className='text-xs p-3'>
              <a>support@mectraindia.com</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default AdressTiles