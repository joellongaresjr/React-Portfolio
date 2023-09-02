function ProjectCard({ project }) {
  return (
    <div className="bg-white border-2 border-[#FCB97D] rounded px-8 pt-6 pb-8 mb-4">
      <img src={project.img} alt={project.title} className="w-full h-auto" />
      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
      <div className="mt-4">
        <a
          href={project.deployedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-700 mr-4"
        >
          Deployed
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-700"
        >
          Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;