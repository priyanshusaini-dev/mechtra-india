import React from 'react'
import ParallaxScroll from '../components/ParallaxScroll'
import ContactForm from '../components/ContactForm'

const contact = ({mytoast}) => {
  let k = <ContactForm mytoast={mytoast}/>
  const url = "/img/contactbg.jpg"
  return (
  <>
    <ParallaxScroll component={k} title={"Get in Touch"} bgUrl={url} fontSize={6}/>
  </>
  )
}
export default contact
