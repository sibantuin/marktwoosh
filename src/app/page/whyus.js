import Link from "next/link";
import HookButton from "../components/HookButton";

export default function WhyUs() {
    return (
        <div className="bg-black py-10">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="relative z-10 flex flex-col items-start justify-center text-left  gap-8">
                        <div className="">
                            <p className="text-[#7BDB16] font-bold tracking-wide">Why Us?</p>
                            <div>
                                <h1 className="text-white text-5xl font-semibold leading-tight">
                                    Why Hire Me For Your Next <span className="text-[#7BDB16]">Project?</span>
                                </h1>
                            </div>
                        </div>
                        <p className="text-[#FFF]/50 text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit semper <br />
                            dalar elementum tempus hac tellus libero accumsan.
                        </p>
                        <Link href={`../pricing`}>
                            <HookButton text="get in touch" />
                        </Link>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-left">
                        <div className="space-y-6 text-center p-4">
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Affordable and Accessible <br />Professional Solutions
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Eliminates Technical Barriers
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Faster Time to Market
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Scalable and Results-Driven
                            </p>
                            <p className="px-8 py-4 rounded-[21px] font-semibold outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Fully Managed Solution
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}