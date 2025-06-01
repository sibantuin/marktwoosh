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
                            <div
                                key={index}
                                className="min-w-[280px] max-w-[300px] border border-[#7BDB16] rounded-2xl p-4 flex flex-col justify-between bg-black"
                            >
                                <div>
                                    <div className="bg-black rounded-lg w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
                                        <Image
                                            src={`/${imageSrc}`}
                                            alt={project.client}
                                            width={300}
                                            height={200}
                                            className="object-contain h-full w-auto"
                                        />
                                    </div>
                                    <h3 className="text-white text-md font-medium leading-snug mb-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="mt-4">
                                    <Link href={`/portfolio/${project.slug}`}
                                        className="text-[#7BDB16]/80 hover:text-[#7BDB16] flex items-center gap-1 transition">
                                        Read more <span className="mt-[2px] ml-[4px]">&gt;</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
