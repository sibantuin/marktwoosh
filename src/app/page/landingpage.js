'use client';

import Image from "next/image";
import HookButton from "../components/HookButton";
import Link from "next/link";

export default function LandingPage() {
    return (
        <section>
            <div className="relative min-h-screen overflow-hidden mt-16 mb-36 px-4 sm:px-6 md:px-10">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src="/decoration/dec_circle.svg"
                        alt="Background Pattern"
                        width={1125}
                        height={1125}
                        className="max-w-[90%] sm:max-w-full h-auto translate-y-[-20%] sm:translate-y-0"
                    />
                </div>
                <div className="relative z-8 flex h-[80vh] sm:h-screen flex-col items-center justify-center text-center">
                    <h1 className="text-gradient mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                        Ready, Set, Woosh!
                    </h1>
                    <p className="mb-10 max-w-xs sm:max-w-lg text-base sm:text-lg md:text-xl lg:text-2xl text-[#8CF719]">
                        Where fast meets smart: <br className="hidden sm:block" /> AI-powered growth services
                    </p>
                    <Link href={`../pricing`}>
                        <HookButton text={"Get Started"} />
                    </Link>
                </div>
            </div>
        </section>
    )
}