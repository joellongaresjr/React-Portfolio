import ProjectCard from "../components/Project/ProjectCard";

import Nutridiary from "../assets/images/Project Logo.png"
import TriviaMania from "../assets/images/TRIVIA MANIA (4).png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "NutriDiary",
      img: Nutridiary,
      deployedUrl: "https://meanbean87.github.io/ucb-project-one/",
      repoUrl: "https://github.com/MeanBean87/ucb-project-one",
    },
    {
      id: 2,
      title: "Trivia Mania",
      img: TriviaMania,
      deployedUrl: "https://trivia-mania-34ca81ef04dc.herokuapp.com/",
      repoUrl: "https://github.com/gsr142/Trivia-Mania",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white border-2 border-[#FCB97D] p-8 mb-8">
        <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;