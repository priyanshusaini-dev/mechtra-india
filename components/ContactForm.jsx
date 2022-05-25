import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import Recaptcha from 'react-google-invisible-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';
import YourMap from "./YourMap.jsx"



const ContactForm = ({mytoast}) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const recaptcha = useRef(null);
  // const secretKey = process.env.REACT_APP_SECRET_KEY
  // const SITE_KEY = process.env.REACT_APP_SITE_KEY
  const [human, setHuman] = useState(false)

  // const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  // const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  // const USER_ID = process.env.REACT_APP_USER_ID


  const onSubmit = async data => {
    let token = await recaptcha.current.execute()
    
    let { name, email, subject, message } = data
    
    if (human) {
      reset({ name: "", email: '', subject: "", message: '' })
      
      mytoast("success")
      send(
        "service_apjl87v",
        "template_zue3ty3",
        data,
        "jmP0lpolAcoD51OmB"
        )
        .then(response => console.log('SUCCESS!', response.status, response.text))
        .catch(err => console.log('FAILED...', err));
        
    }
    else {
      mytoast("error")
    }
    
  };



  const links = [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.twitter.com",
    "https://www.gmail.com",
    "https://www.linkedin.com"
  ]



  return (
    <>
    <ToastContainer />
      <style jsx>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0a192f;
  background-image: url("/img/arabesque.png");
}

.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-shadow: 6px 7px 15px 1px rgba(0,0,0,0.4);
-moz-box-shadow: 6px 7px 15px 1px rgba(0,0,0,0.4);
box-shadow: 6px 7px 15px 1px rgba(0,0,0,0.4);
}

.contact-links, .contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}


.contact-links {
  background-color: #1f2e43;
  background:
    radial-gradient(
      circle at 55% 92%, #426691 0 12%, transparent 12.2%
    ), 
    radial-gradient(
      circle at 94% 72%, #426691 0 10%, transparent 10.2%
    ), 
    radial-gradient(
      circle at 20% max(78%, 350px), #263a53 0 7%, transparent 7.2%
    ), 
    radial-gradient(
      circle at 0% 0%, #263a53 0 40%, transparent 40.2%
    ), 
    #1f2e43;
  border-radius: 10px 0 0 10px;
}

.contact-form-wrapper {
  background-color: #1f2e43;
background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  border-radius: 0 10px 10px 0;
}

@media only screen and (max-width: 800px) {
  .contact-links, .contact-form-wrapper {
    width: 100%;
  }
  
  .contact-links {
    border-radius: 10px 10px 0 0;
  }
  
  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}

@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}

h2 {
  font-family: 'Arimo', sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(.95, 1);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
}

.link {
  margin: 10px;
  cursor: pointer;
}

img {
  width: 45px;
  height: 45px;
  filter: 
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #0006);
  transition: 0.2s;
  user-select: none;
}

img:hover {
  transform: scale(1.1, 1.1);
}

img:active {
  transform: scale(1.1, 1.1);
  filter: 
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #222)
    sepia(0.3);
}

.form-item {
  position: relative;
}

label, input, textarea {
  font-family: 'Poppins', sans-serif;
}

label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}

input, textarea {
  width: 100%;
  outline: 0;
  border: 1px solid var(--slate);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
  box-shadow: 3px 3px 8px -5px rgba(115,222,255,1);
}

input:focus+label, 
input:valid+label, 
textarea:focus+label, 
textarea:valid+label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: var(--mblue);
  top: -20px;
  transition: all .225s ease;
}


.submit-btn {
  background-color: #fd917e;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins",sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}

.submit-btn:hover {
  transform: scale(1.1, 1.1);
}

.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}

@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}

@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }
  
  .links {
    padding-top: 30px;
  }
  
  img {
    width: 38px;
    height: 38px;
  }
}
      `}</style>
      {/* <h2 className="text-xl my-4">Hey! We are looking forward to start a project with you!</h2> */}
      <section id="contact" className='relative mt-[-4rem]'>
        <div className="w-full bg-[#0c203d83]  my-4 flex justify-center">
          <div className="contact-box">
            <div className="contact-links">
              <h2>CONTACT</h2>
              <div className="links mt-5 text-white">
                <div className="link ">
                  <a href={links[0]}><i className="fa-brands hover:text-[#4267B2] fa-xl mx-2 fa-facebook-f"></i></a>
                </div>
                <div className="link">
                  <a href={links[1]}><i className="fa-brands hover:text-[#E1306C] fa-xl mx-2 fa-instagram"></i></a>
                </div>
                <div className="link">
                  <a href={links[2]}><i className="fa-brands hover:text-[#1DA1F2] fa-xl mx-2 fa-twitter"></i></a>
                </div>
                <div className="link">
                  <a href={links[3]}><i className="fa-brands hover:text-[#DB4437] fa-xl mx-2 fa-google-plus-g"></i></a>
                </div>
                <div className="link">
                  <a href={links[4]}><i className="fa-brands hover:text-[#006AFF] fa-xl mx-2 fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                  <input type="text" name="name" {...register("name")} required />
                  {errors.name && <span>This field is required</span>}
                  <label>Name*:</label>
                </div>
                <div className="form-item">
                  <input type="email" name="email" {...register("email")} required />
                  {errors.email && <span>This field is required</span>}
                  <label>Email*:</label>
                </div>
                <div className="form-item">
                  <input type="text" name="subject" {...register("subject")} required />
                  {errors.subject && <span>This field is required</span>}
                  <label>Subject*:</label>
                </div>
                <div className="form-item">
                  <textarea className='' name="message" {...register("message", { required: true })} required defaultValue={""} />
                  {errors.message && <span>This field is required</span>}
                  <label>Message*:</label>
                </div>

                <button type='submit' className="submit-btn">Send</button>
              </form>
                <Recaptcha
                  ref={recaptcha}
                  sitekey="6LcDxgggAAAAAFIJ7mCNDsQtycc5ym7s3iQlJd5c"
                  onResolved={() => setHuman(true)} />
            </div>
          </div>
        </div>
        <YourMap />

      </section>

    </>
  )
}

export default ContactForm

