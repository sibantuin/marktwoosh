'use client';

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);

    const plans = {
        monthly: [
            {
                title: "Monthly Plans",
                price: "$129",
                features: [
                    "Logo and basic brand kit (colors, fonts)",
                    "1-page website (mobile-ready)",
                    "4 social media posts per month",
                    "Dedicated account manager (email only)",
                ],
                badge: "",
            },
            {
                title: "Boost",
                price: "$249",
                features: [
                    "Full brand kit (logo, colors, visual guide)",
                    "Up to 3-page website",
                    "8 social media posts per month",
                    "AI Discovery SEO included",
                    "1 ad campaign* (Meta or Google)",
                    "Dedicated account manager (email + chat response within 48h)",
                ],
                badge: "MOST POPULAR",
            },
            {
                title: "Scale",
                price: "$499",
                features: [
                    "Everything in Boost",
                    "Up to 5-page website or mini landing page variant",
                    "12 social media posts per month",
                    "2 ad campaigns* (Meta + Google)",
                    "Monthly performance report",
                    "Dedicated account manager (chat response within 24h)",
                ],
                badge: "BEST PERFORMANCE",
            },
            {
                title: "Dominate",
                price: "$799",
                features: [
                    "Full brand kit (logo, colors, visual guide)",
                    "Up to 3-page website",
                    "8 social media posts per month",
                    "AI Discovery SEO included",
                    "1 ad campaign* (Meta or Google)",
                    "Dedicated account manager (email + chat response within 48h)",
                ],
                badge: "",
            },
        ],
        yearly: [
            {
                title: "Yearly Plans",
                price: "$799",
                features: [
                    "Full brand kit (logo, colors, visual guide)",
                    "Up to 3-page website",
                    "8 social media posts per month",
                    "AI Discovery SEO included",
                    "1 ad campaign* (Meta or Google)",
                    "Dedicated account manager (email + chat response within 48h)",
                    "Add-ons available",
                ],
                cta: "Get started"
            },
            {
                title: "Boost",
                price: "$249",
                features: [
                    "Full brand kit (logo, colors, visual guide)",
                    "Up to 3-page website",
                    "8 social media posts per month",
                    "AI Discovery SEO included",
                    "1 ad campaign* (Meta or Google)",
                    "Dedicated account manager (email + chat response within 48h)",
                    "Add-ons available",
                ],
                highlight: "Most Popular",
                cta: "Get started",
                ctaColor: "bg-orange-500"
            },
            {
                title: "Scale",
                price: "$499",
                features: [
                    "Everything in Boost",
                    "Up to 5-page website or mini landing page variant",
                    "12 social media posts per month",
                    "2 ad campaigns* (Meta + Google)",
                    "Monthly performance report",
                    "Dedicated account manager (chat response within 24h)",
                    "Add-ons available",
                ],
                highlight: "Best Performance",
                cta: "Get started",
                ctaColor: "bg-green-500"
            },

            {
                title: "Dominate",
                price: "$799",
                features: [
                    "Full brand kit (logo, colors, visual guide)",
                    "Up to 3-page website",
                    "8 social media posts per month",
                    "AI Discovery SEO included",
                    "1 ad campaign* (Meta or Google)",
                    "Dedicated account manager (email + chat response within 48h)",
                    "Add-ons available",
                ],
                cta: "Get started"
            },
        ]
    };

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[#7BDB16] font-bold text-xl mb-4">Pricing Plan</h2>
                    <p className="text-4xl md:text-5xl font-semibold text-white">Choose Your Best Plan</p>

                    <div className="inline-flex mt-6 border border-[#7BDB16] rounded-full overflow-hidden">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 text-sm font-semibold ${!isYearly ? "bg-[#7BDB16] text-black" : "text-white"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 text-sm font-semibold ${isYearly ? "bg-[#7BDB16] text-black" : "text-white"}`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(isYearly ? plans.yearly : plans.monthly).map((plan, i) => (
                        <div key={i} className="bg-[#111] border border-gray-800 p-6 rounded-2xl text-white relative">
                            {plan.highlight && (
                                <span className="absolute top-3 right-3 text-xs font-bold text-white bg-orange-600 px-2 py-1 rounded">
                                    {plan.highlight}
                                </span>
                            )}
                            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                            <p className="text-2xl font-bold mb-4">{plan.price} <span className="text-sm font-normal">/month</span></p>
                            <ul className="space-y-2 mb-6 text-sm">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        ✅ <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-2 rounded-xl font-semibold ${plan.ctaColor || "bg-white text-black"}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {isYearly && (
                    <div className="text-white mt-20 px-4">
                        <h2 className="text-3xl font-bold mb-6">Compare Features <span className="text-gray-300">(Yearly)</span></h2>
                        <div className="overflow-auto">
                            <table className="min-w-full text-sm text-left border border-[#7BDB16]">
                                <thead>
                                    <tr className="bg-black text-white border-b border-[#7BDB16]">
                                        <th className="py-3 px-4 w-64 bg-[#101010] text-[#7BDB16]">Features</th>
                                        <th className="py-3 px-4">Starter ($149)</th>
                                        <th className="py-3 px-4">Growth ($399)</th>
                                        <th className="py-3 px-4">Premium ($499)</th>
                                        <th className="py-3 px-4">Enterprise ($799)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Ad Spend Managed", "Up to €500", "Up to €2,000", "Up to €5,000", "Custom"],
                                        ["Platforms Included", "Meta + Google", "Meta + Google + Youtube", "Meta + Google + Youtube", "Custom"],
                                        ["Creatives per Month", "3", "10", "25", "Custom"],
                                        ["Creatives Re-iteration", "3", "1x", "2x", "Custom"],
                                        ["Targeted Countries /Language", "1", "1", "Up to 3", "Custom"],
                                        ["Account Manager", "-", "Non-Dedicated", "Dedicated", "Custom"],
                                        ["Contact", "Email support", "Email support - Monthly call", "Priority email support - Bi-weekly call", "Custom"],
                                        ["Additional Features", "3", "3", "3", "Custom"],
                                    ].map((row, idx) => (
                                        <tr key={idx} className="border-b border-[#7BDB16]">
                                            {row.map((cell, cIdx) => (
                                                <td key={cIdx} className={`py-3 px-4 ${cIdx === 0 ? "text-[#7BDB16] font-medium bg-[#101010]" : ""}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-400 mt-4 italic">
                                * Ad Campaign Performance Fee:<br />
                                We apply a small fee (15%) based on your monthly ad budget — only when ads are running. It covers expert strategy, optimization, and reporting to make sure your budget works harder.
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
