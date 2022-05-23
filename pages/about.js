import React from 'react'
import ParallaxScroll from '../components/ParallaxScroll'
// import AboutPage from '../components/AboutPage'
import About2 from '../components/About2'

const about = () => {
    let k = <About2/>
    const url = "/img/aboutbg.webp"
  return (
  <>
  <ParallaxScroll component={k} title={"About Us"} bgUrl={url} fontSize={6}/>
  </>
  )
}

export default about