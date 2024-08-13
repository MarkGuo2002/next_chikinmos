import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logoletter.png';
import english from '/public/images/english.png';
import spanish from '/public/images/spanish.png';

// Define props for NavbarOption
interface NavbarOptionProps {
  section: string;
  refer: string;
}

// NavbarOption component
const NavbarOption: React.FC<NavbarOptionProps> = ({ section, refer }) => {
  return (
    <li className="bg-white hover:bg-chikCaqui100 text-chikCaqui200 hover:text-chikBrown100 px-2 py-1 rounded-md transition-all ">
      <a href={`#${refer}`}>{section}</a>
    </li>
  );
};

// Navbar component
const Navbar: React.FC = () => {
  return (
    <div className='fixed top-0 w-full bg-white z-30 drop-shadow-md'>
      <nav className="flex justify-between gap-4 items-center px-16 py-2">
        <div className='left-panel flex gap-4'>
          <a href="#hero" className='flex items-center justify-center'>
            <Image 
                src={logo}
                alt="logo"
                className="mr-10 hidden lg:block"
                width={140} 
                height={120}
             />
          </a>
          <ul className="flex space-x-12 font-bold text-2xl">
            <NavbarOption section="About" refer="about" />
            <NavbarOption section="Skills" refer="skills" />
            <NavbarOption section="Projects" refer="projects" />
            <NavbarOption section="Contacts" refer="contacts" />
          </ul>
        </div>
        <div>
          <p className='font-bold text-2xl "bg-white hover:bg-chikCaqui100 text-chikCaqui200 hover:text-chikBrown100 px-2 py-1 rounded-md transition-all cursor-pointer'>EN</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
