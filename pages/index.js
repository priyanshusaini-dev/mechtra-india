import Slider from '../components/Slider'
import Acard from '../components/Acard'
import Clients from '../components/Clients'
import KeyHighlight from '../components/KeyHighlight'
import Hero from '../components/Hero'
import GoodBox from '../components/GoodBox'

export default function Home() {
  return (
    <section>
        <Hero/>
        <br></br>
        <Acard/>
        <GoodBox/>
        <Clients/>
        <KeyHighlight/>
        <Slider/>
    </section>
  )
}
