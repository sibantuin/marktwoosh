import Image from "next/image";

export default function CalltoAction() {
    return (
        <section>
            <div className="bg-black relative overflow-hidden py-10">
                <div className="relative z-10 p-16 flex flex-col items-center justify-center text-center">
                    <Image
                        src="/decoration/dec_cta.svg"
                        alt="Call to Action"
                        width={1920}
                        height={1080}
                        className="w-5/9 items-center justify-center h-auto object-cover hover:text-white transition-all hover:text-white hover:text-shadow-[0_0_24px_rgba(255,255,255,0.8)]"
                    />
                </div>
            </div>
        </section>
    )
}