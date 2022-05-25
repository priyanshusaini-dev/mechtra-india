import React from 'react'
import Link from 'next/link';

const GoodBox = () => {
    return (
        <div className='flex justify-center w-full p-7 bg-[#0c203d83]'>
            <style jsx>{`
            .GoodBox{
                background: url('/img/h5_img2-removebg-preview.png') center center/cover no-repeat;
                aspect-ratio: 2/1;
                height:100%;
                transform:translateX(4rem);
                transition:0.3s ease-in;
            }
            .gb-wrappar:hover .GoodBox{
                transform:translateX(1rem);
            }
            .gb-btn{
                transition:0.2s ease-in;
            }
        `}</style>
            <div className='md:h-[20rem] h-[10rem] w-auto bg-[#57cbff] p-3 overflow-hidden gb-wrappar relative rounded'>
                <div className="GoodBox">
                </div>
                <div className='text-cenhter md:p-5 p-1 text-black m-4 my-6 relative bottom-[10rem] md:bottom-[19rem] w-[28rem]'>
                    <h3 className='md:text-3xl text-md font-bold'>Likelife Audio {"&"} Secure Fit</h3>
                    <p className='md:my-5 my-2 md:text-lg text-xs'>Engineered for your best workout yet</p>
                    <Link href='/products'><a><button className='bg-white rounded hover:bg-[#0092FF] p-2 md:p-3 md:px-10 px-8 my-4 text-lg font-bold md:my-10 gb-btn'>SHOP NOW</button></a></Link>
                </div>
            </div>
        </div>
    )
}

export default GoodBox