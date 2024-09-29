'use client'
import { residentialCard } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import {motion} from "framer-motion"

interface ProjectCradProps {
  img: string;
  title: string;
  url: string
}

const imgVariant = {
  initial: { y: 0 },
  hover: {y: -5}
}

const ProjectCard = ({img, title, url}: ProjectCradProps) => {
  return (
    <div
      
      className='flex flex-col justify-center items-center gap-6 mb-16 '>
      <motion.div
        variants={imgVariant}
        initial="initial"
        whileHover="hover"
        transition={{duration:0.3}}
        className="">
      <Link href={url}>
      <Image
        src={img}
        alt={title}
        width={2035}
        height={1144}
        className='object-cover'
        />
        </Link>
      </motion.div>
      
      <Link href={url} className="font-bold hover:underline hover:text-orange duration-200">{title}</Link>
    </div>
  )
}

export default ProjectCard