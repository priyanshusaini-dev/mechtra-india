import React from 'react'
import ParallaxScroll from '../../components/ParallaxScroll'
import Products from '../../components/Products'

const products = ({productItem}) => {
  let k = <Products productItem={productItem} />
  const url = "/img/productbg.jpg"
  return (
    <>
      <ParallaxScroll component={k} title={"Product"} bgUrl={url} fontSize={6} />
    </>
  )
}
export default products