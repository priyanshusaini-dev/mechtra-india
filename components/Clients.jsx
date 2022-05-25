import React from 'react'
const imageLoader = require("../loader.js");
import Image from "next/image";
const Clients = () => {

    const clients = [
        "cleint1.png",
        "cleint0.png",
        "cleint2.png",
        "cleint3.png",
        "cleint5.png",
        "cleint6.png",
        "cleint4.png",
        "client9.png",
        "cleint7.png",
        "cleint8.png",
    ]

    return (
        <section className='flex w-full justify-center py-8 mt-11 mb-12 px-12 bg-[#0c203d83]'>
            <div className='flex flex-col justify-center items-center '>
                <div className="text-center my-7 py-3 w-72 flex flex-col justify-center items-center border-y-[1px] border-slate-600">
                    <h1 className='text-4xl font-libre'>OUR CLIENTS</h1>
                </div>
                <div className="flex flex-row justify-center flex-wrap gap-10">
                    {
                        clients.map((item, key) => {
                            return (<div className='w-32 aspect-auto' key={key}>
                                <Image loader={imageLoader} src={item} objectFit='contain' width={150} height={150} quality={1}/>
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients