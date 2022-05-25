import React from 'react'
import Image from "next/image";
const imageLoader = require("../loader.js");
import Link from "next/link";


const Footer = ({ navItem }) => {
  const icon = [
    {
      icon: "fa-facebook-f",
      url: "https://www.facebook.com",
      color:"#4267B2"
    },
    {
      icon: "fa-instagram",
      url: "https://www.instagram.com",
      color: "#E1306C"
    },
    {
      icon: "fa-twitter",
      url: "https://www.twitter.com",
      color: "#1DA1F2"

    },
    {
      icon: "fa-google-plus-g",
      url: "https://www.gmail.com",
      color: "#DB4437"
    },
    {
      icon: "fa-linkedin-in",
      url: "https://www.linkedin.com",
      color: "#006AFF"
    },
    {
      icon: "fa-youtube",
      url: "https://www.youtube.com",
      color: "#FF0000"
    },
  ]
 const termItem = [
  {
    title: "Contact Us",
    link:"/contact"
  },
  {
    title: "About Us",
    link:"/about"
  },
 ]
 const privacyItem=[
   {
    title: "Privacy Policy",
    link:"/privacy",
  },
  {
    title: "Terms and Conditions",
    link:"/terms",
  }
 ]
  return (
    <>
      <div className="relative inset-x-0 bottom-0 py-5 footer">
        <div className='flex flex-wrap justify-center gap-5 w-full mt-4 text-center'>
          <div className="hover:text-[#4267B2] hover:text-[#E1306C] hover:text-[#1DA1F2] hover:text-[#DB4437] hover:text-[#006AFF]  hover:text-[#FF0000]"></div>
          {icon.map((e, i) => {
          let iconColor = `hover:text-[${e.color}]`
            return <a href={e.url} key={i} target="_blank" rel="noreferrer"> <i className={`fa-brands ${e.icon} mx-2 my-3 w-[2.4rem] fa-2xl ${iconColor}`}></i></a>
          })}
        </div>
        <section className="w-full p-4 ">

          <hr className="m-auto w-[50%] opacity-20 mb-12" />

          <div>
            <div className="flex justify-around flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-2xl text-white tracking-widest text-sm mb-3">Visit</h2>
                <nav className="list-none mb-10">
                  {navItem.map((e, i) => {
                    return <li key={i}>
                      <Link href={e.link}><a className="text-gray-400 text-lg hover:text-white">{e.title}</a></Link>
                    </li>
                  })}
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-[1.2rem] text-white tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                <nav className="list-none mb-10">
                  {termItem.map((e, i) => {
                    return <li key={i}>
                      <Link href={e.link}><a className="text-gray-400 text-lg hover:text-white">{e.title}</a></Link>
                    </li>
                  })}
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-2xl text-white tracking-widest text-sm mb-3">POLICY</h2>
                <nav className="list-none mb-10">
                  {privacyItem.map((e, i) => {
                    return <li key={i}>
                      <Link href={e.link}><a className="text-gray-400 text-lg hover:text-white">{e.title}</a></Link>
                    </li>
                  })}
                </nav>
              </div>
              <Link href='/'><a className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <div className="w-full flex justify-center">
                <Image loader={imageLoader} src="logo.png" width={180} height={180} />
                  </div>
                <h1 className="text-center mt-5 text-2xl">Mectra India</h1>
              </a></Link>
            </div>
          </div>


          <p className="text-center lg:mx-48 text-md mt-7">1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</p>
          <p className="text-center  text-md mt-2 font-mono">+01 2345 6789 12  |  +01 2345 6789 12</p>


          <hr className="opacity-20" />
        </section>

        <footer className='flex justify-center text-md'>
          <p>Copyright © 2022 <span className="relative top-1"><Image loader={imageLoader} src="logo.png" width={25} height={25} alt="logo" /></span> All Rights Reserved.</p>
        </footer>

      </div>

    </>
  )
}

export default Footer