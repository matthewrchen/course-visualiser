import Link from "next/link";

type Props = {
    toggleNavBar: () => void;
}

export default function NavBar({ toggleNavBar } : Props) {
    return (
        <nav className="z-2 fixed h-full w-sm bg-slate-950 flex flex-col">
            <button onClick={toggleNavBar} className="self-start mt-[35px] ml-[25px] font-extrabold text-6xl text-white">×</button>

            <ul className="mt-[95px] space-y-[25px]">
                <li>
                    <Link href="/" className="ml-[10px] font-sans font-extrabold text-2xl text-white drop-shadow-lg hover:text-gray-400">Home</Link>
                </li>

                <li className="border-t-2 border-gray-800">
                    <h1 className="mt-[5px] ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Specialisations</h1>
                </li>

                <li>
                    <Link href="/specialisations/biomedical-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Biomedical</Link>
                </li>
                
                <li>
                    <Link href="/specialisations/chemical-and-materials-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Chemical and Materials</Link>
                </li>

                <li>
                    <Link href="/specialisations/civil-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Civil</Link>
                </li>

                <li>
                    <Link href="/specialisations/computer-systems-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Computer Systems</Link>
                </li>

                <li>
                    <Link href="/specialisations/electrical-and-electronic-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Electrical and Electronic</Link>
                </li>

                <li>
                    <Link href="/specialisations/engineering-science" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Engineering Science</Link>
                </li>

                <li>
                    <Link href="/specialisations/mechanical-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Mechanical</Link>
                </li>

                <li>
                    <Link href="/specialisations/mechatronics-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Mechatronics</Link>
                </li>

                <li>
                    <Link href="/specialisations/software-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Software</Link>
                </li>

                <li>
                    <Link href="/specialisations/structural-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg hover:text-gray-600">Structural</Link>
                </li>

            </ul>
        </nav>
    );
}