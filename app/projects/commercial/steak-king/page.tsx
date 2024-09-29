import Image from "next/image"
import NextProjects from "@/components/NextProjects"

const SteakKingPage = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">STEAK KiNG</div>
        <p className='text-xs mb-40'>Address: Tseung Kwan O | Area: 680sqf | Completed Year: 2022</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-8 max-w-[500px] mt-12'>The brand STEAK KING not only sells products but also offers excellent service by adding seating areas in some stores for customers to enjoy their food. The design caters to customers' preference for an industrial style, and unique light fixtures were handcrafted by the customers themselves. This creates a strong contrast with the green surroundings outside the store.</p>
        <div className="">
          <Image
            src="/commercial/steak_king/steaking-01.jpg"
            alt='steak king'
            width={2420}
            height={1361}
              className='w-[95vw] mb-20 md:mb-32'
              quality={100}
            />
            <Image
            src="/commercial/steak_king/steaking-02.jpg"
            alt='steak king'
            width={2420}
            height={1361}
              className='w-[95vw] mb-20'
              quality={100}
            />
        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default SteakKingPage