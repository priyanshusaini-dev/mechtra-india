import React,{useRef} from 'react'
import Image from 'next/image'
// import ContactForm from './ContactForm'
import { Parallax } from "react-scroll-parallax";

const ParallaxScroll = ({img,component,title,bgUrl,fontSize}) => {

  const bgRef = useRef();

  return (
    <>
      <style jsx>{`
      .font{
        font-size: ${fontSize}rem;
      }
      @media only screen and (max-width: 600px) {
        .font {
          font-size: ${fontSize-2.5}rem;
        }
      }
      
      .tle:hover .pbg{
        background:var(--lightest-navy);

      }
   `}</style>

      <div className='flex flex-wrap justify-between '>

        <div className="w-[100%] relative top-[-3rem]  shadow-inner  tle">
          <Parallax speed={-20}>
            <div ref={bgRef} className='pbg'>
              <div className="w-full h-[20rem] cbg">
                <Image src={bgUrl} alt='contact-image' layout="fill" width={600} height={480} />
              </div>
            </div>
          </Parallax>

          <div className=" w-full absolute top-[6rem] md:top-[10rem] text-center">
            <h1 className=' w-full py-10 text-white font md:text-[{fontSize}rem]'><u>{title}</u></h1>
            {/* <h2 className="text-xl my-4">Hey! We are looking forward to start a project with you!</h2>
            <p className="text-center px-3 text-sm">We are a full service degital agenc in the hart of Delhi city Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium beatae eaque distinctio, eos sint exercitationem omnis reiciendis animi dolore cumque praesentium odit adipisci molestias magnam ipsum? Quas officia aliquam repellendus!</p> */}
          </div>
        </div>
      </div>
      <Parallax speed={20}>
        {component}
      </Parallax>
    </>
  )
}

export default ParallaxScroll