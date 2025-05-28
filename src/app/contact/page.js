"use client";

import { useState } from "react";
import HookButton from "../components/HookButton";
import Navbar from "../components/Navbar";

export default function Contact() {
    const [activeTag, setActiveTag] = useState("Monthly");
    const tags = ["Monthly", "Boost", "Scale", "Dominate"];

    return (
        <>
            <div className="bg-black">
                <Navbar />
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-10 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        {/* Left Section */}
                        <div className=" flex flex-col items-left">
                            <span className="font-semibold text-base text-[#7BDB16]">
                                Let’s Discuss Your Needs
                            </span>
                            <h1 className="mb-4 text-xl font-semibold md:text-2xl lg:text-4xl text-white">
                                Contact us
                            </h1>
                            <p className="text-white mb-12">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> nulla adipiscing tincidunt interdum tellus du.
                            </p>
                            {/* Email */}
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/ic_mail.svg" alt="Email Icon" className="w-5 h-5" />
                                <p className="text-white">hello@marktwoosh.com</p>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/ic_phone.svg" alt="Phone Icon" className="w-5 h-5" />
                                <p className="text-white">(123) 456 - 789</p>
                            </div>
                            {/* Location */}
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/ic_location.svg" alt="Location Icon" className="w-5 h-5" />
                                <p className="text-white">Lorem ipsum dolor sit</p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="rounded-[33px] shadow-lg p-8 bg-[#FFF]/20 bg-gradient-to-t from-[#0f0f0f] to-transparent">
                            <form className="space-y-8">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-white">Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 pl-6 block w-full rounded-full border-gray-300 text-[#9795B5] font-regular bg-white shadow-sm p-3"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 pl-6 block w-full rounded-full border-gray-300 text-[#ADABC3] font-regular bg-white shadow-sm p-3"
                                            placeholder="example@mail.com"
                                        />
                                    </div>
                                </div>
                                {/* Phone & Company */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-white">Phone</label>
                                        <input
                                            type="tel"
                                            className="mt-1 pl-6 block w-full rounded-full border-gray-300 text-[#9795B5] font-regular bg-white shadow-sm p-3"
                                            placeholder="(123) 456-789"

                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white">Company</label>
                                        <input
                                            type="text"
                                            className="mt-1 pl-6 block w-full rounded-full border-gray-300 bg-white text-[#ADABC3] font-regular shadow-sm p-3"
                                            placeholder="MarktWoosh"

                                        />
                                    </div>
                                </div>
                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-white">Message</label>
                                    <textarea
                                        rows={4}
                                        className="mt-1 pl-6 block w-full rounded-[21px] border-gray-300 bg-white text-[#9795B5] font-regular shadow-sm p-3"
                                        placeholder="Please type your message here..."
                                    />
                                </div>
                                {/* Tag Buttons */}
                                <div className="flex justify-left space-x-4 mb-8">
                                    {tags.map((tag, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setActiveTag(tag)}
                                            className={`px-6 py-1 rounded-full text-sm border transition-all duration-300 ${activeTag === tag
                                                ? "bg-[#83E617] text-black border-[#7BDB16] border-1.5"
                                                : "text-white border-[#83E617] hover:bg-[#7BDB16]/20  border-1.5"
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </form>
                            <div className="pb-12">
                                <HookButton text={"send message"} />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#FFF]/35 mt-20 pt-8 text-center text-base">
                        Copyright © 2025 Marktwoosh
                    </div>
                </div>
            </div>
        </>
    );
}