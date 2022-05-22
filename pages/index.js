import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'

export default function Home() {
  // console.log("first")
  return (
    <div className={styles.container} >
      
        <h1 className={styles.title} >
          Welcome to Next.js!
        </h1>

        <p className={styles.description} >
          Get started with{' '}{"<Priyanshu Saini/>"}
        </p>
        <br></br>
        <Slider/>
        {/* <div className="h-[50rem]"></div> */}
    </div>
  )
}
