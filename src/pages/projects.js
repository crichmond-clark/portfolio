import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ProjectCard from '../components/projectCard';
import '../sass/projects.scss';
import calcImg from '../../static/calcthumb.png';
import conqImg from '../../static/conq.png';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Calculator',
      img: calcImg,
      alt: 'a calculator',
      desc:
        'I decided to use this project to practice what I had learned about React and experiement with CSS in JS using the styled components library. In addition to learning react, it also helped me realise the benefits of using multiple git branches during development.',
      live: 'https://musing-boyd-4d0b55.netlify.com/',
      github: 'https://github.com/crichmond-clark/react-calculator'
    },
    {
      title: 'Conquerer Template Clone',
      img: conqImg,
      alt: 'conquer template clone',
      desc:
        'I created this project using HTML and Sass using CSS Grid for the responsive layout element rather than the original template choice of bootstrap. I have personally found CSS Grid to be the most intuitive and simple way to create responsive layouts in addition to using flexbox for some more niche use cases such as navigation bars.',
      live: 'https://crichmond-clark.github.io/conquer-template-clone',
      github: 'https://github.com/crichmond-clark/conquer-template-clone'
    }
  ];
  return (
    <div className="container">
      <Navigation />
      <main className="projects-main">
        <h1 className="project-heading">Projects</h1>
        {projects.map(project => (
          <ProjectCard
            title={project.title}
            img={project.img}
            alt={project.alt}
            desc={project.desc}
            live={project.live}
            github={project.github}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
