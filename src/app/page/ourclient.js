import { ourClient } from "../data/constant";
import Image from "next/image";

export default function OurClient() {
    return (
        <div className="relative overflow-hidden mb-[56px]">
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="font-semibold text-[#7BDB16]">
                    Our Clients
                </span>
                <h1 className="mb-[56px] text-4xl font-semibold md:text-6xl lg:text-7xl">
                    From startups to scaleups <br /> and beyond
                </h1>
                {/* Client Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl px-4">
                    {ourClient.map((client, index) => (
                        <div
                            key={index}
                            className="group relative p-2 hover:opacity-100 opacity-80 transition-opacity duration-300"
                        >
                            <Image
                                src={client.img}
                                alt={`${client.img.split('_')[1].split('.')[0]} logo`}
                                width={160}
                                height={80}
                                className="object-contain h-12 w-full group-hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}