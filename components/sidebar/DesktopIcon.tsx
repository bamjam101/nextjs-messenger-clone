"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopIconProps {
  key: string;
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}
const DesktopIcon: React.FC<DesktopIconProps> = ({
  key,
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick} key={label} className="w-full">
      <Link
        href={href}
        className={clsx(
          "grove flex gap-x-3 rounded-md items-center px-6 py-3 justify-center text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100",
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopIcon;
