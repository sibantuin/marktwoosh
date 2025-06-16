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
            <div className="bg-black relative overflow-hidden px-4 sm:px-6 md:px-10">
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-20">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                        About us
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8CF719]">
                        Built By Marketers Who&rsquo;ve Seen It All
                        <br />— And Had Enough.
                    </h1>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center pb-20 px-4">
                    <h1 className="text-xl sm:text-2xl text-[#8CF719] font-semibold mb-10">
                        Our Story
                    </h1>
                    <div className="flex items-center flex-wrap justify-center mb-10">
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
                                        className={`w-6 h-6 rounded-full transition-all duration-300 bg-white`}
                                    />
                                </div>
                                {index < aboutUsSteps.length - 1 && (
                                    <div className="w-20 sm:w-20 h-1 rounded-full overflow-hidden relative">
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
                                className="text-white text-lg sm:text-xl md:text-2xl text-justify font-light"
                                dangerouslySetInnerHTML={{ __html: aboutUsSteps[currentStep].content }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center pb-20 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold pb-4">
                        Meet our team members
                    </h2>
                    <p className="text-[#8CF719] text-sm sm:text-base font-light mb-10">
                        We&rsquo;re not just a team—we&rsquo;re your growth partners. With a blend of <br className="hidden sm:block" />
                        creativity, data-driven strategies, and tech expertise.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {teamMembers.map((member, idx) => (
                            <div className="flex flex-col items-center w-full" key={idx}>
                                <Image
                                    src={member.image}
                                    alt={`Team Image ${idx + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg mb-4"
                                />
                                <div className="flex flex-col items-center text-center min-h-[100px] justify-center">
                                    <p className="text-white font-bold text-lg sm:text-xl leading-tight">
                                        {member.name}
                                    </p>
                                    <p className="text-[#8CF719] text-sm sm:text-base mt-1">
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