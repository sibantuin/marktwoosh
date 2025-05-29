'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioData } from '../page';

export default function PortfolioDetail({ params }) {
    const { slug } = params;

    const project = portfolioData.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="bg-black min-h-screen text-white p-10">
                <Navbar />
                <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="max-w-5xl mx-auto text-center py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <h2 className="text-[#7BDB16] text-xl mb-6">{project.client}</h2>
                <img
                    src={project.coverImage}
                    alt={project.client}
                    className="mx-auto mb-8 rounded-md border border-[#7BDB16]"
                />
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6">
                {project.overview.map((para, idx) => (
                    <p key={idx} className="mb-4 text-gray-300 leading-relaxed">{para}</p>
                ))}
            </section>

            {/* Slider Images */}
            <section className="my-12 max-w-5xl mx-auto px-6">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                    {project.sliderImages.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="w-[300px] h-auto rounded-xl border border-[#333]"
                        />
                    ))}
                </div>
            </section>

            {/* Our Work Section (Placeholder or include component) */}
            <section className="py-16 px-6 text-center text-[#7BDB16]">
                <h2 className="text-xl mb-4">Our Work</h2>
                {/* You can import and reuse your existing section here */}
            </section>

            <Footer />
        </div>
    );
}