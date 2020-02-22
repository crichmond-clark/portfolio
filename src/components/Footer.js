import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../sass/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Connor Richmond-Clark
        <FontAwesomeIcon icon={faCopyright} />
      </p>
      <span className="divider"></span>
      <div>icons</div>
    </footer>
  );
};

export default Footer;
