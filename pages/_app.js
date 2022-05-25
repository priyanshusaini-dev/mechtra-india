import Layout from '../components/Layout'
import React from 'react'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


function showToast(type) {
  if(type=="success"){
    toast.success('Message is successfully sent', {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }else{
    toast.error('Please, Resend. Human is not detected', {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}


  return (
      <Layout>
        <Component {...pageProps} productItem={productItem} mytoast={showToast} />
        <ToastContainer />
      </Layout>
  )
}

export default MyApp
