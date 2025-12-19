import ProjectCard from "../components/ProjectCard";
import type { Project } from "../components/ProjectCard";
import ProjectCarousel from "../components/ProjectCarousel";
import RobotImg from "../../public/finely.png";
import RolintImg from "../../public/Rolint_Logo.jpg";
import sentAnalysis from "../images/sentanalysis.png"
import BWImg from "../images/B&WHospital.png"


const projects: Project[] = [
  {
    title: "3D Printed Humanoid Robot",
    description:
      "Bipedal humanoid robot that uses deep reinforcement learning for walking and standing.",
    image: RobotImg,
    tags: [
      "Python",
      "Embedded Systems",
      "Machine Learning",
      "Software Engineering",
    ],
    link: "https://github.com/KoalbyMQP",
  },
  {
    title: "RoLint",
    description:
      "Embedded systems linter released as an open-source package on PyPI.",
    image: RolintImg,
    tags: ["Python", "C/C++", "CI/CD", "Embedded Systems", "Software Engineering"],
    link: "https://pypi.org/project/rolint/",
    imgStyle: { objectPosition: "center 45%" },
  },
  {
    title: "Brigham and Women's Hospital Application",
    description:
      "A full-stack web application built for Brigham and Women's Hospital.",
    image: BWImg,
    tags: ["React", "TypeScript", "Java", "PostgreSQL", "AWS"],
    link: "https://github.com/MaceTheWindu66/Hospital-Website",
  },
  {
    title: "Driver Station",
    description:
      "A web-based interface for running, testing, and uploading code to an embedded system.",
    image: "",
    tags: ["React", "TypeScript", "Java", "Firebase", "Firestore"],
    link: "",
  },
  {
    title: "Sentiment Analysis with Artificial Intelligence",
    description:
      "Implemented multiple ML models to classify sentiment in social media posts.",
    image: sentAnalysis,
    tags: [
      "Python",
      "Scikit-Learn",
      "PyTorch",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    link: "https://github.com/MaceTheWindu66/TweetSentimentAnalysis",
  },
  {
    title: "Scaling Climate Action in Major German Cities",
    description:
      "Assisted a German startup with scaling climate initiatives across Berlin and other cities.",
    image: "",
    tags: ["Data Analysis"],
    link: "https://digital.wpi.edu/concern/student_works/9p290f78q?locale=en",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-black text-white flex flex-col items-center"
    >
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="text-center mb-12">
          <span className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                            Projects
            </span>
          <p className="mt-3 text-sm md:text-base text-gray-300">
            A selection of projects I've completed or participated on throughout the years!
          </p>
        </header>

        <ProjectCarousel>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectCarousel>
      </div>
    </section>
  );
}
