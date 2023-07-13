import Image from "next/image"
import { TitleSection } from "../../UI/title-section"
import { Button } from "../../UI/button"

export const Hero = () => {
    return (
        <section className="py-16 mt-24 relative">
            <div className="container mx-auto flex flex-col px-4 md:px-0 md:flex-row items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start order-2 md:order-1">
                    <TitleSection title='A Simple Bookmark Manager' size="4" />
                    <p className="w-10/12 text-lg text-grayish-blue mb-8">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex items-center justify-start space-x-4">
                        <Button title="Get it on Chrome" href="/" className="text-sm shadow-2xl" color="blue" />
                        <Button title="Get it on Firefox" href="/" className="text-sm shadow-2xl" color="gray" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-28 md:mb-0">
                    <Image
                        className="w-full"
                        src='/images/illustration-hero.svg'
                        width={557}
                        height={366}
                        alt="Imagem hero"
                    />
                </div>
            </div>
            <div className="z-[-10] w-4/5 md:w-1/3 h-[300px] bg-soft-blue rounded-l-full absolute top-24 md:bottom-24 right-0" />
        </section>
    )
}