import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='pt-[6rem]'>
      <Image
        src="/images/t14.jpg"
        alt="pic1"
        width={1600}
        height={900}
        className=" w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] "
      />


      <div className="flex justify-center text-nowrap items-center text-4xl py-3">
        <h1
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9), 0 -2px 0 rgba(0, 0, 0, 0)',
          }}
        >
          New Collections 
        </h1>
      </div>

      {/* First Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Product 1 */}
        <div id="col1" className="font-serif text-center">
          <Image
            src="/images/t4.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 2 */}
        <div id="col2" className="font-serif text-center">
          <Image
            src="/images/t10.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 3 */}
        <div id="col3" className="font-serif text-center">
          <Image
            src="/images/t11.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 4 */}
        <div id="col4" className="font-serif text-center">
          <Image
            src="/images/t12.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Product 5 */}
        <div id="col5" className="font-serif text-center">
          <Image
            src="/images/t6.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[19rem]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 6 */}
        <div id="col6" className="font-serif text-center">
          <Image
            src="/images/t3.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 7 */}
        <div id="col7" className="font-serif text-center">
          <Image
            src="/images/t7.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[40vh]"
          />
          <h1>Half Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1699.</p>
        </div>

        {/* Product 8 */}
        <div id="col8" className="font-serif text-center">
          <Image
            src="/images/t2.jpg"
            alt="pic2"
            width={300}
            height={60}
            className="my-3 mx-auto h-[37vh]"
          />
          <h1>Full Sleeves T-shirt</h1>
          <p className="text-gray-600">Rs 1799.</p>
        </div>
      </div>

    </div>
  )
}
