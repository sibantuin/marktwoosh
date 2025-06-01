'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { portfolioDetails } from "../data/constant";

const portfolioItems = portfolioDetails.map(({ slug, title }) => ({
    slug,
    title,
    image: `portfolio/content_${slug}.svg`
}));

export default function Portfolio() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[#7BDB16] font-bold text-xl mb-4">Our clients</h2>
                    <p className="text-4xl md:text-5xl font-semibold text-white">
                        From startups to scaleups <br /> and beyond
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-center bg-black border border-[#7BDB16] rounded-2xl p-6 md:p-10 gap-6"
                        >
                            <div className="flex-1">
                                <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <Link href={`/portfolio/${item.slug}`} className="text-gray-400 hover:text-[#7BDB16] flex items-center gap-1 transition">
                                    Read more <span className="mt-[2px]">&gt;</span>
                                </Link>
                            </div>

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