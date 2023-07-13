import Link from "next/link";

type ButtonProps = {
    title: string;
    href: string;
    color?: "blue" | "gray"; // Adicionado o atributo color com opções de valores
    className?: string;
}

export const Button = ({ title, href, color, className }: ButtonProps) => {
    let buttonClass = "";

    switch (color) {
        case "blue":
            buttonClass = "bg-soft-blue border-soft-blue hover:text-soft-blue hover:bg-transparent";
            break;
        case "gray":
            buttonClass = "bg-grayish-blue border-grayish-blue hover:text-grayish-blue hover:bg-transparent";
            break;
        default:
            buttonClass = "bg-soft-red border-soft-red hover:text-soft-red hover:bg-transparent"; // Valor padrão
            break;
    }

    buttonClass += " border-2 py-3 px-6 rounded-md transition-all duration-300 text-white";

    return (
        <button className={`${buttonClass} ${className}`}>
            <Link className="font-bold" href={href}>
                {title}
            </Link>
        </button>
    )
}
