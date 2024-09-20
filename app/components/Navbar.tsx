'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import logo from '/public/images/logoletter.png';

import {
  Bars3Icon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import LanguageButton from './LanguageButton';


const menuPDF = "/menu.pdf"

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
        <ul className="hidden lg:flex space-x-12 font-bold text-xl">
          {
            links.map((link) => {
              return(
              <Link 
                key={link.name}
                href={link.href}
                className={`${pathname === link.href ? "bg-chikCaqui100 text-chikBrown100" : "bg-white text-chikCaqui200 hover:bg-chikCaqui100 hover:text-chikBrown100  transition-all"} px-2 py-1 rounded-md`}>
                  <h2>{link.name}</h2>
              </Link>
              )
            })
          }
        </ul>
      </div>
      

      <div className='right-panel flex gap-4 '>
        <a 
          className="lg:flex items-center justify-center hidden bg-chikCaqui000 gap-2 px-4 py-1 border-2 border-chikBrown100 cursor-pointer rounded-full hover:bg-chikBrown100 transition-all duration-300 ease-in-out text-chikBrown100 hover:text-white group"
          href={menuPDF}
          download
        >
          <ArrowDownTrayIcon className='size-5'/>
          <p className='group-hover:text-white font-bold'>Carta</p>
        </a>
       
       <LanguageButton />
      </div>
      
      { isOpen && (
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 rounded-xl lg:hidden bg-white text-center w-9/12 md:w-6/12 p-4 drop-shadow-md">
        <ul className="flex flex-col space-y-4 font-bold text-2xl">
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? "bg-chikCaqui100 text-chikBrown100" : "bg-white text-chikCaqui200 hover:bg-chikCaqui100 hover:text-chikBrown100  transition-all"} px-2 py-1 rounded-md hover:scale-105`}
              onClick={toggleMenu}>
              <h2>{link.name}</h2>
            </Link>
          ))}
            <a
              className='hover:bg-chikCaqui200 bg-chikCaqui100 px-2 py-1 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-chikBrown200'
              href={menuPDF}
              download
            >
            <ArrowDownTrayIcon className='size-5 text-chikBrown300'/>
            <p className='text-chikBrown300 hover:text-chikBrown100 text-xl font-bold'>Nuestra Carta </p>
          </a>
        </ul>
      </div>
      )} 

    </nav>

    
    </>
  );
}

export default Navbar;
