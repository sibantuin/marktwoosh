'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const steps = [
    {
        title: "Step 1",
        content:
            "We handle everything from branding and websites to content and paid ads — backed by AI, executed by real people, and managed like we’re part of your team. No corporate fluff. No ghosting. Just high-quality support that scales with you. We built the service we wished existed when we were in your shoes. Now, it’s yours. Let’s Woosh!",
    },
    {
        title: "Step 2",
        content:
            "After working in digital marketing since 2016, I experienced the same pain points again and again — watching small and medium-sized businesses with real potential struggle to access the kind of marketing support they deserved. And it wasn’t just me. A group of us — designers, performance marketers, content strategists — all from different corners of the marketing world",
    },
    {
        title: "Step 3",
        content:
            "— kept running into the same frustration: Great brands were being held back by bloated agencies, inconsistent freelancers, or DIY tools that created more confusion than growth. So, we came together to build MarktWoosh — a done-for-you marketing service that’s fast, affordable, and built to deliver real results.",
    },
];

export default function AboutUs() {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="bg-black relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-10">
                    <h1 className="text-4xl font-semibold text-white">
                        About us
                    </h1>
                    <h1 className="text-4xl font-semibold text-[#7BDB16]">
                        Built by marketers who’ve seen it all
                        <br />— and had enough.
                    </h1>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center py-10">
                    <h1 className="text-2xl text-[#01FE84] font-semibold mb-6">
                        Our Story
                    </h1>
                    <div className="flex items-center mb-10">
                        {steps.map((_, index) => (
                            <div key={index} className="flex items-center">
                                {/* Dot */}
                                <div
                                    onClick={() => setCurrentStep(index)}
                                    className={`w-7 h-7 rounded-full border-4 cursor-pointer flex items-center justify-center transition-all duration-300
                    ${index === currentStep
                                            ? "border-[#01FE84]"
                                            : index < currentStep
                                                ? "border-[#01FE84]"
                                                : "border-white"}`}
                                >
                                    <div
                                        className={`w-6 h-6 rounded-full transition-all duration-300
                        ${index <= currentStep ? "bg-white" : "bg-white"}`}
                                    />
                                </div>
                                {/* Line */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-20 h-1  transition-all duration-300
                        ${index < currentStep ? "bg-[#01FE84] gradient-t-r from-[#01FE84] to-[#FFF] " : "gradient-t-r from-[#01FE84] to-[#FFF] bg-white"}`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-[#ccc] max-w-3xl px-4">
                        {steps[currentStep].content}
                    </p>
                </div>

                {/* Team Section */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-10">
                    <h2 className="text-2xl text-white font-semibold py-2">
                        Meet our team members
                    </h2>
                    <p className="text-[#FFF]/50">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida <br />
                        malesuada quam commodo id integer nam.
                    </p>
                    <div className="mt-10 flex justify-center items-start gap-x-48">
                        {["Alexander Khadzhibekov", "Darwin Wiranda", "Unknown"].map((name, idx) => (
                            <div className="flex flex-col items-center" key={idx}>
                                <Image
                                    src="dec_imgplaceholder.svg"
                                    alt={`Team Image ${idx + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-48 h-48 rounded-lg mb-6"
                                />
                                <p className="text-white font-bold text-[24px]">{name}</p>
                                <p className="text-[#01FE84] text-[20px]">
                                    {idx === 0 ? "SOCIAL MEDIA EXPERT" : idx === 1 ? "FOUNDER / CEO" : "UI / UX DESIGNER"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}