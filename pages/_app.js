import Layout from '../components/Layout'
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  const productItem = [
    {
        img:"/img/robot.jpg",
        category:"2 wheeler",
        title:"Fresh Robot",
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
    },
    {
        img:"/img/robot.jpg",
        category:"2 wheeler",
        title:"Fresh Robot",
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
    },
    {
        img:"/img/robot.jpg",
        category:"2 wheeler",
        title:"Fresh Robot",
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
    },
    {
        img:"/img/robot.jpg",
        category:"2 wheeler",
        title:"Fresh Robot",
        description:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
    },
]
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} productItem={productItem} />
      </Layout>
    </ParallaxProvider>
  )
}

export default MyApp
