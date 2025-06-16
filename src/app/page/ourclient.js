'use client';

import Image from "next/image";
import { ourClient } from "../data/constant";

export default function OurClient() {
    return (
        <section>
            <div className="bg-black py-[100px] px-4 sm:px-6 md:px-10">
                <div className="relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        <span className="font-semibold text-[#83E617] text-sm sm:text-base">
                            Our Clients
                        </span>
                        <h1 className="mb-[50px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                            From startups to scaleups <br className="hidden sm:block" /> and beyond
                        </h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-10 w-full max-w-7xl px-2 sm:px-4 md:px-6">
                            {ourClient.map((client, index) => (
                                <div
                                    key={index}
                                    className="group relative flex items-center justify-center px-4 sm:px-6"
                                >
                                    <Image
                                        src={client.img}
                                        alt={`${client.img.split('_')[1].split('.')[0]} logo`}
                                        width={160}
                                        height={80}
                                        className="object-contain h-10 sm:h-12 w-full max-w-[120px] sm:max-w-[140px] mx-auto transition-all duration-300 group-hover:grayscale"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}