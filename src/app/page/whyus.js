'use client';

import Link from "next/link";
import HookButton from "../components/HookButton";

export default function WhyUs() {
    return (
        <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="relative z-10 flex flex-col items-start justify-center text-left gap-4 px-16">
                        <p className="text-[#7BDB16] font-bold tracking-wide text-sm sm:text-base">Why Us?</p>
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight pt-2">
                            Why Hire Me For Your Next <span className="text-[#7BDB16]">Project?</span>
                        </h1>
                        <p className="text-[#8CF719] text-sm sm:text-base leading-relaxed pb-8 sm:pb-10">
                            Smart design. Strategic words. Real results. That’s how I help <br className="hidden sm:block" />
                            brands growth.
                        </p>
                        <Link href="../pricing">
                            <HookButton text="get in touch" />
                        </Link>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-left">
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center p-4">
                            <p className="px-6 py-3 sm:px-8 sm:py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719] text-sm sm:text-base">
                                Affordable and Accessible <br className="hidden sm:block" />Professional Solutions
                            </p>
                            <p className="px-6 py-3 sm:px-8 sm:py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719] text-sm sm:text-base">
                                Eliminates Technical Barriers
                            </p>
                            <p className="px-6 py-3 sm:px-8 sm:py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719] text-sm sm:text-base">
                                Faster Time to Market
                            </p>
                            <p className="px-6 py-3 sm:px-8 sm:py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719] text-sm sm:text-base">
                                Scalable and Results-Driven
                            </p>
                            <p className="px-6 py-3 sm:px-8 sm:py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719] text-sm sm:text-base">
                                Fully Managed Solution
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}