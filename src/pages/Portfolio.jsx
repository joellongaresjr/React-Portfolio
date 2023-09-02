import ProjectCard from "../components/Project/ProjectCard";

import Nutridiary from "../assets/images/Project Logo.png"
import TriviaMania from "../assets/images/TRIVIA MANIA (4).png"
import NoteQuest from "../assets/images/NoteQuest.png"
import CatCalendar from "../assets/images/CatCalendar.png"
import AvatarAng from "../assets/images/AvatarAng.png"
import NinjaQuiz from "../assets/images/Ninja-Quiz.png"

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
    {
      id: 3,
      title: "NoteQuest",
      img: NoteQuest,
      deployedUrl: "https://afternoon-stream-77923-18557e5e2777.herokuapp.com/",
      repoUrl: "https://github.com/joellongaresjr/NoteQuest",
    },
    {
      id: 4,
      title: "Cat Calendar",
      img: CatCalendar,
      deployedUrl: "https://joellongaresjr.github.io/cat-calendar-2023/",
      repoUrl: "https://github.com/joellongaresjr/cat-calendar-2023",
    },
    {
      id: 5,
      title: "Avatar-Ang",
      img: AvatarAng,
      deployedUrl: "https://joellongaresjr.github.io/avatar-ang/",
      repoUrl: "https://github.com/joellongaresjr/avatar-ang",
    },
    {
      id: 6,
      title: "NinjaQuiz",
      img: NinjaQuiz,
      deployedUrl: "https://joellongaresjr.github.io/Ninja-Quiz/",
      repoUrl: "https://github.com/joellongaresjr/Ninja-Quiz",
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