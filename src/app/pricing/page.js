'use client';

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { pricingPlans } from "../data/constant";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);
    const plans = pricingPlans(isYearly);
    const maxFeatures = Math.max(...plans.map(p => p.features.length));

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-[130px] pb-[100px] px-4 sm:px-6 md:px-8">
                <div className="text-center mb-[50px]">
                    <h2 className="text-[#7BDB16] font-bold text-xl sm:text-2xl mb-4">Pricing Plan</h2>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-[50px]">Choose Your Best Plan</p>
                    <div className="inline-flex border border-[#7BDB16] rounded-full overflow-hidden">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 text-sm font-semibold transition duration-300 ${!isYearly ? "bg-[#7BDB16] text-black" : "text-white hover:bg-[#1a1a1a]"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 text-sm font-semibold transition duration-300 ${isYearly ? "bg-[#7BDB16] text-black" : "text-white hover:bg-[#1a1a1a]"}`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`
                                relative 
                                ${plan.title === "Boost" ? "bg-gradient-to-b from-[#FFF]/10 to-[#FFF]/5" : "bg-black"} 
                                border border-gray-800 p-6 rounded-2xl flex flex-col justify-between shadow-md hover:scale-[1.01] transition-transform duration-300
                            `}
                        >
                            {plan.badge && (
                                <span className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg ${plan.badge.color}`}>
                                    {plan.badge.text}
                                </span>
                            )}
                            <div className="min-h-[120px] flex flex-col justify-start items-center py-4">
                                <div className="inline-flex items-center justify-center space-x-2 mb-1">
                                    <h3 className="text-xl font-bold text-white leading-none">
                                        {plan.title}
                                    </h3>
                                    {plan.save && (
                                        <span className="text-[10px] mt-1 text-[#8CF719] font-regular font-light">
                                            ({plan.save})
                                        </span>
                                    )}
                                </div>
                                {plan.note && (
                                    <p className="text-sm text-center text-[#FFF]/60 font-regular">{plan.note}</p>
                                )}
                                <p className="text-sm text-center text-[#FFF]/60 font-bold mt-2">
                                    {plan.description}
                                </p>
                            </div>
                            <div className="border border-white rounded-xl text-center text-3xl font-bold mb-6">
                                <div className="inline-flex items-center justify-center py-2">
                                    ${plan.price}
                                    <span className="text-base font-regular font-light text-white ml-2">/month</span>
                                </div>
                            </div>
                            <div className="bg-linear-to-b from-[#FFF]/20 to-[#FFF]/8 rounded-xl p-4 mb-6 min-h-[320px]">
                                <ul className="space-y-3 text-sm">
                                    {Array.from({ length: maxFeatures }).map((_, j) => (
                                        <li key={j} className="flex items-start gap-2 min-h-[22px]">
                                            {plan.features[j] ? (
                                                <>
                                                    <Image src="/icon/ic_check.svg" alt="check" width={15} height={15} className="mt-1" />
                                                    <span>{plan.features[j]}</span>
                                                </>
                                            ) : <span className="w-full h-[18px]"></span>}
                                        </li>
                                    ))}
                                </ul>
                                {plan.addons !== false && (
                                    <p className="mt-4 text-sm font-semibold text-white flex justify-left gap-1">
                                        <span className="text-[#7BDB16]">+</span> Add-ons available:
                                    </p>
                                )}
                            </div>
                            <div className="mt-auto">
                                <Link href={`/contact?plan=${encodeURIComponent(plan.title)}`}>
                                    <button className={`py-3 w-full rounded-xl font-bold transition-all duration-300 ${plan.buttonStyle}`}>
                                        Get started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}