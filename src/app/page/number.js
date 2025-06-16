'use client';

export default function Number() {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="mb-12 font-bold text-3xl sm:text-4xl md:text-5xl">
                    MarktWoosh in Numbers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
                    <div>
                        <h3 className="text-4xl font-bold text-[#8CF719] mb-2">99%</h3>
                        <p className="font-bold text-base sm:text-lg md:text-xl text-white">
                            Customer satisfaction <br /> Based on real reviews
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#8CF719] mb-2">28+</h3>
                        <p className="font-bold text-base sm:text-lg md:text-xl text-white">
                            Brands Served and <br /> Developed
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#8CF719] mb-2">240%</h3>
                        <p className="font-bold text-base sm:text-lg md:text-xl text-white">
                            Average Growth <br /> After 3 Months
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#8CF719] mb-2">3x</h3>
                        <p className="font-bold text-base sm:text-lg md:text-xl text-white">
                            Faster Delivery <br /> Than Traditional <br /> Agencies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}