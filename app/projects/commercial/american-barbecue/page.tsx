import Image from "next/image"
import NextProjects from "@/components/NextProjects"

const AmericanBarbecue = () => {
  return (
    <div className='screen'>
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mt-60 lg:mb-6 mt-52 mb-4">American Barbecue</div>
        <p className='text-xs mb-36'>Address: Wan Chai, Hong Kong | Year Completed: -</p>

        {/* HORIZONTAL LIVING */}
        <div className="flex flex-col items-center">
        <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>This is an F&B proposal for Joyce Wang Studio.The restaurant is located in Wan Chai, Hong Kong, and will be led by a renowned chef specialising in American barbecue and grilled comfort food, presented in a more refined and elevated style.<br/><br/>The venue will have a total seating capacity of approximately 75–80 guests, including both dining and bar seating.<br/><br/>The restaurant is designed to be a lively and welcoming space, where guests can enjoy good food, drinks, and a relaxed social atmosphere.
</p>
          <div className="flex flex-col items-center">
            <Image
            src="/commercial/american_barbecue/jay_joycewang.jpg"
            alt='jay_joycewang'
            width={2559}
            height={335}
              className='w-[20vw] mb-20 md:mb-10'
              quality={100}
            />
          <Image
            src="/commercial/american_barbecue/american_barbecue_01.jpg"
            alt='american_barbecue'
            width={1589}
            height={893}
              className='w-[95vw] mb-20 md:mb-32 items-center justify-center'
              quality={100}
            />

            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
             <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>The design takes inspiration from a fireplace, creating a warm and inviting feel.
The space has a darker tone, with red accents adding warmth and energy throughout.
Raw metal and industrial details bring in a bold, edgy character, while a mix of materials helps keep the overall look balanced and comfortable.<br/><br/>
The bar area at the centre of the restaurant becomes the main visual focus.
Subtle ceiling lights are designed to mimic the sparkle of fire, giving off a soft glow that warms the space and makes it feel more relaxed and welcoming.

</p> 
            </div>

            
            

            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
            <Image
            src="/commercial/american_barbecue/american_barbecue_extract.jpg"
            alt='american_barbecue_extract'
            width={972}
            height={1090}
              className='w-[70vw] lg:w-[45vw] mb-20 lg:mr-12'
              quality={100}
              />
              <p className="text-xs">I extracted various design elements from the images, including colors, materials, and the overall vibe.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
              <p className="text-xs">I placed the kitchen and toilets at the back of the restaurant, which is the most practical layout.<br/><br/>
The bar is positioned at the centre and becomes the main focal point of the space.
The tables and seating are designed to be flexible and combinable, allowing the layout to adapt to different group sizes and needs.<br/><br/>
At the entrance, I plan to create an arched walkway, which helps reduce direct views from outside and adds a sense of mystery and anticipation as guests enter the restaurant.
</p>
            <Image
            src="/commercial/american_barbecue/american_barbecue_layout.jpg"
            alt='american_barbecue_layout'
            width={972}
            height={1090}
              className='w-[70vw] lg:w-[45vw] mb-20 lg:mr-12'
              quality={100}
              />
              
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
            
            
            <Image
            src="/commercial/american_barbecue/american_barbecue_sketch.jpg"
            alt='american_barbecue_sketch'
            width={1041}
            height={657}
              className='w-[95vw] mb-20'
              quality={100}
            />
            
            
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
             <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>This hand sketch shows the detailed design and structure of the bar counter.
A marble countertop is paired with copper details and a metal frame, creating a rugged yet refined industrial look.<br/><br/>
The hand-drawn style also gives the design a more artistic and authentic feel.


</p> 
            </div>


            <div className=" flex flex-col jc items-center">
            
            
            <Image
            src="/commercial/american_barbecue/american_barbecue_material.jpg"
            alt='american_barbecue_material'
            width={1041}
            height={657}
              className='w-[95vw] mb-20'
              quality={100}
            />
            
            
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mb-40">
             <p className='text-xs md:mb-32 mb-28 max-w-[500px] mt-12'>Material selection: using red tones as the main color, with other materials and colors added to balance the look and avoid a monotonous feel.


</p> 
            </div>

        </div>
 
        </div>
        
      <NextProjects />
      </div>
    </div>
  )
}

export default AmericanBarbecue