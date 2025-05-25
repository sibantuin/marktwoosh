import HookButton from "../components/HookButton";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div>
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        {/* left Section - Form */}
                        <div className="relative z-10 flex flex-col items-left justify-center text-left">
                            <span className="font-semibold text-base text-[#7BDB16]">
                                Let’s Discuss Your Needs
                            </span>
                            <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
                                Contatcs us
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.</p>
                            <p>hello@marktwoosh.com</p>
                            <p>(123) 456 - 789</p>
                            <p>Lorem ipsum dolor sit</p>
                        </div>

                        {/* Right Section - Form */}
                        <div className="rounded-[33px] shadow-lg p-8">
                            <form className="space-y-8">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Company */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="tel"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Company</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        placeholder="Please type your message here..."
                                    />
                                </div>

                                {/* Button */}
                                <HookButton text={"send message"} />
                            </form>

                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-base">
                        Copyright © 2025 Marktwoosh
                    </div>
                </div>
            </div>
        </>
    )
}