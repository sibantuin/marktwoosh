import Image from "next/image";
import { testimonials } from "@/app/data/constant";

export default function Testimonials() {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-left mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h2>
                <p className="text-[#FFF]/35 max-w-xl text-lg text-left mb-12">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit semper dala?<br />
                    elementum tempus hac tellust libero accumsan.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-[#FFF]/15 p-8 rounded-xl border border-[#FFF]/30 hover:border-[#7BDB16]/50 transition-all duration-300 group relative pb-20 bg-gradient-to-t from-[#0f0f0f] to-transparent"
                    >
                        <Image
                            src={testimonial.company}
                            width={100}
                            height={100}
                            alt={testimonial.name + " logo"}
                            className="w-32 h-auto mb-6 object-contain"
                        />
                        <p className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                            {testimonial.quote}
                        </p>
                        <p className="text-white mb-8 leading-relaxed">{testimonial.text}</p>
                        <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-4">
                            <div className="pt-4">
                                <p className="font-semibold text-lg">{testimonial.name}</p>
                                <p className="text-sm mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}