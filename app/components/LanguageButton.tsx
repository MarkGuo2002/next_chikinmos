import React from 'react'
import Image from 'next/image'
import english from '/public/images/english.png';
import spanish from '/public/images/spanish.png';



const LanguageButton = () => {
  return (
    <div className='language-button md:mr-10  flex gap-2 items-center "bg-white hover:bg-chikCaqui100 text-chikCaqui200 hover:text-chikBrown100 px-2 py-1 rounded-md transition-all cursor-pointer'>
    <Image 
      src={spanish}
      alt='english'
      className='block'
      width={25}
      height={25}
    />
    <h1 className='font-bold text-2xl'>ES</h1>
  </div>
  )
}

export default LanguageButton
