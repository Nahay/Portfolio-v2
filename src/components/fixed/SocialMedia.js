import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.linkedin.com/in/lily-barberou-1b2b65221/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn}/>
      </a>
      <a
        href="https://github.com/Nahay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg"/>
      </a>
      <FontAwesomeIcon icon={faDiscord}/>
      <span>Lily.#7476</span>
    </div>
  );
};

export default SocialMedia;