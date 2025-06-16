import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-4 sm:px-6 md:px-20">
            <div className="max-w-6xl mx-auto border border-[#575757] rounded-t-[40px] pt-20 px-4 sm:px-6 md:px-20 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-6">
                        <Image
                            src="/favicon_marktwoosh.svg"
                            alt="Marktwoosh Logo"
                            width={100}
                            height={100}
                            className="w-24 h-24"
                        />
                        <p className="text-sm text-white leading-relaxed text-justify text-left md:text-left max-w-md">
                            To make high-quality digital marketing services affordable and accessible for everyone, enabling businesses of all sizes to market smarter and grow faster.
                        </p>

                        <div className="flex gap-6">
                            {["fb", "ig", "x", "linkedin"].map((icon) => (
                                <Link href="#" key={icon}>
                                    <Image
                                        src={`/icon/ic_${icon}.svg`}
                                        alt={icon}
                                        width={24}
                                        height={24}
                                        className="hover:scale-110 transition-transform duration-200"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold">Contact Us</h4>
                        <p>123-456-7890</p>
                        <p>hello@marktwoosh.com</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold">Company</h4>
                        <p>Imprint</p>
                        <p>Data Privacy and Policy</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    Copyright © 2025 Marktwoosh
                </div>
            </div>
        </footer>
    );
}