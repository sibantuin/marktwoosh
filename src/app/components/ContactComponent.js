'use client';

import { useState, useEffect } from "react";
import HookButton from "../components/HookButton";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Contact() {
    const searchParams = useSearchParams();
    const selectedPlan = searchParams.get("plan");
    const [activeTag, setActiveTag] = useState("Starter");
    const tags = ["Starter", "Boost", "Scale", "Dominate"];
    useEffect(() => {
        if (selectedPlan && tags.includes(selectedPlan)) {
            setActiveTag(selectedPlan);
        }
    }, [selectedPlan, tags]);

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 lg:pt-36">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-start mb-10 lg:mb-0">
                        <span className="font-semibold text-base text-[#7BDB16] mb-2">
                            Let&apos;s Discuss Your Needs
                        </span>
                        <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Contact us
                        </h1>
                        <p className="text-white mb-8 text-sm md:text-base">
                            Every second your website underperforms, you&apos;re losing revenue. <br className="hidden sm:block" /> Let&apos;s fix that today!
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image src="/icon/ic_mail.svg" alt="Email Icon" className="w-5 h-5" width={20} height={20} />
                            <p>hello@marktwoosh.com</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image src="/icon/ic_phone.svg" alt="Phone Icon" className="w-5 h-5" width={20} height={20} />
                            <p>(123) 456 - 789</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image src="/icon/ic_location.svg" alt="Location Icon" className="w-5 h-5" width={20} height={20} />
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>

                    <div className="rounded-[33px] shadow-lg p-6 sm:p-8 bg-[#FFF]/20 bg-gradient-to-t from-[#0f0f0f] to-transparent">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium">Name</label>
                                    <input type="text" className="mt-1 pl-6 w-full rounded-full border-gray-300 text-black bg-white shadow-sm p-3" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Email</label>
                                    <input type="email" className="mt-1 pl-6 w-full rounded-full border-gray-300 text-black bg-white shadow-sm p-3" placeholder="example@mail.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium">Phone</label>
                                    <input type="tel" className="mt-1 pl-6 w-full rounded-full border-gray-300 text-black bg-white shadow-sm p-3" placeholder="(123) 456-789" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Company</label>
                                    <input type="text" className="mt-1 pl-6 w-full rounded-full border-gray-300 text-black bg-white shadow-sm p-3" placeholder="MarktWoosh" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Message</label>
                                <textarea rows={4} className="mt-1 pl-6 w-full rounded-[21px] border-gray-300 bg-white text-black shadow-sm p-3" placeholder="Please type your message here..." />
                            </div>
                            <div className="flex flex-wrap gap-4 mb-8">
                                {tags.map((tag, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setActiveTag(tag)}
                                        className={`px-6 py-1 rounded-full text-sm border transition-all duration-300 ${activeTag === tag
                                            ? "bg-[#83E617] text-black border-[#7BDB16]"
                                            : "text-white border-[#83E617] hover:bg-[#7BDB16]/20"}`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </form>
                        <div className="pb-8">
                            <HookButton text={"Send message"} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#FFF]/35 mt-20 pt-8 text-center text-base">
                    Copyright © 2025 Marktwoosh
                </div>
            </div>
        </div>
    );
}