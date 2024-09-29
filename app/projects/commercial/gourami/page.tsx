import Image from "next/image"
import NextProjects from "@/components/NextProjects"

const GouramiPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">Gourami</div>
        <p className='text-xs mb-40'>Address: Yuen Long | Area: 550sqf | Year Completed: 2019</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-16 max-w-[500px] mt-12'>This Hong Kong sportswear brand features an open-concept storefront to attract more customers, allowing them to have a full view of the brand's products. Despite the limited space, the store remains fully functional.</p>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/commercial/gourami/gourami-01.png"
            alt='gourami'
            width={2875}
            height={1617}
              className='w-[95vw] mb-12 md:mb-32'
              quality={100}
            />
            <Image
            src="/commercial/gourami/gourami-04.png"
            alt='gourami'
            width={1600}
            height={1070}
              className='w-[95vw] mb-14 md:mb-24'
              quality={100}
            />

            <p className='text-xs max-w-[500px] mb-14 md:mb-24'>In addition to 3D rendering, designers also present floor plans and elevation drawings, providing more detailed information for the project. This not only reduces unnecessary errors during construction but also helps minimize costs.
              
            </p>


          <Image
            src="/commercial/gourami/gourami-03.png"
            alt='gourami'
            width={1600}
            height={1280}
              className='w-[95vw] mb-14 md:mb-12'
              quality={100}
            />
            <p className='text-xs max-w-[500px] mb-24'>
              Of course, there are also other shop drawings to ensure the overall progress of the project runs more smoothly.
            </p>
        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default GouramiPage