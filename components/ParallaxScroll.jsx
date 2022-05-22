import React,{useRef} from 'react'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import { Parallax } from "react-scroll-parallax";

const ParallaxScroll = () => {

  const bgRef = useRef();

  function hoverIn(e){
    console.log(bgRef)
    bgRef.current.style.background = "#112240"
  }
  function hoverOut(e){
    bgRef.current.style.background = "#0a192f"
  }

  return (
    <>
      <style jsx>{`
      .bg{
        background: var(--navy);
        position: relative;
        border-radius: var(--border-radius);
      }
      .mbg{
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: var(--transition);
      }
      .mbg:hover{
        filter:none;
      }
      .bg:hover{
        background:var(--light-navy);
      }
   `}</style>

      <div className='flex flex-wrap justify-between '>

        <div className="w-[100%] relative top-[-3rem]  shadow-inner ">
          <Parallax speed={-20}>
            <div ref={bgRef} className='bg'>
              <div className="w-full h-[20rem] mbg">
                <Image src="/img/contactbg.jpg" alt='contact-image' layout="fill" width={600} height={480} />
              </div>
            </div>
          </Parallax>
          <div className=" w-full absolute top-[6rem] md:top-[10rem] text-center" onMouseOver={hoverIn} onMouseOut={hoverOut}>
            <h1 className=' w-full py-10 text-white text-[4rem] md:text-[6rem]'><u>Get in Touch</u></h1>
            {/* <h2 className="text-xl my-4">Hey! We are looking forward to start a project with you!</h2>
            <p className="text-center px-3 text-sm">We are a full service degital agenc in the hart of Delhi city Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium beatae eaque distinctio, eos sint exercitationem omnis reiciendis animi dolore cumque praesentium odit adipisci molestias magnam ipsum? Quas officia aliquam repellendus!</p> */}
          </div>
        </div>
      </div>
      <Parallax speed={10}>
        <ContactForm />
      </Parallax>
    </>
  )
}

export default ParallaxScroll