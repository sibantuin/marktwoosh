import { motion } from 'framer-motion';

function HookButton({ text }) {
    return (
        <motion.button
            className="group font-semibold relative rounded-full px-8 py-2 text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7BDB16] to-[#7BDB16]/0 backdrop-blur-lg" />

            <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.4 }
                }}
            />

            {/* Animated Text */}
            <motion.span
                className="relative z-10 text-white"
                whileHover={{
                    color: '#ffffff',
                    x: 5,
                    transition: { duration: 0.3 }
                }}
            >
                {text}
            </motion.span>
        </motion.button>
    );
}

export default HookButton;