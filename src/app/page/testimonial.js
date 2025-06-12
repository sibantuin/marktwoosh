'use client';

import Image from "next/image";
import { testimonials } from "@/app/data/constant";

export default function Testimonials() {
    return (
        <section className="bg-black text-white pb-[100px] overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-[65px] font-bold">Testimonials</h2>
                <p className="text-[#7BDB16] text-[18px] mb-12">
                    Don’t take our word for it—here’s what our partners say
                </p>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex w-max gap-8 animate-scroll-left px-6">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="h-[550px] w-[400px]  p-8 rounded-xl border border-[#7BDB16] hover:border-[#7BDB16]/50 transition-all duration-300 group relative pb-20 flex-shrink-0 "
                        >
                            <Image
                                src={testimonial.company}
                                width={100}
                                height={100}
                                alt={testimonial.name + " logo"}
                                className="w-32 h-32 mb-6 object-contain"
                            />
                            <p className="text-2xl text-[#8CF719] font-bold mb-2 transition-colors">
                                {testimonial.quote}
                            </p>
                            <p className="text-white mb-8 leading-relaxed">{testimonial.text}</p>
                            <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-4">
                                <div className="pt-4">
                                    <p className="font-semibold text-lg">{testimonial.name}</p>
                                    <p className="text-sm mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
