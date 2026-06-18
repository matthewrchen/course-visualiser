import Link from "next/link";

import { IconRegistry, IconName } from "./icons/icons";

type Props = {
    name: string,
    link: string,
    iconName: IconName
}

export default function Card({ name, link, iconName } : Props) {
    const SelectedIcon = IconRegistry[iconName];

    return (
        <Link href={link} className="relative flex justify-center h-48 sm:h-36 xl:h-34 2xl:h-42 aspect-square bg-gray-200 text-center">
            <SelectedIcon className="absolute w-full h-full opacity-[25%]" />
            <h1 className="z-0 mt-auto p-4 text-white">{name}</h1>
        </Link>
    );
}