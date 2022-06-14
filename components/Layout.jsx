import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Blob from './Blob'
import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useRouter } from "next/router";



const Layout = ({ children }) => {
  const router = useRouter();

  const navItem = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Products",
      link: "/products"
    },
    {
      title: "Investors",
      link: "/investors" 
    },
    {
      title: "CSR",
      link: "/coprate-social-responsiblty"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Contact us",
      link: "/contact"
    },
  ];


  return (
    <>
      <Head>
        <title>Mechtra India | {router.pathname.split("/")[1]}</title>
        <meta name="description" content="Mectra India Teir 1 company" />
        <link rel="icon" href="/img/logo.png" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"></link>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossOrigin=""/>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <a className="skip-to-content" href="#content">Skip to Content</a>
      <Navbar navItem={navItem} />
      <Blob/>
      <div id="content" >
    <ParallaxProvider>
        <main className=' relative mt-[45px]'>
          {children}        
          <Footer navItem={navItem} />
        </main>
    </ParallaxProvider>

      </div>
    </>
  )
}

export default Layout