'use client'

import Image from 'next/image'
import Link from 'next/link'
import {navLinks} from "@/constants/index"
import { useEffect, useState } from 'react'
import { socialMedia } from '@/constants/index'
import { useRouter } from 'next/router'
// import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentPath, setCurrentPath] = useState('');
  // const router = useRouter();
  // const [projectsSelect, setProjectSelect] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     setCurrentPath(window.location.pathname)
      
  //   }
  // }, [])

  const handleNavOpen = () => {
    setIsOpen(prev => !prev)
  }

  // const handleProjectSelect = () => {
  //   setProjectSelect(prev => ! prev)
  // }

  return (
    <div className={`w-full h-20 shadow-xl fixed bg-white z-50`}>
      <div className="flex justify-between items-center h-full w-full px-8 sm:px-10 md:px-12 xl:px-20">
        <div className="text-orange font-extrabold text-3xl">
          
          <Link href="/">
            {/* <Image
              src="/icon.svg"
              alt='icon'
              width={45}
              height={45}
              priority
              className='cursor-pointer hover:scale-105 duration-300 transition-all'
            /> */}
            <div className="h-[40px] w-[40px] bg-orange rounded-full hover:scale-110 duration-300" />
          </Link>
        </div>
        {/* MENU SQUARE */}
        <div className='flex justify-center items-center transition-all'>
          <button
            onClick={handleNavOpen}
            className={`w-6 h-6 bg-unselect rounded-sm md:hidden hover:bg-orange hover:scale-110 duration-200 ${isOpen && " rotate-45 scale-110 bg-orange"}`}
          />

          {/* POPUP MENU */}
          <div
            className={`fixed top-0 w-[80vw] md:hidden h-screen bg-white p-10 ease-in duration-500 shadow-lg ${isOpen ? "left-0" : "left-[-100%]"} `}
            onClick={handleNavOpen}
          >
            <div className="font-bold text-2xl gap-24 flex flex-col justify-center mt-16">
            {navLinks.map(item => (
              <Link
                href={item.url}
                key={item.title}
                className='hover:underline'
              >
                {item.title}
              </Link>
            ))}
              {/* DROPDOWN MENU SOCIAL */}
              <div className="flex gap-8">
                {socialMedia.map(item => (
                  <Link href={item.url} key={item.media}>
                    <Image
                      src={item.img}
                      alt={item.media}
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
                {/* {socialMedia.map(item => (
                    <SocialIcon
                      network={item.media}
                      url={item.url}
                      bgColor='black'
                      className='mr-6'
                      style={{ height: 36, width: 36 }}
                      key={item.media}
                    />
                ))} */}
              </div>
            </div>
            
        </div>
        </div>
        {/* PROJECTS SELECTIONS */}
        
        {/* <div
          className={`fixed top-0 w-[60vw]  md:hidden h-screen ease-in duration-500 ${isOpen ? "left-0" : "left-[-100%]"}`}
          onClick={handleNavOpen}
        >
          <div className="flex flex-col justify-center items-start mt-[58vh] ml-14 gap-4 text-sm">
            <Link href="/projects/residence" className='hover:underline'>Residence</Link>
            <Link href="/projects/commercial" className='hover:underline'>Commercial</Link>
          </div>
        </div> */}
        
        
        {/* MENU */}
        <div className="z-40 bg-white hidden md:block gap-6 text-unselect">
          {navLinks.map(item => (
            <Link
              
              href={item.url}
              key={item.url}
              className={`ml-10 hover:text-black duration-200 hover:underline 
                ${item.url === item.url ? "text-black" : ""}
                `}
            >
              {item.title} 
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar