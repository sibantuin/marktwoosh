import Link from "next/link";
import HookButton from "../components/HookButton";

export default function WhyUs() {
    return (
        <div className="bg-black py-[100px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="relative z-10 flex flex-col items-start justify-center text-left gap-4">
                        <div className="">
                            <p className="text-[#7BDB16] font-bold tracking-wide">Why Us?</p>
                            <div>
                                <h1 className="text-white text-5xl font-semibold leading-tight pt-2">
                                    Why Hire Me For Your Next <span className="text-[#7BDB16]">Project?</span>
                                </h1>
                            </div>
                        </div>
                        <p className="text-[#8CF719] text-base leading-relaxed pb-[50px]">
                            Smart design. Strategic words. Real results. That’s how I help  <br />
                            brands growth.
                        </p>
                        <Link href={`../pricing`}>
                            <HookButton text="get in touch" />
                        </Link>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-left">
                        <div className="space-y-6 text-center p-4">
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719]">
                                Affordable and Accessible <br />Professional Solutions
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719]">
                                Eliminates Technical Barriers
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719]">
                                Faster Time to Market
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719]">
                                Scalable and Results-Driven
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#8CF719] text-[#8CF719]">
                                Fully Managed Solution
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}