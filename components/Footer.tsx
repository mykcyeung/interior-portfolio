import { socialMedia } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
// import { SocialIcon } from 'react-social-icons'

const d = new Date()
const year = d.getFullYear()

const Footer = () => {
  return (
    <div className='h-26 w-full flex flex-col items-center justify-between py-4 gap-4 '>
      {/* <div className="font-bold text-3xl">Jay Yeung</div> */}
      <div className="flex flex-row justify-center items-center gap-12">
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
              className='mx-2 mb-2'
              style={{ height: 36, width: 36 }}
              key={item.media}
            />
        ))} */}
      </div>
      <div className="font-extralight text-xs pb-8 ">Copyright © {year} Jay Yeung</div>
    </div>
  )
}

export default Footer