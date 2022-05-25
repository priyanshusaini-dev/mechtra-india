import Link from "next/link";
import { React } from 'react';

function Acard() {
    return (
        <section className="py-8 mt-11 mb-12 bg-[#0c203d83] flex w-full justify-center" >
            <div className="flex flex-col md:w-[30%] w-[90%] justify-center text-center">
                <div className="my-4">
                    <h1 className="text-4xl font-libre">WHO WE ARE</h1>
                </div>
                <div className="mb-12 leading-6">
                    <p>Mectra India is a leading Tier 1 Supplier of Automotive Components to leading Original Equipment Manufacturers (OEMs) globally.</p>
                </div>
                <div className="flex mx-auto text-black bg-[#64ffda] border-0 py-2 px-8 transition ease-in-out duration-200 focus:outline-none hover:bg-[#57cbff] rounded text-lg w-fit">
                    <Link href='/about'  className="">Read More</Link>
                </div>
            </div>
        </section>
    )
}
export default Acard