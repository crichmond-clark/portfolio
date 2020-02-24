import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../sass/aboutMe.scss';

const AboutMePage = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="about-me-main">
        <p className="about-me-p-1">
          Hello, I'm a part-time 3rd year Computing & IT student studying at The
          Open University. As well as a hopeful web developer. I have discovered
          a passion for programming, the feeling of achievement when finally
          finding a solution to a problem has left me hooked and wanting more.
        </p>
        <div className="tech-stack">
          <h2>My technology stack is</h2>
          <div>
            <FontAwesomeIcon icon={faHtml5} className="icon" />
            <p>HTML5</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
            <p>CSS3</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJsSquare} className="icon" />
            <p>JavaScript (ES6)</p>
          </div>
          {/* <div>
            <FontAwesomeIcon icon={faSass} className="icon" />
            <p>Sass</p>
          </div> */}
        </div>
        <div className="tech-learning">
          <h2>Currently learning</h2>
          <div>
            <FontAwesomeIcon icon={faReact} className="icon" />
            <p>React</p>
          </div>
        </div>
        <p className="about-me-p-2">
          In my spare time, if i'm not coding then I am likely enjoying a game
          of overwatch with my friends or spending some quality time with my
          cat.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMePage;
