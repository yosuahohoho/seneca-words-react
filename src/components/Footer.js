import React from 'react';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <p><strong>Learn coding at:</strong></p>
            <span>
                <a className="link link-freeCodeCamp"
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFreeCodeCamp} /> freeCodeCamp.org
          </a>
            </span>
            <small className="copyright">
                2019&copy;Yosua Setyo Nugroho
      </small>
        </footer>
    )
}

export default Footer;