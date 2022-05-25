import React from 'react'
import ParallaxScroll from '../components/ParallaxScroll'
import Csr from '../components/Csr'

const copratesocialresponsiblty = () => {
    let k = <Csr/>
    const url = "/img/csrbg.jpg"
  return (
  <>
  <ParallaxScroll component={k} title={"Community Engagement"} bgUrl={url} fontSize={5}/>
  </>
  )
}

export default copratesocialresponsiblty