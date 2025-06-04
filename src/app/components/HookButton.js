function HookButton({ text }) {
    return (
        <button className="group font-semibold relative rounded-full bg-gradient-to-br from-[#7BDB16] to-[#7BDB16]/0 px-8 py-2 text-lg backdrop-blur-lg">
            <span>{text}</span>
        </button>
    )
}

export default HookButton