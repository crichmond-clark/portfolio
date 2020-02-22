import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import '../sass/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span className="name">Connor Richmond-Clark</span>
        <FontAwesomeIcon icon={faCopyright} />
        <span className="year">2020</span>
      </p>
      <span className="divider"></span>
      <div>
        <a href="https://github.com/crichmond-clark" className="icon-link">
          <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
        </a>
        <a href="https://www.linkedin.com/in/connor-richmond-clark-20ab98163/">
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
