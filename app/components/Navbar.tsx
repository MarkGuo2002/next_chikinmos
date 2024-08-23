'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import logo from '/public/images/logoletter.png';
import english from '/public/images/english.png';
import spanish from '/public/images/spanish.png';

import {
  Bars3Icon
} from '@heroicons/react/24/outline';




const links = [
  { name: 'Inicio', href: '/'}, 
  { name: 'Contacto', href: '/contact'},
  { name: 'FAQ', href: '/faq'}
]


// Navbar component
const Navbar: React.FC = () => {
  const pathname = usePathname();
  console.log("current pathname:" + pathname)
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu(){
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
    <nav className="absolute top-0 w-full bg-white z-30 drop-shadow-md flex justify-between gap-4 items-center px-2 py-2">
      <div onClick={toggleMenu} className='burger-menu lg:hidden cursor-pointer text-black hover:text-chikBrown100'>
        <Bars3Icon className='size-10'/>
      </div>
      <div className='left-panel flex md:ml-10'>
        <Link href="/" className='flex items-center justify-center'>
          <Image 
              src={logo}
              alt="logo"
              className="lg:mr-14 ml-8"
              width={160} 
              height={140}
            />
        </Link>
        <ul className="hidden lg:flex space-x-12 font-bold text-2xl">
          {
            links.map((link) => {
              return(
              <Link 
                key={link.name}
                href={link.href}
                className={`${pathname === link.href ? "bg-chikCaqui100 text-chikBrown100" : "bg-white text-chikCaqui200 hover:bg-chikCaqui100 hover:text-chikBrown100  transition-all"} px-2 py-1 rounded-md`}>
                  <h1>{link.name}</h1>
              </Link>
              )
            })
          }
        </ul>
      </div>
      <div className='right-panel md:mr-10  flex gap-2 items-center "bg-white hover:bg-chikCaqui100 text-chikCaqui200 hover:text-chikBrown100 px-2 py-1 rounded-md transition-all cursor-pointer'>
        <Image 
          src={english}
          alt='english'
          className='block'
          width={25}
          height={25}
        />
        <h1 className='font-bold text-2xl'>EN</h1>
      </div>
      { isOpen && (
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 rounded-xl lg:hidden bg-white text-center w-7/12 p-4 drop-shadow-md">
        <ul className="flex flex-col space-y-4 font-bold text-2xl">
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className='hover:bg-chikCaqui100 text-chikCaqui200 hover:text-chikBrown100 px-2 py-1 rounded-md transition-all'
              onClick={toggleMenu}>
              <h1>{link.name}</h1>
            </Link>
          ))}
        </ul>
      </div>
      )} 

    </nav>

    
    </>
  );
}

export default Navbar;
