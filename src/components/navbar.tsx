"use client";

import Link from "next/link";

type Props = {
    toggleNavBar: () => void;
}

export default function NavBar({ toggleNavBar } : Props) {

    function handleClick() {
        toggleNavBar();
    }

    return (
        <nav className="fixed h-screen w-sm bg-slate-950 flex flex-col">
            <button onClick={handleClick} className="self-start mt-[35px] ml-[25px] font-extrabold text-6xl text-white">X</button>

            <ul className="mt-[95px] space-y-[25px]">
                <li>
                    <Link href="" className="ml-[10px] font-sans font-extrabold text-2xl text-white drop-shadow-lg">Home</Link>
                </li>

                <li className="border-t-2 border-gray-800">
                    <h1 className="mt-[5px] ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Specialisations</h1>
                </li>

                <li>
                    <Link href="" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Electrical and Electronics</Link>
                </li>
                
            </ul>
        </nav>
    )
}