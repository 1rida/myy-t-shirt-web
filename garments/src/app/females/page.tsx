import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' pt-[6rem]'>
      <Image
        className='h-[60vh] w-screen '
        src={"/images/t30.jpg"}
        alt='female'
        height={500}
        width={1350}
      />

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-black w-1/2 px-4 sm:px-8 md:left-10 md:w-1/2">
         <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold mb-4">
          <i>Empower Your Style</i>
        </h1>
        <p className="text-sm sm:text-lg md:text-lg font-medium mb-6">
          Explore our collection of T-shirts designed for women who are confident, bold, and unapologetically themselves. Wear the style that makes you feel unstoppable.
        </p>

        { <h1 id="male-s" className="text-sm sm:text-lg md:text-2xl text-white mt-5 md:mt-9 flex justify-center rounded-[20px] px-7 bg-red-700 w-[18rem] sm:w-[20rem] sm:px-5 sm:ml-0 sm:text-center md:text-start mx-auto md:ml-[5rem]">
          <i>biggest sale UPTO 80%</i>
        </h1> }

         <Link href={"/contact"}><button className='font-serif text-xl sm:text-3xl mt-6 sm:mt-9  underline hover:text-gray-600 w-full sm:w-auto text-center'>
          BUY NOW
        </button> </Link> 
      </div>

      <div className='px-3 py-4'>
        <h1 className='text-2xl font-serif  py-2 text-orange-600 '>Empower Your Wardrobe with Our Trendy Women T-Shirts</h1>
        <p>Discover the perfect blend of comfort, style, and confidence with our exclusive collection of women t-shirts. Whether you are dressing for a casual day out or looking to elevate your everyday look, our t-shirts are designed to make you feel unstoppable. <br />



<b>Premium Fabric:</b> <br /> Soft, breathable, and gentle on the skin, our t-shirts are made from high-quality cotton blends for a comfortable fit all day long. <br />
<b>Stylish & Versatile:</b> <br /> From classic solids to trendy prints, our collection features versatile designs that can easily be paired with jeans, skirts, or shorts for a chic, effortless look. <br />
<b>Perfect Fit:</b> <br /> With a range of sizes and tailored cuts, you’ll find a perfect fit that flatters every body shape.
Durable & Long-lasting: Designed to withstand everyday wear, our t-shirts retain their color and shape, wash after wash. <br />
<b>Why You will Love It:</b> <br />

Show off your individuality with unique designs that represent your bold, confident style.
Embrace your comfort without sacrificing style, with a variety of necklines, sleeve lengths, and silhouettes to choose from.
Perfect for layering or wearing solo, these t-shirts are an essential part of any wardrobe.
</p>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 bg-no-repeat">

<div className="flex flex-col items-center">
  <div className="gif w-[250px] h-[250px] bg-no-repeat bg-cover mb-2"></div>
  <h1 className="text-xl sm:text-2xl md:text-2xl text-red-700 font-bold underline mx-4 sm:mx-6 md:mx-0">Sale</h1>
  <del className="text-gray-600 mx-4 sm:mx-6 md:mx-0 my-1">2500</del>
  <h1 className="font-serif text-xl sm:text-2xl md:text-xl mx-4 sm:mx-6 md:mx-0">1800</h1>
</div>

<div className="flex flex-col items-center">
  <div className="gif1 w-[250px] h-[250px] bg-no-repeat bg-cover mb-2"></div>
  <h1 className="text-xl sm:text-2xl md:text-2xl text-red-700 font-bold underline mx-4 sm:mx-6 md:mx-0">Sale</h1>
  <del className="text-gray-600 mx-4 sm:mx-6 md:mx-0 my-1">2500</del>
  <h1 className="font-serif text-xl sm:text-2xl md:text-xl mx-4 sm:mx-6 md:mx-0">1800</h1>
</div>

<div className="flex flex-col items-center">
  <div className="gif2 w-[250px] h-[250px] bg-no-repeat bg-cover mb-2"></div>
  <h1 className="text-xl sm:text-2xl md:text-2xl text-red-700 font-bold underline mx-4 sm:mx-6 md:mx-0">Sale</h1>
  <del className="text-gray-600 mx-4 sm:mx-6 md:mx-0 my-1">2500</del>
  <h1 className="font-serif text-xl sm:text-2xl md:text-xl mx-4 sm:mx-6 md:mx-0">1800</h1>
</div>

<div className="flex flex-col items-center">
  <div className="gif3 w-[250px] h-[250px] bg-no-repeat bg-cover mb-2"></div>
  <h1 className="text-xl sm:text-2xl md:text-2xl text-red-700 font-bold underline mx-4 sm:mx-6 md:mx-0">Sale</h1>
  <del className="text-gray-600 mx-4 sm:mx-6 md:mx-0 my-1">2500</del>
  <h1 className="font-serif text-xl sm:text-2xl md:text-xl mx-4 sm:mx-6 md:mx-0">1800</h1>
</div>

</div>

 <h1 id='male-s' className='text-3xl mt-5 flex justify-center  font-bold'><i>explore more</i> </h1>

<div className='flex justify-center font-serif'>
      <button id='male-s' className=' text-4xl text-white my-6 rounded-[20px] px-7 bg-red-700  py-6 '><i>get pair t-shirt</i></button>

      
      </div> 

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">

  <div id="col5" className="font-serif text-center">
    <Image
      src="/images/t31.jpg"
      alt="pic2"
      width={300}
      height={60}
      className="my-3 mx-auto h-[19rem] sm:h-[22rem] md:h-[19rem] object-cover"
    />
    <h1 className="text-lg sm:text-xl md:text-lg font-semibold mt-2">black pair T-shirt</h1>
    <del className='text-gray-500'>5000</del>
    <p className="text-gray-600 text-xl mt-1">Rs 2800</p>
  </div>

  <div id="col6" className="font-serif text-center">
    <Image
      src="/images/t32.jpg"
      alt="pic2"
      width={300}
      height={60}
      className="my-3 mx-auto h-[40vh] sm:h-[30vh] md:h-[40vh] object-cover"
    />
    <h1 className="text-lg sm:text-xl md:text-lg font-semibold mt-2">yellow pair T-shirt</h1>
    <del className='text-gray-500'>5000</del>
    <p className="text-gray-600 text-xl mt-1">Rs 2500</p>
  </div>

  <div id="col7" className="font-serif text-center">
    <Image
      src="/images/t33.jpg"
      alt="pic2"
      width={300}
      height={60}
      className="my-3 mx-auto h-[40vh] sm:h-[30vh] md:h-[40vh] object-cover"
    />
    <h1 className="text-lg sm:text-xl md:text-lg font-semibold mt-2">green pair T-shirt</h1>
    <del className='text-gray-500'>5000</del>
    <p className="text-gray-600 text-xl mt-1">Rs 3099</p>
  </div>

  <div id="col8" className="font-serif text-center">
    <Image
      src="/images/t34.jpg"
      alt="pic2"
      width={400}
      height={90}
      className="my-3 mx-auto h-[37vh] sm:h-[30vh] md:h-[37vh] object-cover"
    />
    <h1 className="text-lg sm:text-xl md:text-lg font-semibold mt-2">black pair T-shirt</h1>
    <del className='text-gray-500'>5000</del>
    <p className="text-gray-600 text-xl mt-1">Rs 2099</p>
  </div>

  <h1 className="text-2xl text-orange-600 font-bold underline px-2 py-2 text-center sm:text-3xl">
    you can get more colors and designs!
  </h1>

</div> 


     <section  className="text-gray-600 body-font">
  <div id='male-s' className="container px-5 py-8 mt-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          </div>
          <div className="flex-grow ">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">male t-shirt</h1>
            <p className="leading-relaxed mb-5">Stay bold, stay unique wear your vibe...</p>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">female t-shirts</h1>
            <p className="leading-relaxed mb-5">Effortlessly chic, always confident just like you...</p>
           
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
         
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">kids t-shirts</h1>
            <p className="leading-relaxed mb-5">Adventure ready and fun perfect for every little explorer...</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 


    </div>
  )
}

export default page
