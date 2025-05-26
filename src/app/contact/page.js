
"use client";

import { useState } from "react";
import HookButton from "../components/HookButton";
import Navbar from "../components/Navbar";

export default function Contact() {
    const [activeTag, setActiveTag] = useState("Monthly");
    const tags = ["Monthly", "Boost", "Scale", "Dominate"];

    return (
        <>
            <Navbar />
            <div className="bg-black">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        {/* Left Section */}
                        <div className="relative z-10 flex flex-col items-left justify-center text-left">
                            <span className="font-semibold text-base text-[#7BDB16]">
                                Let’s Discuss Your Needs
                            </span>
                            <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl text-white">
                                Contatcs us
                            </h1>
                            <p className="text-white mt-2">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
                            </p>
                            <p className="text-white mt-2">hello@marktwoosh.com</p>
                            <p className="text-white">(123) 456 - 789</p>
                            <p className="text-white">Lorem ipsum dolor sit</p>
                        </div>

                        {/* Right Section */}
                        <div className="rounded-[33px] shadow-lg p-8 bg-black/10">
                            <form className="space-y-8">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Company */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Phone</label>
                                        <input
                                            type="tel"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Company</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                                        placeholder="Please type your message here..."
                                    />
                                </div>

                                {/* Tag Buttons */}
                                <div className="flex justify-center space-x-4 mb-12">
                                    {tags.map((tag, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setActiveTag(tag)}
                                            className={`px-6 py-2 rounded-full text-sm border transition-all duration-300 ${activeTag === tag
                                                ? "bg-[#7BDB16] text-black border-[#7BDB16]"
                                                : "bg-[#7BDB16]/10 text-[#7BDB16] border-[#7BDB16]/30 hover:bg-[#7BDB16]/20"
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>

                                {/* Submit Button */}
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
    );
}