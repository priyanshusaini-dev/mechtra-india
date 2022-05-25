import React from 'react'
import InvestorCard from "../components/InvestorCard"
const OurInvestors = [
    {
        img:"/img/man1.jpeg",
        position:'Director',
        about:"lorem DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
    },
    {
        img:"/img/man2.jpg",
        position:'Director',
        about:"lorem DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
    },
    {
        img:"/img/man3.jpg",
        position:'Director',
        about:"lorem DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
    },
    {
        img:"/img/man4.jfif",
        position:'Director',
        about:"lorem DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
    },
]

const Investors = (props) => {
    return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-2xl font-3xl title-font font-bold mb-4 text-gray-100">OUR INVESTORS</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
              </div>
              <div className="flex flex-wrap -m-4">
                  {
                      OurInvestors.map((item,key)=>{
                          return <InvestorCard item={item} key={key} />
                      })
                  }
              </div>
          </div>
      </section>
    )
}

export default Investors