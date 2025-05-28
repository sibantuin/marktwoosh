import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 px-4">
            <div className="max-w-6xl mx-auto border border-gray-700 rounded-t-3xl p-4 md:p-10">
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    <div className="space-y-6 text-center md:text-left">
                        <Image
                            src="/favicon_marktwoosh.svg"
                            alt="Marktwoosh Logo"
                            width={100}
                            height={100}
                            className="w-25 h-25 mx-auto md:mx-0"
                        />
                        <p className="text-gray-300 text-sm">
                            Lorem ipsum dolor sit amet consectetur <br />adipiscing elit nulla adipiscing tincidunt<br /> interdum tellus du.
                        </p>
                        <div className="flex justify-center md:justify-start gap-8 text-white text-xl py-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/ic_fb.svg"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/ic_ig.svg"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/ic_x.svg"
                                    alt="Twitter / X"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/ic_linkedin.svg"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-6 text-center ml-[200px] md:text-left">
                        <h4 className="font-bold text-white">Contact Us</h4>
                        <p>123-456-7890</p>
                        <p>hello@marktwoosh.com</p>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="space-y-4 text-center ml-[100px] md:text-left">
                        <h4 className="font-bold text-white">Company</h4>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Portofolio</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-base">
                    Copyright © 2025 Marktwoosh
                </div>
            </div>
        </footer>
    )
}