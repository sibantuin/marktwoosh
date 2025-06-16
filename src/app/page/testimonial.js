'use client';

import Image from "next/image";
import { testimonials } from "@/app/data/constant";

export default function Testimonials() {
    return (
        <section className="bg-black text-white pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Testimonials</h2>
                <p className="text-[#7BDB16] text-base sm:text-lg md:text-xl mt-2 mb-10">
                    Don’t take our word for it—here’s what our partners say
                </p>
            </div>
            <div className="relative overflow-hidden">
                <div className="flex w-max gap-8 sm:gap-12 md:gap-20 animate-scroll-left px-4 sm:px-6">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-h-[580px] sm:min-h-[580px] w-[280px] sm:w-[350px] md:w-[400px] 
                            p-6 sm:p-8 rounded-xl border border-[#7BDB16] relative flex flex-col justify-between"
                        >
                            <div className="flex flex-col gap-4">
                                <Image
                                    src={testimonial.company}
                                    width={100}
                                    height={100}
                                    alt={testimonial.name + " logo"}
                                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                                />
                                <p className="text-xl sm:text-2xl text-[#8CF719] font-bold">
                                    {testimonial.quote}
                                </p>
                                <p className="text-white text-sm sm:text-base leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 pt-4">
                                <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                                <p className="text-xs sm:text-sm mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}