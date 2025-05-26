import HookButton from "../components/HookButton";

export default function WhyUs() {
    return (
        <div className="bg-black py-10">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="relative z-10 flex flex-col items-start justify-center text-left max-w-xl gap-6">
                        <p className="text-[#7BDB16] font-semibold tracking-wide">Why Us?</p>

                        <div>
                            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                                Why Hire Me For Your <br />
                                Next <span className="text-[#7BDB16]">Project?</span>
                            </h1>
                        </div>

                        <p className="text-[#cfcfcf] text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum
                            tempus hac tellus libero accumsan.
                        </p>

                        <HookButton text="Let's Talk" />
                    </div>


                    <div className="relative z-10 flex flex-col items-center justify-center text-left">
                        <div className="space-y-4 text-center">
                            <p className="p-4 rounded-[21px] outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Affordable and Accessible <br />Professional Solutions
                            </p>
                            <p className="p-4 rounded-[21px] outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Eliminates Technical Barriers
                            </p>
                            <p className="p-4 rounded-[21px] outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Faster Time to Market
                            </p>
                            <p className="p-4 rounded-[21px] outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Scalable and Results-Driven
                            </p>
                            <p className="p-4 rounded-[21px] outline outline-1 outline-[#7BDB16] text-[#7BDB16]">
                                Fully Managed Solution
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}