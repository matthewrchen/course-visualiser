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
                    <Link href="/" className="ml-[10px] font-sans font-extrabold text-2xl text-white drop-shadow-lg">Home</Link>
                </li>

                <li className="border-t-2 border-gray-800">
                    <h1 className="mt-[5px] ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Specialisations</h1>
                </li>

                <li>
                    <Link href="/specialisations/biomedical-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Biomedical</Link>
                </li>
                
                <li>
                    <Link href="/specialisations/chemical-and-materials-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Chemical and Materials</Link>
                </li>

                <li>
                    <Link href="/specialisations/civil-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Civil</Link>
                </li>

                <li>
                    <Link href="/specialisations/computer-systems-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Computer Systems</Link>
                </li>

                <li>
                    <Link href="/specialisations/electrical-and-electronic-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Electrical and Electronic</Link>
                </li>

                <li>
                    <Link href="/specialisations/engineering-science" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Engineering Science</Link>
                </li>

                <li>
                    <Link href="/specialisations/mechanical-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Mechanical</Link>
                </li>

                <li>
                    <Link href="/specialisations/mechatronics-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Mechatronics</Link>
                </li>

                <li>
                    <Link href="/specialisations/software-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Software</Link>
                </li>

                <li>
                    <Link href="/specialisations/structural-engineering" className="ml-[10px] font-sans font-extrabold text-xl text-white drop-shadow-lg">Structural</Link>
                </li>

            </ul>
        </nav>
    );
}