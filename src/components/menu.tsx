'use client';

import { useState } from 'react';

import NavBar from './navigation-bar';

import MenuIcon from './icons/menu';

export default function Menu() {
  const [show, setShow] = useState(false);

  function toggleNavBar() {
    setShow(!show);
  }

  return (
    <div>
      <header className="fixed z-1 flex h-[125px] w-full items-center justify-between bg-purple-950 shadow-md">
        <button
          onClick={toggleNavBar}
          className="ml-[25px] text-6xl font-extrabold text-white"
        >
          <MenuIcon />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 transform font-sans text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Course Visualiser
        </h1>
      </header>

      <div
        onClick={toggleNavBar}
        className={`fixed z-1 h-full w-full bg-black transition-all duration-250 ease-in-out ${show ? 'pointer-events-auto visible opacity-50' : 'pointer-events-none invisible opacity-0'}`}
      ></div>

      <NavBar toggleNavBar={toggleNavBar} show={show} />
    </div>
  );
}
