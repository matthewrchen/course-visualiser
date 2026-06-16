"use client";

import { useState } from "react";
import NavBar from "./navbar";

export default function Menu() {
    
    const [show, setShow] = useState(false);

    function toggleNavBar() {
        setShow(!show);
    }

    return (
        <div>
            <header className="fixed h-[125px] w-full flex items-center justify-between bg-purple-950 shadow-md">
                <button onClick={toggleNavBar} className="ml-[25px] font-extrabold text-6xl text-white">O</button>

                <h1 className="absolute left-1/2 transform -translate-x-1/2 font-sans font-extrabold tracking-tight text-4xl text-white drop-shadow-lg">Course Visualiser</h1>
            </header>

            {show && <NavBar toggleNavBar={toggleNavBar}/>}
        </div>
    );
}