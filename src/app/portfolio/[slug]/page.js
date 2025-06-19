import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { portfolioDetails } from '@/app/data/constant';
import OurWork from '@/app/page/ourwork';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const dynamic = 'force-static';
export async function generateStaticParams() {
    return portfolioDetails.map((item) => ({
        slug: item.slug,
    }));
}
function getData(slug) {
    return portfolioDetails.find(item => item.slug === slug);
}
export default function PortfolioDetail({ params }) {
    const data = getData(params.slug);
    if (!params?.slug || !data) return <div className="text-white p-10">Project not found</div>;

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <div className="max-w-6xl mx-auto pt-[130px] px-4 sm:px-6 md:px-10">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />
                {data.logo && (
                    <div className="flex justify-center mb-10">
                        <Image
                            src={data.logo}
                            alt={`${data.client} logo`}
                            width={900}
                            height={250}
                            className='rounded-xl max-w-full h-auto'
                        />
                    </div>
                )}
                <p className="text-justify text-base sm:text-lg md:text-xl font-semibold text-white pb-[50px]">{data.description}</p>
                {data.sections.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-[#83E617] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{section.heading}</h2>
                        {section.content && (
                            Array.isArray(section.content)
                                ? section.content.map((p, idx) => (
                                    <p key={idx} className="text-white text-base sm:text-lg md:text-xl text-justify font-regular mb-6">{p}</p>
                                ))
                                : section.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-white text-base sm:text-lg md:text-xl text-justify font-regular mb-6">{paragraph}</p>
                                ))
                        )}
                        {section.bullets && (
                            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-white text-justify mb-6">
                                {section.bullets.map((bullet, i) => (
                                    <li className="mb-4" key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
                                ))}
                            </ul>
                        )}
                        {section.subsections && (
                            <div className="space-y-6">
                                {section.subsections.map((sub, i) => (
                                    <div key={i}>
                                        {sub.title && (
                                            <p className="text-[#83E617] text-2xl sm:text-3xl font-bold mb-2">
                                                {sub.title}
                                            </p>
                                        )}
                                        {sub.content && (
                                            <p
                                                className="text-white text-base sm:text-lg md:text-xl text-justify font-regular mb-6"
                                                dangerouslySetInnerHTML={{ __html: sub.content }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {section.image && (
                            <div className="flex justify-center py-10">
                                <Image
                                    src={section.image}
                                    alt={`${data.client || "Client"} case image`}
                                    width={900}
                                    height={250}
                                    className="rounded-xl max-w-full h-auto"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <OurWork />
            <div className='flex flex-row justify-center gap-4 mb-12'>
                <div className="transition transform hover:scale-105 sm:hover:scale-110 duration-300">
                    <Link href="/pricing">
                        <button className="bg-[#83E617] text-black font-semibold rounded-full px-6 py-2 sm:px-12 sm:py-3">
                            Get in Touch
                        </button>
                    </Link>
                </div>

                <div className="transition transform hover:scale-105 sm:hover:scale-110 duration-300">
                    <Link href="/pricing">
                        <button className="text-white rounded-full border-[#83E617] border px-4 py-2 sm:px-8 sm:py-3">
                            View case studies
                        </button>
                    </Link>
                </div>
            </div>


            <Footer />
        </div>
    );
}