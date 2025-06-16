'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { portfolioDetails } from "../data/constant";

const portfolioItems = portfolioDetails.map(({ slug, title }) => ({
    slug,
    title,
    image: `/portfolio/content_${slug}.svg`
}));

export default function Portfolio() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="max-w-6xl mx-auto pt-[130px] pb-[100px] px-4 sm:px-6 md:px-10">
                <div className="text-center mb-[80px]">
                    <h2 className="text-[#7BDB16] font-bold text-sm sm:text-base md:text-xl mb-3">Our clients</h2>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                        From startups to scaleups <br className="hidden sm:block" /> and beyond
                    </p>
                </div>
                <div className="flex flex-col gap-8 sm:gap-10">
                    {portfolioItems.map((item, index) => (
                        <Link
                            key={index}
                            href={`/portfolio/${item.slug}`}
                            className="flex flex-col md:flex-row justify-between items-center bg-black border border-[#7BDB16] rounded-2xl p-6 md:p-10 gap-6 hover:shadow-[0_0_24px_rgba(123,219,22,0.2)] transition-all duration-200 cursor-pointer group"
                        >
                            <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 group-hover:text-[#7BDB16] transition-colors duration-200">
                                    {item.title}
                                </h3>
                                <div className="text-sm sm:text-base text-gray-400 flex justify-center md:justify-start items-center gap-1 transition group-hover:text-[#7BDB16]">
                                    Read more <span className="mt-[2px]">&gt;</span>
                                </div>
                            </div>

                            <div className="flex-1 max-w-md w-full overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}