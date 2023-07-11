import Link from "next/link"

type ButtonProps = {
    title: string;
    href: string;
    primary: boolean; // Adicionado o atributo primary como opcional
    className?: string;
}

export const Button = ({ title, href, primary, className }: ButtonProps) => {
    const buttonClass = primary
        ? "bg-soft-blue border-2 border-soft-blue py-3 px-10 rounded-md text-white transition-all hover:bg-white hover:text-soft-blue"
        : "bg-soft-red border-2 border-soft-red py-3 px-10 rounded-md text-white transition-all hover:bg-white hover:text-soft-red";

    return (
        <button className={`${buttonClass} transition-all duration-300 ${className}`}>
            <Link className="font-bold text-sm tracking-widest uppercase" href={href}>
                {title}
            </Link>
        </button>
    )
}