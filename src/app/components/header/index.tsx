'use client'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "../UI/menu";
import { Button } from "../UI/button";

const links = ["features", "pricing", "contact"];

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white text-very-dark-blue">
            <div className="container flex items-center justify-between px-8 lg:px-0">
                <Link href="/" className={`${menuOpen ? 'hidden' : 'block'}`}>
                    <Image
                        src="/images/logo-bookmark.svg"
                        width={193}
                        height={33}
                        alt="Bookmark"
                        className="my-8"
                    />
                </Link>
                <div className="hidden md:flex items-center space-x-10">
                    {links.map((link, index) => (
                        <Link key={index}
                            className="text-very-dark-blue uppercase text-lg hover:text-soft-red transition-all duration-300"
                            href={`/${link}`}
                        >
                            {link}
                        </Link>
                    ))}
                    <Button
                        primary={false}
                        title="Login"
                        href="/login"
                    />
                </div>
                <button className={`text-very-dark-blue md:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                    <AiOutlineMenu size={24} />
                </button>
                {menuOpen && <Menu onClose={toggleMenu} />}
            </div>
        </header>
    );
};
