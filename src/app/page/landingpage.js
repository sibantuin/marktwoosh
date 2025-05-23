import Image from "next/image";
import HookButton from "../components/HookButton";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 flex items-center justify-center ">
                <Image
                    src="/dec_circle.svg"
                    alt="Background Pattern"
                    width={900}
                    height={900}
                />
            </div>
            <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center">
                <h1 className="text-gradient mb-8 text-4xl font-semibold md:text-6xl lg:text-7xl">
                    Ready, Set, Woosh!
                </h1>
                <p className="mb-12 max-w-2xl text-sm text-[#7C7C7C] md:text-2xl">
                    Where fast meets smart: AI-powered growth <br /> services
                </p>
                <HookButton text={"Get Started"} />
            </div>
        </div>
    )
}