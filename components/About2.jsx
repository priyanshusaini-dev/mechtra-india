import React from 'react'
import Image from 'next/image';

const About2 = () => {
  return (
    <div className="myBackground px-10 mt-[-6rem]">
      <div className="flex w-full justify-between gap-5 my-10">
        <div className="text-justify w-full md:w-[50%]">
          <h2 className="text-5xl m-3">Our Vision</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quisquam, nemo inventore earum qui cumque illum veniam facilis, repellendus, sequi deleniti laboriosam! Obcaecati vero assumenda molestiae maiores modi expedita earum.
            Enim,<br/>
            vitae tempora magnam eaque neque minima nisi, porro eum, vero ut officia autem quae atque excepturi. Omnis sed magni, eaque eum recusandae, culpa iure vero laborum ipsam cumque ipsa!
            Voluptas animi quidem molestias possimus a officiis laudantium m<br/>
            ollitia illum optio, omnis qui ullam? Quisquam, ipsam voluptate saepe sed quia repellat incidunt reprehenderit nemo. Dolore aperiam perspiciatis facere in fuga!  </p>
        </div>
        <div className="w-full md:w-[50%] mypbg">
          <div className="mycbg shadow-lg">
            <Image src="/img/about1.jpg" width={1800} height={1200} alt="about" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-5 my-10">
        <div className="w-full md:w-[50%] mypbg">
          <div className="mycbg shadow-lg">
            <Image src="/img/about2.jpg" width={1800} height={1200} alt="about" />
          </div>
        </div>
        <div className="text-justify w-full md:w-[50%]">
          <h2 className="text-5xl m-3">Our Approch</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quisquam, nemo inventore earum qui cumque illum veniam facilis, repellendus, sequi deleniti laboriosam! Obcaecati vero assumenda molestiae maiores modi expedita earum.
            Enim,<br/>
            vitae tempora magnam eaque neque minima nisi, porro eum, vero ut officia autem quae atque excepturi. Omnis sed magni, eaque eum recusandae, culpa iure vero laborum ipsam cumque ipsa!
            Voluptas animi quidem molestias possimus a officiis laudantium m<br/>
            ollitia illum optio, omnis qui ullam? Quisquam, ipsam voluptate saepe sed quia repellat incidunt reprehenderit nemo. Dolore aperiam perspiciatis facere in fuga!  </p>
        </div>
      </div>
      <div className="flex w-full justify-between gap-5 my-10">
        <div className="text-justify w-full md:w-[50%]">
          <h2 className="text-5xl m-3">Our Process</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quisquam, nemo inventore earum qui cumque illum veniam facilis, repellendus, sequi deleniti laboriosam! Obcaecati vero assumenda molestiae maiores modi expedita earum.
            Enim,<br/>
            vitae tempora magnam eaque neque minima nisi, porro eum, vero ut officia autem quae atque excepturi. Omnis sed magni, eaque eum recusandae, culpa iure vero laborum ipsam cumque ipsa!
            Voluptas animi quidem molestias possimus a officiis laudantium m<br/>
            ollitia illum optio, omnis qui ullam? Quisquam, ipsam voluptate saepe sed quia repellat incidunt reprehenderit nemo. Dolore aperiam perspiciatis facere in fuga!  </p>
        </div>
        <div className="w-full md:w-[50%] mypbg">
          <div className="mycbg shadow-lg">
            <Image src="/img/our-process2.jpg" width={1800} height={1200} alt="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2