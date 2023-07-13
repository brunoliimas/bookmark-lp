type TitleSectionProps = {
    title: string;
    size: "3" | "4";
}

export const TitleSection = ({title, size}: TitleSectionProps) => {
    return (
        <>
            <h2 className={`text-${size}xl font-medium text-very-dark-blue mb-8`}>{title}</h2>
        </>
    )

}