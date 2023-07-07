"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-primary center py-10 text-white w-screen" style={{backgroundImage: "url('Texture.png')"}}>
      <div className='w-[85%] center flex-col'>
        {/* Navbar starts */}
        <nav className='w-full between z-50'>
          <div className='font-bold text-lg tracking-wider'><Link href="/">FlowPrice Oracle</Link></div>
          <ul>
            <li>Smart Contract API Docs</li>
          </ul>
          <div className='w-[20%] flex items-end justify-end'>
            <a href="#"><FaGithub /></a>
          </div>
        </nav>
        {/* Navbar ends */}
        {/* Hero starts */}
        <div className='w-full my-[9rem] center relative'>
          <h1 className='font-bold capitalize tracking-wider text-xxxl w-4/5 text-center'>On-Chain realtime crypto price</h1>
        </div>
        {/* Hero ends */}
        {/* Gradients and images starts */}
        <div className='absolute h-screen w-screen center overflow-hidden'>
          <div className='center w-full h-full'>
            <img src="/Ellipse74.png" alt="Ellipse" style={{ position: 'absolute', top: 50, left: 50, zIndex: 1 }} />
          </div>
          <div className='z-20 center overflow-hidden w-full h-full'>
            <img src="/Ellipse75.png" alt="Ellipse" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, }} />
          </div>
          <div className='z-30 center overflow-hidden w-full h-full'>
            <img src="/Ellipse76.png" alt="Ellipse" style={{ position: 'absolute', top: 50, left: 0, zIndex: 3, }} />
          </div>
          <div className='leftGradient' style={{ position: 'absolute', top: -80, left: -10, }}></div>
          <div className='rightGradient' style={{ position: 'absolute', top: 50, right: -150, }}></div>
          <div className='z-30 center overflow-hidden w-full h-full'>
            <img src="/Bitcoin.png" alt="bitcoin" style={{ position: 'absolute', top: 80, left: 100, zIndex: 3, }} />
          </div>
          <div className='z-30 center overflow-hidden w-full h-full'>
            <img src="/starleft.svg" alt="Ellipse" style={{ position: 'absolute', top: 180, left: 250, zIndex: 3, }} />
          </div>
          <div className='z-30 center overflow-hidden w-full h-full'>
            <img src="/sphereGold.png" alt="Ellipse" style={{ position: 'absolute', top: 300, left: 55, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/moon.svg" alt="Ellipse" style={{ position: 'absolute', top: 300, right: -55, zIndex: 3, }} className='moonGradient' />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/starright1.svg" alt="Ellipse" style={{ position: 'absolute', top: 100, right: 150, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/starright2.svg" alt="Ellipse" style={{ position: 'absolute', top: 150, right: 50, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/starright3.svg" alt="Ellipse" style={{ position: 'absolute', bottom: 50, right: 100, zIndex: 3, }} />
          </div>
          <div className='z-30 center  overflow-hidden w-full h-full'>
            <img src="/Etherium.png" alt="Ellipse" style={{ position: 'absolute', bottom: 100, right: 200, zIndex: 3, }} />
          </div>
        </div>
        {/* Gradients and images ends */}
      </div>
    </main>
  )
}
