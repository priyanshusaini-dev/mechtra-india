import React, { useRef } from 'react'
import { Parallax, ParallaxBanner } from "react-scroll-parallax";


const ParallaxScroll = ({  component, title, bgUrl,fgUrl, fontSize }) => {

  const background= {
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=' w-full'>
        <img src={bgUrl} alt="title" className='w-full' />
        </div>
      </div>
    ),
  };

  const headline= {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-bold">
          {title}
        </h1>
      </div>
    ),
  };

  const foreground= {
    image:fgUrl,
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay= {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <>
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[2/1] h-[70vh] md:h-[100vh] bg-gray-900"
    />
    <Parallax speed={20}>
       {component}
    </Parallax>
    </>
  );

}

export default ParallaxScroll