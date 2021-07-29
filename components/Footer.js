import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const Footer = () => {

    const d = new Date();
    const year = d.getFullYear();


    return (
        <footer>

            <div className="footerText">

                <p>NumaX &copy;{year}</p>

            </div>

            <div className="footerIcons">

                <a href="https://www.linkedin.com/in/numax" target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />

                </a>

                <a href="https://github.com/GabrielNumaX" target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faGithub} className="icon" />

                </a>

                <a href="https://www.facebook.com/gabriel.numax" target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faFacebookF} className="icon" />

                </a>

                <a href="https://www.instagram.com/_.numax._" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />

                </a>

                <a href="https://twitter.com/gabrielnumax" target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faTwitter} className="icon" />

                </a>


            </div>
        </footer>
    );
}

export default Footer;