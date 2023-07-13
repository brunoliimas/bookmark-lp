'use client'
import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { TitleSection } from "./title-section";


const tabsContents = [
    {
        id: 1,
        title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        URLImage: "illustration-features-tab-1",
        HrefLink: "/"
    },
    {
        id: 2,
        title: "Intelligent search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        URLImage: "illustration-features-tab-2",
        HrefLink: "/"
    },
    {
        id: 3,
        title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        URLImage: "illustration-features-tab-3",
        HrefLink: "/"
    },
]

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className="container flex flex-col md:flex-row justify-center items-center max-w-[660px] border-b-2 border-b-gray-200">
                {tabsContents.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${activeTab === tab.id ? "active border-b-4 border-b-soft-red font-medium" : ""
                            } py-4 px-8 transition-all duration-500`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div>
                {tabsContents.map((tab) => (
                    <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
                        <section className="py-16 relative">
                            <div className="container max-w-[1000px] mx-auto md:space-x-10 flex flex-col px-4 md:px-0 md:flex-row items-center">
                                <div className="w-full flex items-center justify-center md:w-1/2 mb-28 md:mb-0">
                                    <Image
                                        className="drop-shadow-xl"
                                        src={`/images/${tab.URLImage}.svg`}
                                        width={400}
                                        height={266}
                                        alt="Imagem hero"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start">
                                    <TitleSection title={tab.title} size="3" />
                                    <p className="w-10/12 text-base text-grayish-blue mb-8">
                                        {tab.text}
                                    </p>
                                    <div className="flex items-center justify-start space-x-4">
                                        <Button
                                            title="More Info"
                                            href={tab.HrefLink}
                                            className="text-sm shadow-2xl"
                                            color="blue"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="z-[-10] w-4/5 md:w-1/3 h-[300px] bg-soft-blue rounded-r-full absolute top-12 md:top-24 md:bottom-24 left-0" />
                        </section>
                    </div>
                ))}
            </div>
        </>
    );
};