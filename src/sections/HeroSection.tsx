import Headshot from "../components/Headshot";


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
                <button className=" mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform hover:scale-105 transition duration-300">
                    
                    <a
                        href="#projects"
                    > 
                        <span className="text-lg text-white font-bold">View My Projects!</span>
                    </a>
                </button>
            </div>
        </section>
    );

};

