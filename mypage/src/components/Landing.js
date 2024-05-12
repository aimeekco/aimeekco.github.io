import ProjectCard from '../components/ProjectCard';
import ConveyorBelt from '../components/ConveyorBelt';


const projects = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  title: `Project ${index + 1}`,
  description: `Description of Project ${index + 1}`,
  imageUrl: '/images/project1.jpg',
  link: `https://example.com/project${index + 1}`
}));

export default function Landing() {
  return (
    <main className="main">
      <ConveyorBelt>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </ConveyorBelt>
    </main>
  );
}