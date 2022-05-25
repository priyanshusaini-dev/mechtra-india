import React from 'react'
import Link from 'next/link';


const Card = (props) => {

    let formatedUrl = "products/" + props.item.title.split(" ").join("-").toLowerCase();
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 shadow-2xl bg-[#0a192f] border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.item.img} alt="Image" />
                <Link href={formatedUrl}><a>
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.item.category}</h2>
                        <h1 className="title-font text-lg font-medium text-white-200 mb-3">{props.item.title}</h1>
                        <p className="leading-relaxed mb-3">{props.item.description}</p>
                    </div>
                </a></Link>
            </div>
        </div>

    )
}

export default Card