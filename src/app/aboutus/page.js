'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutUsSteps, teamMembers } from '@/app/data/constant';

export default function AboutUs() {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div className="bg-black min-h-screen mt-20">
            <Navbar />
            <div className="bg-black relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-[100px]">
                    <h1 className="text-4xl font-semibold text-white mb-[25px]">
                        About us
                    </h1>
                    <h1 className="text-4xl font-semibold text-[#8CF719]">
                        Built By Marketers Who've Seen It All
                        <br />— And Had Enough.
                    </h1>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center pb-[100px]">
                    <h1 className="text-2xl text-[#8CF719] font-semibold mb-[50px]">
                        Our Story
                    </h1>
                    <div className="flex items-center mb-10">
                        {aboutUsSteps.map((_, index) => (
                            <div key={index} className="flex items-center">
                                <div
                                    onClick={() => setCurrentStep(index)}
                                    className={`w-7 h-7 rounded-full border-4 cursor-pointer flex items-center justify-center transition-all duration-300
                                    ${index === currentStep
                                            ? "border-[#8CF719]"
                                            : index < currentStep
                                                ? "border-[#8CF719]"
                                                : "border-white"}`}
                                >
                                    <div
                                        className={`w-6 h-6 rounded-full transition-all duration-300
                                        ${index <= currentStep ? "bg-white" : "bg-white"}`}
                                    />
                                </div>
                                {index < aboutUsSteps.length - 1 && (
                                    <div className="w-20 h-1 rounded-full overflow-hidden relative">
                                        <div
                                            className="absolute inset-0 transition-all duration-500"
                                            style={{
                                                background: index < currentStep
                                                    ? "linear-gradient(to right, #8CF719, #8CF719)"
                                                    : index === currentStep
                                                        ? "linear-gradient(to right, #8CF719, #b2f58a, #e3fad0, #ffffff)"
                                                        : "linear-gradient(to right, #ffffff, #ffffff)"
                                            }}
                                        />
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                    <div className="min-h-[160px] relative max-w-3xl px-4">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentStep}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-[#FFF] text-[28px] text-justify font-light"
                                dangerouslySetInnerHTML={{ __html: aboutUsSteps[currentStep].content }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center pb-[100px]">
                    <h2 className="text-6xl text-white font-semibold pb-[10px]">
                        Meet our team members
                    </h2>
                    <p className="text-[#8CF719] font-light">
                        We're not just a team—we're your growth partners. With a blend of <br />
                        creativity, data-driven strategies, and tech expertise.
                    </p>
                    <div className="mt-[50px] flex justify-center items-start gap-x-48">
                        {teamMembers.map((member, idx) => (
                            <div className="flex flex-col items-center w-56" key={idx}>
                                <Image
                                    src={member.image}
                                    alt={`Team Image ${idx + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-48 h-48 rounded-lg mb-6"
                                />
                                <div className="flex flex-col items-center text-center min-h-[120px] justify-center">
                                    <p className="text-white font-bold text-[24px] leading-tight">
                                        {member.name}
                                    </p>
                                    <p className="text-[#8CF719] text-[20px] mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}