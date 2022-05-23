import React from 'react'
import Card from './Card'


const Products = ({productItem}) => {

    return (
        <div className='myBackground mt-[-6rem] pt-6'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            productItem.map((item,key)=>{
                                return<Card key={key} item={item}/>
                            })
                        }
                    </div>
                </div>
            </section>
            </div>

    )
}

export default Products