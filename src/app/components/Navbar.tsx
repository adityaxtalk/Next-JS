"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import logo from "./../assets/images/logo.png";
import House from "./../assets/images/House.png";
import CodesandboxLogo from "./../assets/images/CodesandboxLogo.png";
import CircleWavyWarning from "./../assets/images/CircleWavyWarning.png";
import Storefront from "./../assets/images/Storefront.png";
import Image from 'next/image';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white p-4 mt-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className='text-xl text-purple-800 font-bold flex'>
                  <Image src={logo} className='mx-1' alt="logo"/>  MUSEUMVERSE
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className='flex'>
          <Image src={House} className='mx-2' alt="House"/> Home
          </Link>
          <Link href="/" className='flex text-amber-900'>
          <Image src={CodesandboxLogo} className='mx-2 ' alt="House"/> Artifacts
          </Link>
          <Link href="/" className='flex'>
          <Image src={Storefront} className='mx-2' alt="Store"/> Shop
          </Link>
          <Link href="/" className='flex'>
          <Image src={CircleWavyWarning} className='mx-2' alt="CircleWavy"/> About
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-xl"
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex-row left-0 border-b border-gray-300 my-1">
         <Link href="/" className='flex border-b border-gray-300 my-1'>
          <Image src={House} className='mx-2' alt="House"/> Home
          </Link>
          <Link href="/" className='flex border-b border-gray-300 text-amber-900'>
          <Image src={CodesandboxLogo} className='mx-2 ' alt="House"/> Artifacts
          </Link>
          <Link href="/" className='flex border-b border-gray-300 my-1'>
          <Image src={Storefront} className='mx-2' alt="Store"/> Shop
          </Link>
          <Link href="/" className='flex my-1'>
          <Image src={CircleWavyWarning} className='mx-2' alt="CircleWavy"/> About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
