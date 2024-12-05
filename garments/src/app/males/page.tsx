import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (

    
    <div className='pt-[9rem]'>

        <div className='right-side float-right mr-9 '>
    <Image src={"/images/t15.jpg"} alt='img1' width={600} height={500}/>

  </div>

    <div className='left-side float-left pt-[5rem] '>

<h1 id='male-s' className='text-5xl  font-bold'><i>The Perfect Men,s T-Shirt</i> </h1>
<p className='font-semibold  ml-7 pt-[4rem]'>Our mens t-shirt collection combines comfort, quality, and style for everyday wear. <br /> Made from soft, breathable cotton, these tees are designed to keep you cool and comfortable all day long. Whether you are <br /> dressing up for a casual outing or keeping it relaxed at home, our t-shirts provide the perfect fit and timeless look. <br /> Available in a range of colors and sizes, each shirt features a classic design that complements <br /> any wardrobe. Upgrade your essentials with a t-shirt that offers both style and versatility. </p>


<Link href={"/contact"}><button className='my-6 underline text-orange-600 text-3xl ml-9 hover:text-black'>order now</button></Link>
    </div>

   <p className=' mx-3 font-serif'> Elevate Your Style with Our Premium Branded T-Shirts
Step up your wardrobe game with our collection of branded men,s t-shirts. Crafted from the finest fabrics, each tee combines luxury, comfort, and style to give you the perfect look for any occasion.

Whether you are hitting the streets or lounging at home, our exclusive designs ensure you stand out in both quality and fashion. Choose from a range of classic and trendy styles, each bearing the mark of authenticity and premium craftsmanship.</p>

<div className='flex justify-center font-serif'>
      <button id='male-s' className=' text-4xl text-white my-6 rounded-[20px] px-7 bg-red-700  py-6 '><i>discount offer</i></button>

      
      </div>

      <h1 id="male-s" className="text-2xl text-white my-1 flex justify-center rounded-[20px] px-7 bg-red-700 w-[20rem]  sm:w-[20rem] sm:px-5 sm:ml-[20rem] sm:text-lg sm:text-start">
  <i>biggest sale UPTO 80%</i>
</h1>


   

   
   
      {/* First Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Product 1 */}
        <div id="col1" className="font-serif text-center">
          <Image
            src="/images/t17.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 2600.</p>
        </div>

        {/* Product 2 */}
        <div id="col2" className="font-serif text-center">
          <Image
            src="/images/t18.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 1499.</p>
        </div>

        {/* Product 3 */}
        <div id="col3" className="font-serif text-center">
          <Image
            src="/images/t19.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 1999.</p>
        </div>

        {/* Product 4 */}
        <div id="col4" className="font-serif text-center">
          <Image
            src="/images/t20.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 1899.</p>
        </div>
      </div>




      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Product 5 */}
        <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t21.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 2800.</p>
        </div>

        {/* Product 6 */}
        <div id="col6" className="font-serif text-center">
          <Image
            src="/images/t22.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 2500.</p>
        </div>

        {/* Product 7 */}
        <div id="col7" className="font-serif text-center">
          <Image
            src="/images/t23.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 3099.</p>
        </div>

        {/* Product 8 */}
        <div id="col8" className="font-serif text-center">
          <Image
            src="/images/t24.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[37vh]"
          />
          <h1>Full Sleeves T-shirt</h1>
          <del className=''>5000</del>
          <p className="text-gray-600">Rs 2099.</p>
        </div>
      </div>

      <h1 className='text-2xl font-semibold my-6 mx-2 text-orange-500 '>Limited Time Offer: Get 20% Off on All Men,s T-Shirts!</h1>
<p className='mx-2 my-4'>Do not miss out on our exclusive discount! For a limited time only, enjoy 20% off our entire men,s t-shirt collection. Whether you are looking for a classic, casual style or something more trendy, our high-quality, comfortable tees are perfect for any occasion.

Hurry, this offer would not last long! Shop now and upgrade your wardrobe with the perfect t-shirt at an unbeatable price.

Why You will Love Our T-Shirts:
Soft, breathable cotton fabric for all-day comfort
Versatile styles that fit every occasion
Available in a variety of colors and sizes
Timeless designs that complement any look</p>

<p className='mx-2 text-orange-500 text-2xl font-semibold'>Shop now and save big before it,s too late!</p>

<h1 id='male-s' className='text-3xl mt-5 flex justify-center  font-bold'><i>explore more</i> </h1>



      <Image className='w-full h-[50vh] mt-4' src={"/images/t8.webp"} alt='explore' width={500} height={500}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-4 gap-4">
        
        <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t26.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>colorfull T-shirt</h1>
          <del className=''>3000</del>
          <p className="text-gray-600">Rs 2800.</p>
        </div>
        <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t27.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>valvet T-shirt</h1>
          <del className=''>3000</del>
          <p className="text-gray-600">Rs 2800.</p>
        </div> <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t28.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>loan T-shirt</h1>
          <del className=''>3000</del>
          <p className="text-gray-600">Rs 2800.</p>
        </div> <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t29.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>black & white T-shirt</h1>
          <del className=''>3000</del>
          <p className="text-gray-600">Rs 2800.</p>
        </div>

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
            <p className="leading-relaxed mb-5">Stay bold, stay unique wear your vibe....</p>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">female t-shirts</h1>
            <p className="leading-relaxed mb-5">Effortlessly chic, always confident just like you..</p>
           
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