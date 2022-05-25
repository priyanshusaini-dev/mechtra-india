import React from 'react'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='hero w-full h-[90vh] relative'>
            <style jsx>{`
                .hero{
                    background:url("/img/rev_home3.jpg") fixed center no-repeat;
                    background-size: cover;
                    animation: mymove 10s infinite;
                    animation-timing-function: cubic-bezier(0, 1.47, 0, 0.95);
                 }
                 .hero::after{
                     content:"";
                     position:absolute;
                     top:0;
                     left:0;
                     opacity: 0.4;
                     width:100%;
                     height:100%;
                     background:black;
                 }
                 .hero:hover::after{
                     content:"";
                     position:absolute;
                     top:0;
                     left:0;
                     opacity: 0;
                     width:0%;
                     height:0%;
                     background:transparent;
                 }
                @keyframes mymove {
                    0% {
                        background:url("/img/rev_home3.jpg") fixed center no-repeat;
                    }
                    50% {
                        background:url("/img/rev_home4.jpg") fixed center no-repeat;
                    }
                 }
                 .herobox:hover::after{
                    content:"";
                     position:absolute;
                     top:40%;
                     right:100%;
                     opacity: 1;
                     width:100%;
                     height:40%;
                     background:#F6BE3B;
                     transform:scale(1);
                 }
                 .herobox::after{
                    content:"";
                     position:absolute;
                     transform:scale(0);
                     top:40%;
                     right:100%;
                     opacity: 1;
                     width:100%;
                     height:40%;
                     background:#F6BE3B;
                     transition: all .3s  ease-in;;
                 }
                .herobox:hover{
                    color:white;
                    border:0px solid #F6BE3B;
                    -webkit-box-shadow: 1px 4px 24px 1px rgba(246,190,59,1);
                    -moz-box-shadow: 1px 4px 24px 1px rgba(246,190,59,1);
                    box-shadow: 1px 4px 24px 1px rgba(246,190,59,1);
                }
                .herobox{
                    -webkit-box-shadow: 0px 0px 00px 0px rgba(246,190,59,1);
                    -moz-box-shadow: 0px 0px 20px 0px rgba(246,190,59,1);
                    box-shadow: 0px 0px 00px 0px rgba(246,190,59,1);
                     transition: all .25s  ease-in;;
                     transition-delay:0.3s;
                }
                .name{
                    font-family: 'EB Garamond', serif;
                }
                .herobox:hover .name{
                    color:#F6BE3B;
                     transition: all .2.5s  ease-in;;
                     transition-delay:0.3s;
                }
                .herobox:hover .Explore{
                    background:#F6BE3B;
                     transition: all .3s  ease-in;;
                     transition-delay:0.2.5s;
                }
                .Explore:hover{
                    background:#ffeb3b;
                }
                `}</style>
                <div className="herobox absolute bottom-[9rem] border-4 p-6 m-2 border-white backdrop-blur shadow rounded max-w-[35rem] md:ml-16">
                   <h1 className=" left-10 text-[2rem] md:text-[3rem] z-10 ">Welcome To <br></br><span className='text-[#64ffda] text-[3.2rem] md:text-[5rem] name'>Mectra India</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium dignissimos est sunt modi ipsam, obcaecati quas inventore dolorem velit mollitia nam dicta alias aut vel quaerat totam nisi soluta!</p>
                    <Link href="/contact"><a><button className='bg-[#64ffda] m-3 text-black font-bold py-2 px-4 rounded Explore'>Explore</button></a></Link>
                    
                </div>
        </div>
    )
}

export default Hero