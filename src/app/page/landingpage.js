import Image from "next/image";
import HookButton from "../components/HookButton";
import Link from "next/link";

export default function LandingPage() {
    return (
        <section>
            <div className="relative min-h-screen overflow-hiddens mt-16 mb-36">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src="/decoration/dec_circle.svg"
                        alt="Background Pattern"
                        width={1125}
                        height={1125}
                        className="w-225 h-225"
                    />
                </div>
                <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center">
                    <h1 className="text-gradient mb-8 text-4xl font-semibold md:text-6xl lg:text-7xl">
                        Ready, Set, Woosh!
                    </h1>
                    <p className="mb-12 max-w-2xl text-sm text-[#7C7C7C] md:text-2xl">
                        Where fast meets smart: AI-powered growth <br /> services
                    </p>
                    <Link href={`../pricing`}>
                        <HookButton text={"Get Started"} />
                    </Link>
                </div>
            </div>
        </section>
    )
}