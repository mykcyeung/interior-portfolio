'use client'

import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import Contact from "@/components/Contact";
import { socialMedia } from '@/constants'
import { SocialIcon } from 'react-social-icons'

const ContactPage = () => {
  return (
    <div className="screen flex flex-col justify-start items-start">
      <Contact />
      {/* <div className="font-bold text-3xl">Jay Yeung</div> */}
      
    </div>
  )
  
  // const [success, setSuccess] = useState(false)
  // const [error, setError] = useState(false)
  // const form = useRef<HTMLFormElement | null>(null);

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
  //       form.current as HTMLFormElement, {
  //       publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
  //     })
  //     .then(
  //       () => {
  //         setSuccess(true);
  //         form.current?.reset();
  //       },
  //       (error) => {
  //         setError(true);
  //         console.log(error.text);
  //       },
  //     );
  // };


  // return (
  //   <div className='h-screen flex justify-center items-center'>
  //     {/* CARD CONTAINER*/}
  //     <div className="flex flex-col lg:flex-row lg:items-center items-start justify-center gap-16 lg:gap-24">
  //       {/* NAME */}
  //       <div className="flex gap-4 lg:gap-6 items-center justify-center">
  //         <div className="font-extrabold text-2xl  lg:text-4xl">Jay Yeung</div>
  //         <Link href="https://wa.me/447826182904">
  //            <IoLogoWhatsapp style={{height: 30, width:30}} />
  //         </Link>
  //       </div>

  //       {/* DIVIDE */}
  //       <div className="lg:hidden w-full h-[2px] bg-unselect rounded-md" />
        

  //       {/* MESSAGE */}
  //       <form
  //         ref={form}
  //         onSubmit={sendEmail}
  //         className="flex flex-col gap-2">
  //         <div className="font-bold">Hi Jay</div>
  //         <textarea
  //           rows={6}
  //           placeholder='How are you today'
  //           className='resize-none min-h-[30vh] px-1 py-2 rounded-sm'
  //           name="user_message"
  //         />
  //         <input
  //           type="text"
  //           placeholder="What's your email"
  //           className="text-sm px-1 py-2 rounded-sm"
  //           name="user_email"
  //         />
  //         <button className="underline mt-4 font-bold self-start flex justify-center items-center gap-2">
  //           Send <span><IoMdMail /></span>
  //         </button>
  //         {success && <div className="text-sm mt-6">Thanks for getting in touch!
  //           <br />
  //           Will get back to you soon!</div>}
  //         {error && <div className="text-sm mt-6">
  //           Oops...Something went wrong!
  //           <br />
  //           Have you checked your email address?
  //         </div>}
  //       </form>
  //     </div>
  //   </div>
  // )
}

export default ContactPage