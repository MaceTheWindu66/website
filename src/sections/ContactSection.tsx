
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Contact Me!
        </span>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Whether you want to collaborate, chat about software engineering, or just say hi,
          feel free to reach out 👋
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/maddux-berry-9b94342a1/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]"
          >
            <div className="flex items-center gap-2 bg-black rounded-xl px-5 py-3">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="text-sm md:text-base">LinkedIn</span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/MaceTheWindu66"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px]"
          >
            <div className="flex items-center gap-2 bg-black rounded-xl px-5 py-3">
              <Github className="w-5 h-5 text-purple-400" />
              <span className="text-sm md:text-base">GitHub</span>
            </div>
          </motion.a>
          <motion.a
            href="mailto:madduxberry31@gmail.com"
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]"
        >
            <div className="flex items-center gap-2 bg-black rounded-xl px-5 py-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm md:text-base">Email Me</span>
            </div>
        </motion.a>
        </div>
      </div>
    </section>
  );
}
