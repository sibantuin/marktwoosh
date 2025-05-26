export default function OurWork() {
    const projects = [
        {
            title: "Creative Portfolio Website",
            description: "A modern, responsive portfolio built for a freelance designer.",
            image: "/brand_roblox.svg",
        },
        {
            title: "E-commerce Platform",
            description: "Scalable web app with integrated payment and admin dashboard.",
            image: "/brand_roblox.svg",
        },
        {
            title: "Marketing Landing Page",
            description: "High-conversion landing page for a product launch.",
            image: "/brand_roblox.svg",
        },
    ];

    return (
        <section className="text-white bg-black py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-[#7BDB16] font-bold text-2xl mb-4">Our Work</h2>
                <p className="text-4xl md:text-5xl font-bold mb-6">Some of our previous work</p>

            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-start space-y-4">
                        <div className="w-full border border-[#7BDB16] rounded-2xl flex items-center justify-center h-64 bg-black">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-24 object-contain"
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                        <a href="#" className="text-[#7BDB16] font-medium text-sm">
                            Read more
                        </a>
                    </div>
                ))}
            </div>

        </section>
    );
}