function HookButton({ text }) {
    return (
        <button className="group relative rounded-full bg-gradient-to-r from-[#7BDB16] to-[#244006] px-8 py-4 text-lg backdrop-blur-lg ">
            <span className="mr-2">{text}</span>
        </button>
    )
}

export default HookButton
