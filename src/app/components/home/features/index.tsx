import { Tabs } from "../../UI/tabs"
import { TitleSection } from "../../UI/title-section"


export const Features = () => {
    return (
        <section className="py-16 relative">
            <div className="container mx-auto flex flex-col px-4 md:px-0 items-center text-center">
                <div>
                    <TitleSection size="3" title="Features" />
                    <p className="max-w-[550px] text-lg text-grayish-blue mb-8">
                        Our aim is to make it quick and easy for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <Tabs />
            </div>
        </section>
    )
}