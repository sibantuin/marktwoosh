import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { portfolioDetails } from '@/app/data/constant';
import OurWork from '@/app/page/ourwork';
import Image from 'next/image';
import Link from 'next/link';

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
    if (!data) return <div className="text-white p-10">Project not found</div>;

    return (
        <div className="bg-black text-white min-h-screen mt-20">
            <Navbar />
            <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-center text-[55px] font-bold mb-6"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />
                {data.logo && (
                    <div className="flex justify-center mb-8">
                        <Image
                            src={data.logo}
                            alt={`${data.client} logo`}
                            width={900}
                            height={250}
                        />
                    </div>
                )}
                <p className="text-justify text-[35px] mx-auto font-semibold text-white mb-12">{data.description}</p>
                {data.sections.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-[#83E617] text-[80px] font-bold mb-4">{section.heading}</h2>

                        {section.content && (
                            Array.isArray(section.content)
                                ? section.content.map((p, idx) => (
                                    <p key={idx} className="text-white text-[35px] text-justify font-regular mb-8">{p}</p>
                                ))
                                : section.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-white text-[35px] text-justify font-regular mb-4">{paragraph}</p>
                                ))
                        )}
                        {section.bullets && (
                            <ul className="list-disc list-inside text-[35px] text-white text-justify mb-24">
                                {section.bullets.map((bullet, i) => (
                                    <li className="mb-4" key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
                                ))}
                            </ul>
                        )}
                        {section.subsections && (
                            <div className="space-y-4">
                                {section.subsections.map((sub, i) => (
                                    <div key={i}>
                                        {sub.title && (
                                            <p className="text-[#83E617] text-[50px] font-bold mb-4">
                                                {sub.title}
                                            </p>
                                        )}
                                        {sub.content && (
                                            <p
                                                className="text-white text-[35px] text-justify font-regular mb-8"
                                                dangerouslySetInnerHTML={{ __html: sub.content }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}


                        {section.image && (
                            <div className="flex justify-center">
                                <Image
                                    src={section.image}
                                    alt={`${data.client || "Client"} case image`}
                                    width={900}
                                    height={250}
                                    className="rounded-xl w-400 my-12"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <OurWork />
            <div className='flex justify-center gap-4 mb-12'>
                <Link href={`../pricing`}>
                    <button className="bg-[#83E617] text-black font-semibold px-12 py-3 rounded-full">
                        Get in Touch
                    </button>
                </Link>
                <Link href={`../pricing`}>
                    <button className="text-white px-6 py-3 rounded-full border-[#83E617] border-1">
                        View case studies
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}