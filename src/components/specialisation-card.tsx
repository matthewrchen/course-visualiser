import Link from "next/link";

type Props = {
    name: string,
    link: string
}

export default function Card({ name, link } : Props) {
    return (
        <Link href={link} className="flex justify-center h-48 aspect-square bg-gray-200 text-center">
            <h1 className="mt-auto p-4">{name}</h1>
        </Link>
    );
}