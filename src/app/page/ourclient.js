import Image from "next/image";
import { ourClient } from "../data/constant";

export default function OurClient() {
    return (
        <section>
            <div className="bg-black">
                <div className="relative overflow-hidden mb-[56px]">
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        <span className="font-semibold text-[#83E617]">
                            Our Clients
                        </span>
                        <h1 className="mb-[56px] text-4xl font-semibold md:text-5xl lg:text-6xl">
                            From startups to scaleups <br /> and beyond
                        </h1>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full max-w-7xl">
                            {ourClient.map((client, index) => (
                                <div
                                    key={index}
                                    className="group relative px-8"
                                >
                                    <Image
                                        src={client.img}
                                        alt={`${client.img.split('_')[1].split('.')[0]} logo`}
                                        width={160}
                                        height={80}
                                        className="object-contain h-12 w-full hover:text-gradient-to-br from-[#7BDB16] to-[#7BDB16]/0 group-hover:grayscale-1 transition-all"
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