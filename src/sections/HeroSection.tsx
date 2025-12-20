import Headshot from "../components/Headshot";
import { motion } from "framer-motion"

export default function HeroSection() {
    
    return (
        <section className="h-screen flex items-center flex-row">
            <div className="flex items-center text-center flex-col">
                <div className="mb-13">
                    <Headshot />
                </div>
                <div>
                    <h1 className="text-6xl font-bold">
                        <span className="text-8xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                            Hello, I'm Maddux
                        </span>
                    </h1>
                </div>
                <div className="text-2xl mt-8 w-2xl">
                    Passionate <span className="font-bold">Full-Stack Software Engineer</span> and <span className="font-bold">AI/Systems Engineer</span>, dedicated to creating innovative
                    and effective solutions to challenging problems.
                </div>
               <motion.a
                    href="#projects"
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] mt-4"
                    >
                    <div className="flex items-center gap-2 bg-black rounded-xl px-6 py-3">
                        <span className="text-lg text-white font-bold">
                        View My Projects!
                        </span>
                    </div>
                </motion.a>

                <motion.a
                    href="#contact"
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] mt-4"
                    >
                    <div className="flex items-center gap-2 bg-black rounded-xl px-6 py-3">
                        <span className="text-lg text-white font-bold">
                        Contact Me!
                        </span>
                    </div>
                </motion.a>
            </div>
        </section>
    );

};

