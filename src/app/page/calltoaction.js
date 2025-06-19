'use client';

import Image from 'next/image';

export default function CalltoAction() {
    return (
        <section>
            <div className="bg-black relative overflow-hidden">
                <div className="relative z-10 px-16 sm:px-16 md:px-26 lg:px-32 flex flex-col items-center justify-center text-center">
                    <Image
                        src="/decoration/dec_cta.svg"
                        alt="Call to Action"
                        width={1920}
                        height={1080}
                        className="w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
