import Link from 'next/link';

import { IconRegistry, IconName } from './icons/icons';

type Props = {
  name: string;
  link: string;
  iconName: IconName;
};

export default function Card({ name, link, iconName }: Props) {
  const SelectedIcon = IconRegistry[iconName];

  return (
    <Link
      href={link}
      className="relative flex aspect-square h-48 justify-center rounded-xl bg-gray-200 text-center transition hover:bg-white sm:h-36 xl:h-34 2xl:h-42"
    >
      <SelectedIcon className="absolute h-full w-full opacity-[25%]" />
      <h1 className="z-0 mt-auto p-4 font-bold text-gray-950">{name}</h1>
    </Link>
  );
}
