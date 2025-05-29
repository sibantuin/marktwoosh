'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

const portfolioItems = [
    {
        title: "How We Helped Kindlyn Turn Complex Payment Tech into a Seamless Digital Experience",
        image: "/content_kindlyn.svg",
        link: "#"
    },
    {
        title: "How We Brought JMW’s High-Tech Hair Tools to Life with a Brand New Website Targeted for the European Market",
        image: "/content_jmw.svg",
        link: "#"
    },
    {
        title: "How We Translated Semioticom’s Expertise into a Modern, Multilingual Website for a Global Audience",
        image: "/content_semioticon.svg",
        link: "#"
    },
    {
        title: "How We Boosted Hurom Europe’s Sales by 36% and achieve Average ROAS of 18x with Targeted Google and Meta Advertising in Less Than a Year.",
        image: "/content_hurom.svg",
        link: "#"
    },
    {
        title: "How We Revamped Nano-Tag's Web Design and Google Ads Strategy to Achieve a 2x Increase in Conversion Rate and Optimized Ad Spend.",
        image: "/content_nanotag.svg",
        link: "#"
    },
    {
        title: "How we re-designed and re-developed Mondona’s brand new e-shop targeted for the European market.",
        image: "/content_mondona.svg",
        link: "#"
    },
];

export default function Portfolio() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[#7BDB16] font-bold text-1xl mb-4">Our clients</h2>
                    <p className="text-4xl md:text-5xl font-semibold text-white">
                        From startups to scaleups <br /> and beyond
                    </p>
                </div>

                {/* List of Portfolio Cards */}
                <div className="flex flex-col gap-10 py-10">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-center bg-black border border-[#7BDB16] rounded-2xl p-6 md:p-10 gap-6"
                        >
                            {/* Left Text */}
                            <div className="flex-1">
                                <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <a href={item.link} className="text-gray-400 hover:text-[#7BDB16] flex items-center gap-1 transition">
                                    Read more <span>&gt;</span>
                                </a>
                            </div>

                            {/* Right Image */}
                            <div className="flex-1 max-w-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="rounded-xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
