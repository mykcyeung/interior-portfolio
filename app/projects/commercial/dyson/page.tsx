import Image from "next/image"
import NextProjects from "@/components/NextProjects"

const DysonPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">dyson</div>
        <p className='text-xs mb-36'>Address: J Select Pop-corn | Year Completed: 2023</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>The well-known brand dyson often sets up booths in large shopping malls in Hong Kong, sometimes even setting up pop-up stores. Designers not only need to follow dyson&apos;s design guidelines but also strictly adhere to equipment requirements.</p>
        <div className="">
          <Image
            src="/commercial/dyson/dyson-01.png"
            alt='dyson'
            width={1589}
            height={893}
              className='w-[95vw] mb-20 md:mb-32'
              quality={100}
            />
            <Image
            src="/commercial/dyson/dyson-02.png"
            alt='dyson'
            width={2875}
            height={1617}
              className='w-[95vw] mb-20'
              quality={100}
            />

            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
            <Image
            src="/commercial/dyson/dyson-03.png"
            alt='dyson'
            width={972}
            height={1090}
              className='w-[70vw] lg:w-[45vw] mb-20 lg:mr-12'
              quality={100}
              />
              <p className="text-xs">Not only use AutoCAD to present floor plans, but also utilize 3D rendering to display designs, making it easier for clients to understand the details and reducing the chances of misunderstanding during construction.</p>
            </div>

            {/* <Image
            src="/commercial/dyson/dyson-06.png"
            alt='dyson'
            width={1600}
            height={1205}
              className='w-[95vw] mb-20'
              quality={100}
            /> */}


            <div className=" flex flex-col jc items-center">
            <p className='text-xs mb-12'>Address: J Select Pop-corn | Year Completed: 2023</p>
            
            <Image
            src="/commercial/dyson/dyson-08.png"
            alt='dyson'
            width={1041}
            height={657}
              className='w-[95vw] mb-20'
              quality={100}
            />
            
            <Image
            src="/commercial/dyson/dyson-04.png"
            alt='dyson'
            width={2875}
            height={1617}
              className='w-[95vw] mb-20'
              quality={100}
            />

            <Image
            src="/commercial/dyson/dyson-05.png"
            alt='dyson'
            width={2875}
            height={1617}
              className='w-[95vw] mb-20'
              quality={100}
            />
            </div>
            

        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default DysonPage