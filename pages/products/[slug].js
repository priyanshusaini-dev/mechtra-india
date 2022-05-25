import React from 'react'
import Error from "next/error";
import Image from "next/image";
const imageLoader = require("../../loader.js");
import { useRouter } from 'next/router'

const Slug = ({productItem}) => {
  const router = useRouter()
  const { slug } = router.query;
  var isItem = false;
  let myItem

//checking if product is aviable
for (const i of productItem) {
  let formatedUrl = i.title.split(" ").join("-").toLowerCase();
    if (formatedUrl == slug) {
      isItem = true;
      myItem=i
  }
}

  if (isItem) {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image loader={imageLoader} src={myItem.img} width={400} height={550}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-5xl title-font text-gray-500 tracking-widest">{myItem.title}</h2>
              <hr className='my-2 w-[70%] border-slate-500	'></hr>
              <h1 className="text-white-100 text-xl title-font font-medium mb-1">{myItem.category}</h1>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>   
            </div>
          </div>
        </div>
      </section>
  
    )
  }else{
    return <Error statusCode={404} />;
  }
}

export default Slug