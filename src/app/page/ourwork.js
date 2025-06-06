'use client';

import Image from "next/image";
import Link from "next/link";
import { portfolioDetails } from "../data/constant";

export default function OurWork() {
    return (
        <section className="text-white bg-black py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-[#7BDB16] font-bold text-[20px]">Our Work</h2>
                <p className="text-[55px] font-bold">Some of our previous work</p>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex w-max gap-8 animate-scroll-right">
                    {[...portfolioDetails, ...portfolioDetails].map((project, index) => {
                        const imageSrc = `portfolio/content_${project.slug}.svg`;
                        return (
                            <Link
                                key={index}
                                href={`/portfolio/${project.slug}`}
                                className="h-[550px] w-[400px] border border-[#7BDB16] rounded-2xl p-4 flex-shrink-0 flex flex-col justify-between bg-black hover:shadow-[0_0_24px_rgba(123,219,22,0.2)] transition-all duration-200 cursor-pointer group"
                            >
                                <div>
                                    <div className="bg-black w-full rounded-lg h-48 flex items-center justify-center my-4 overflow-hidden">
                                        <Image
                                            src={`/${imageSrc}`}
                                            alt={project.client}
                                            width={300}
                                            height={200}
                                            className="object-contain rounded-[16px] h-full w-auto transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-white text-md font-medium leading-snug px-10 py-5 group-hover:text-[#7BDB16] transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <div className="text-[#7BDB16]/80 font-semibold group-hover:text-[#7BDB16] flex items-center gap-1 px-10 transition">
                                        Read more <span className="mt-[2px] ml-[4px]">&gt;</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}