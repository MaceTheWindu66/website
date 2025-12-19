import React from "react";
import { motion } from "framer-motion";
import { Music, Globe2, Cpu, Mountain } from "lucide-react";

// ----- Types -----
type Interest = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type AboutPhoto = {
  src: string;
  alt: string;
  label: string;
};

// ----- Image imports (update these paths to your actual images) -----
import musicPhoto from "../images/music.jpg";     // e.g. src/assets/...
import travelPhoto from "../images/travel.jpg";


// ----- Floating animation -----
const floatKeyframes = {
  y: [0, -8, 0],
  boxShadow: [
    "0 18px 45px rgba(0,0,0,0.45)",
    "0 25px 60px rgba(0,0,0,0.7)",
    "0 18px 45px rgba(0,0,0,0.45)",
  ],
};

const getFloatTransition = (delay: number) => ({
  duration: 4,
  repeat: Infinity as const,
  ease: "easeInOut" as const,
  delay,
});

// ----- Data -----
const interests: Interest[] = [
  {
    title: "Music",
    description:
      "I love writing, recording, and jamming—it's my favorite creative outlet outside of code.",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Travel",
    description:
      "Exploring new places and cultures keeps me curious, adaptable, and always learning.",
    icon: <Globe2 className="w-6 h-6" />,
  },
  {
    title: "AI & Robotics",
    description:
      "I’m fascinated by intelligent systems—everything from humanoid robots to applied ML.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Outdoors",
    description:
      "Hiking and being outside help me reset, think clearly, and come back with better ideas.",
    icon: <Mountain className="w-6 h-6" />,
  },
];

const aboutPhotos: AboutPhoto[] = [
  {
    src: musicPhoto,
    alt: "Playing music",
    label: "Music 🎸",
  },
  {
    src: travelPhoto,
    alt: "Traveling",
    label: "Travel 🌍",
  },
];

// ----- Component -----
export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Text + photos row */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center mb-14">
          {/* About text */}
          <div className="space-y-4 text-sm md:text-base text-gray-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              About Me
            </h2>
            <p>
              I'm a software engineer who loves building things at the
              intersection of systems, AI, and thoughtful user experience. I
              enjoy taking complex problems and turning them into intuitive,
              reliable tools.
            </p>
            <p>
              Outside of engineering, passions such as music, travel, and being outdoors keep me
              curious, grounded, and inspired. They shape how I think, work, and
              collaborate with others.
            </p>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3">
            {aboutPhotos.map((photo, index) => (
              <motion.div
                key={photo.label}
                className={`col-span-1 ${
                  index === 0 ? "row-span-2" : "row-span-1"
                }`}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-32 md:h-40 lg:h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs md:text-sm text-gray-400">
                  {photo.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Beyond Engineering
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            A few things that shape how I think, work, and build outside of pure
            code.
          </p>
        </div>

        {/* Floating interest cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              className="relative rounded-2xl bg-gradient-to-b from-[#181818] to-[#090909] border border-white/5 p-5 flex flex-col gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
              animate={floatKeyframes}
              transition={getFloatTransition(i * 0.3)}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 35px 80px rgba(88,101,242,0.55)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]">
                  <div className="rounded-full bg-black px-3 py-2 flex items-center gap-2">
                    {interest.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg">{interest.title}</h4>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
