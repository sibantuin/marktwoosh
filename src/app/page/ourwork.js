'use client';

import Image from "next/image";
import Link from "next/link";
import { portfolioDetails } from "../data/constant";

export default function OurWork() {
    return (
        <section className="text-white bg-black py-16 px-6 md:px-8">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-[#7BDB16] font-bold text-2xl mb-2">Our Work</h2>
                <p className="text-4xl md:text-5xl font-bold">Some of our previous work</p>
            </div>
            <div className="overflow-x-auto no-scrollbar">
                <div className="flex gap-8 w-max">
                    {portfolioDetails.map((project, index) => {
                        const imageSrc = `portfolio/content_${project.slug}.svg`;
                        return (
                            <Link
                                key={index}
                                href={`/portfolio/${project.slug}`}
                                className="min-w-[280px] max-w-[300px] border border-[#7BDB16] rounded-2xl p-4 flex flex-col justify-between bg-black hover:shadow-[0_0_24px_rgba(123,219,22,0.2)] transition-all duration-200 cursor-pointer group"
                            >
                                <div>
                                    <div className="bg-black rounded-lg w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
                                        <Image
                                            src={`/${imageSrc}`}
                                            alt={project.client}
                                            width={300}
                                            height={200}
                                            className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-white text-md font-medium leading-snug mb-2 group-hover:text-[#7BDB16] transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="mt-4 text-[#7BDB16]/80 group-hover:text-[#7BDB16] flex items-center gap-1 transition">
                                    Read more <span className="mt-[2px] ml-[4px]">&gt;</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
