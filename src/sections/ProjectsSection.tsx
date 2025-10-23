import ProjectCard from "../components/ProjectCard";
import type { Project } from "../components/ProjectCard";

export default function ProjectsSection() {
    
    const projects: Project[] = [
    {
      title: "3D Printed Humanoid Robot",
      description: "Bipedal Humanoid Robot that uses Deep Reinforcement Learning for walking and standing.",
      image:
        "",
      tags: ["Python", "Embedded Systems", "Machine Learning", "Software Engineering"],
      link: "https://github.com/KoalbyMQP"
    },
    {
        title: "RoLint",
        description: "Embedded Systems Linter released as an open source package on PyPi.",
        image: "",
        tags: ["Python", "C/C++", "CI/CD", "Embedded Systems", "Software Engineering"],
        link: "https://pypi.org/project/rolint/"
    },
    {
        title: "Brigham and Women's Hospital Application",
        description: "A Full-Stack web application for Brigham and Women's Hospital",
        image: "",
        tags: ["React", "TypeScript", "Java", "PostgreSQL", "Amazon Web Services"],
        link: "https://github.com/MaceTheWindu66/Hospital-Website"
    },
    {
        title: "Driver Station",
        description: "A web-based interface for running, testing, and uploading code to an embedded system",
        image: "",
        tags: ["React", "TypeScript", "Java", "Firebase", "Firestore"],
        link: ""
    },
  ];


    return (
        <section className="h-screen flex flex-col items-center">
            <div
                className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>

    );

};

