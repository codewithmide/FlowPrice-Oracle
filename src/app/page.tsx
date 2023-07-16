"use client";

import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import "../../flow/config";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null, addr: null });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const subscription = fcl.currentUser.subscribe((userData: any) => {
      setUser(userData);
      console.log(userData);
    });
  
    return () => {
      subscription();
    };
  }, []);

  function AuthedState() {
    return (
      <div className='center gap-3 '>
        <div>Address: {user?.addr ?? "No Address"}</div>
        <button className='bg-green px-6 py-2 text-[.9rem] hover:scale-95 transition-all duration-300' onClick={fcl.unauthenticate}>Log Out</button>
      </div>
    );
  }

  const UnauthenticatedState = () => {
    return (
      <div className='flex gap-3'>
        <a href="https://flow-hackaton.gitbook.io/flowpricesoracle/validator-docs/become-a-validator" target="_blank" className='bg-green px-6 py-2 text-[.9rem] hover:scale-95 transition-all duration-300'>Become Validator</a>
        <button onClick={fcl.logIn} className='border border-green text-green px-6 py-2 text-[.9rem] hover:scale-95 transition-all duration-300'>Login</button>
      </div>
    )
  }

  const imageFilenames = [
    "head1-min.jpg",
    "head2-min.jpg",
    "head3-min.jpg",
    "head4-min.jpg",
    "head5-min.jpg",
    "head6-min.jpg",
    "head7-min.jpg",
    "head8-min.jpg",
    "head9-min.jpg",
    "head10-min.jpg",
    "head11-min.jpg",
  ];

  return (
    <main className="overflow-x-hidden bg-[#fff] flex-col center text-black">
      <div className='lg:w-[85%] sm:w-[90%] center flex-col'>
        {/* Navbar starts */}
        <nav className='w-full h-[10vh] center z-50 mt-3'>
          <div className='between w-full'>
            <div className='font-bold md:text-md tracking-wider clash'><Link href="/">FlowPrice Oracle</Link></div>
            <ul className='center md:flex gap-6 sm:hidden'>
              <li>
                <a href="https://flow-hackaton.gitbook.io/flowpricesoracle/" target="_blank" className='text-[1rem]'>Whitepaper</a>
              </li>
              <li>
                <a href="https://flow-hackaton.gitbook.io/flowpricesoracle/public-smartcontract-api" target="_blank" className=''>Devs</a>
              </li>
            </ul>
            <div className='md:flex items-end justify-end hidden'>
              {user.loggedIn
                ? <AuthedState />
                : <UnauthenticatedState />
              }
            </div>
            <div className='md:hidden' onClick={handleOpenMenu}>
              <FaBars />
            </div>
            {isMenuOpen && (
              <div className="md:hidden bg-white flex justify-between flex-col absolute top-0 left-0 right-0 w-full z-[100] h-[50vh] pb-12" id="mobile-menu">
                <div className="flex justify-end mr-4 mt-8">
                  <button
                    onClick={handleCloseMenu}
                    type="button"
                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                    aria-label="Close menu"
                  >
                    <FaTimes width={100}/>
                  </button>
                </div>
                <ul className='flex gap-6 center'>
                  <li>
                    <a href="https://flow-hackaton.gitbook.io/flowpricesoracle/" target="_blank">Whitepaper</a>
                  </li>
                  <li>
                    <a href="https://flow-hackaton.gitbook.io/flowpricesoracle/public-smartcontract-api" target="_blank">Devs</a>
                  </li>
                </ul>
                <div className='center'>
                  {user.loggedIn
                    ? <AuthedState />
                    : <UnauthenticatedState />
                  }
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* Navbar ends */}
        {/* Hero starts */}
        <div className='w-full h-[77vh] center relative overflow-x-hidden'>
          <h1 className='font-bold capitalize tracking-wider md:text-xxl text-[2rem] lg:w-4/5 text-center text-black clash'>decentralized <span className='text-[#32de84]'>On-Chain realtime</span> crypto price <span className='text-[#32de84]'>oracle</span></h1>
        </div>
        {/* Hero ends */}
        {/* Gradients and images starts */}
        <div className='absolute h-screen w-screen center overflow-hidden'>
          <div className='center w-full h-full sm:hidden md:flex'>
            <img src="/Ellipse74.png" alt="Ellipse" style={{ position: 'absolute', top: 50, left: 50, zIndex: 1 }} />
          </div>
          <div className='z-20 center overflow-hidden w-full h-full sm:hidden md:flex'>
            <img src="/Ellipse75.png" alt="Ellipse" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, }} />
          </div>
          <div className='z-30 center overflow-hidden w-full h-full sm:hidden md:flex'>
            <img src="/Ellipse76.png" alt="Ellipse" style={{ position: 'absolute', top: 50, left: 0, zIndex: 3, }} />
          </div>
          <div className='z-30 center overflow-hidden w-full h-full'>
            <img src="/flow.png" alt="bitcoin" style={{ position: 'absolute', top: 120, left: 100, zIndex: 3, width: 80, }} />
          </div>
          <div className='z-30 center sm:hidden md:flex overflow-hidden sm:hidden md:flex w-full h-full'>
            <img src="/starleft.svg" alt="Ellipse" style={{ position: 'absolute', top: 180, left: 250, zIndex: 3, }} />
          </div>
          <div className='z-30 center overflow-hidden sm:hidden md:flex w-full h-full'>
            <img src="/sphereGold.png" alt="Ellipse" style={{ position: 'absolute', top: 300, left: 55, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden sm:hidden md:flex w-full h-full'>
            <img src="/moon.svg" alt="Ellipse" style={{ position: 'absolute', top: 300, right: -55, zIndex: 3, }} className='moonGradient' />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/Bitcoin.png" alt="Ellipse" className='flow-icon' style={{ position: 'absolute', top: 120, right: 50, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden sm:hidden md:flex w-full h-full'>
            <img src="/starright2.svg" alt="Ellipse" style={{ position: 'absolute', top: 150, right: 50, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden sm:hidden md:flex w-full h-full'>
            <img src="/starright3.svg" alt="Ellipse" style={{ position: 'absolute', bottom: 50, right: 100, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/Etherium.png" alt="Ellipse" style={{ position: 'absolute', bottom: 0, right: 150, zIndex: 3, }} />
          </div>
        </div>
        {/* Gradients and images ends */}
      </div>
      <section className='lg:w-[85%] sm:w-[90%] center sm:flex-col md:flex-row my-36 overflow-x-hidden'>
        <div className='w-full md:w-1/2 md:block sm:flex-col mb-10 md:mb-0'>
          <h2 className='text-green clash text-[2rem] font-bold'>Decentralized</h2>
          <h2 className='text-green clash text-[2rem] font-bold'><span className="text-black">Powered by</span> Validators</h2>
        </div>
        <div className='md:w-1/2 w-full flex-col gap-6 center'>
          <Marquee direction='right' pauseOnHover>
            {imageFilenames.map((filename) => (
              <div key={filename} className="rounded-full border-[4px] border-green p-1 overflow-hidden">
                <img src={filename} alt="image" className="w-[7rem] h-[7rem] rounded-full object-cover" />
              </div>
            ))}
          </Marquee>
          <Marquee direction='left' pauseOnHover>
            {imageFilenames.map((filename) => (
              <div key={filename} className="rounded-full border-[4px] border-black p-1 overflow-hidden">
                <img src={filename} alt="image" className="w-[7rem] h-[7rem] rounded-full object-cover" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  )
}
