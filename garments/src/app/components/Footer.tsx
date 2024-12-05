import React from 'react'

export const Footer = () => {
  return (
    <div 
      className='text-gray-600 my-7 py-2 px-4 sm:px-8 md:px-12'  // Apply responsive padding
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9), 0 -2px 0 rgba(0, 0, 0, 0)', // Keep shadow as is
        textAlign: 'center',  // Center the text for better mobile presentation
      }}
    >
       <p>© 2024. All rights reserved.</p>
       <p>Contact: 📞 0313131313</p>
       <p>Email: ✉ rr@gmail.com</p>
    </div>
  )
}
