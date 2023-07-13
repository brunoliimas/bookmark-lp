import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Button } from "./button";
import Image from "next/image";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

const links = ["features", "pricing", "contact"];

type MenuProps = {
    onClose: () => void;
};

export const Menu = ({ onClose }: MenuProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen p-8 flex flex-col items-center justify-between bg-very-dark-blue text-white opacity-95">
            <ul className="text-center w-full flex flex-col items-center">
                
                    <Link href="/">
                        <Image
                            src="/images/logo-bookmark-white.svg"
                            width={193}
                            height={33}
                            alt="Bookmark"
                            className="my-8 "
                        />
                    </Link>
                
                {links.map((link, index) => (
                    <li key={index} className="py-4 border-t w-full">
                        <Link
                            className="text-white uppercase text-lg hover:text-soft-red transition-all duration-300"
                            href={`/${link}`}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
                <Button
                    className="border-white bg-transparent hover:text-very-dark-blue w-full"
                    title="Login"
                    href="/login"
                />
            </ul>
            <div className="flex">
                <a
                    className="mx-4 hover:text-soft-red"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillFacebook size={30} />
                </a>
                <a
                    className="mx-4 hover:text-soft-red"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillTwitterCircle size={30} />
                </a>
            </div>
            <button className="absolute top-8 right-8 text-white" onClick={onClose}>
                <IoClose size={30} />
            </button>
        </div>
    );
};
