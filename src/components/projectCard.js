import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import '../sass/projectCard.scss';

const ProjectCard = ({ title, img, alt, desc, live, github }) => {
  return (
    <div className="card">
      <a href={live} className="img-link">
        <div class="img-div">
          <img src={img} alt={alt} />
        </div>
      </a>
      <div className="card-content">
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-desc">{desc}</p>
        </div>
        <div className="links">
          <a href={live}>
            <div className="card-link card-link-1">
              <FontAwesomeIcon icon={faTv} />
              <p>Live Demo</p>
            </div>
          </a>
          <div className="card-link card-link-2">
            <a href={github}>
              <FontAwesomeIcon icon={faGithubSquare} />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
