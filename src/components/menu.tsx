"use client";

import { useState } from "react";
import NavBar from "./navigation-bar";

export default function Menu() {
    
    const [show, setShow] = useState(false);

    function toggleNavBar() {
        setShow(!show);
    }

    return (
        <div>
            <header className="z-1 fixed h-[125px] w-full flex items-center justify-between bg-purple-950 shadow-md">
                <button onClick={toggleNavBar} className="ml-[25px] font-extrabold text-6xl text-white">☰</button>

                <h1 className="absolute left-1/2 transform -translate-x-1/2 font-sans font-extrabold tracking-tight text-4xl text-white drop-shadow-lg">Course Visualiser</h1>
            </header>

            <div onClick={toggleNavBar} className={`z-1 fixed h-full w-full bg-black transition-all duration-250 ease-in-out ${show ? 'opacity-50 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}></div>

            {show && <NavBar toggleNavBar={toggleNavBar}/>}
        </div>
    );
}