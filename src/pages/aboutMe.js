import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../sass/aboutMe.scss';

const AboutMePage = () => {
  return (
    <div className="container">
      <Navigation />
      <main>
        <p>
          Hello, I'm a part-time 3rd year Computing & IT student studying at The
          Open University. As well as a hopeful web developer. I have discovered
          a passion for programming, the feeling of achievement when finally
          finding a solution to a problem has left me hooked and wanting more.
        </p>
        <div>
          <h2>My technology stack is</h2>
          <div>
            <FontAwesomeIcon icon={faHtml5} className="fa-icon" />
            <p>HTML5</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3Alt} className="fa-icon" />
            <p>CSS3</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJsSquare} className="fa-icon" />
            <p>JavaScript (ES6)</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSass} className="fa-icon" />
            <p>Sass</p>
          </div>
        </div>
        <div>
          <h2>Currently learning</h2>
          <div>
            <FontAwesomeIcon icon={faReact} className="fa-icon" />
            <p>React</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMePage;
