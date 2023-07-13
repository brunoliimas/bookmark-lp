'use client'
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "../UI/menu";
import { Button } from "../UI/button";

const links = ["features", "pricing", "contact"];

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"; // Define o overflow do body para "hidden" quando o menu estiver aberto
        } else {
            document.body.style.overflow = ""; // Remove o overflow do body quando o menu estiver fechado
        }

        return () => {
            document.body.style.overflow = ""; // Garante que o overflow seja redefinido quando o componente for desmontado
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed z-50 top-0 left-0 w-full bg-white text-very-dark-blue px-10 shadow-md">
            <div className="container flex items-center justify-between">
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
                        title="Login"
                        href="/login"
                        className="uppercase"
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
