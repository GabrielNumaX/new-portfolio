import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


const SocialMedia = () => {
    return (
        <section className="social">

            <div className="whyMe">

                <div className="titleContainer">

                    <div className="line">

                    </div>
                    <p>Social Media</p>

                </div>

                <div className="whyHire">
                    <h3>Take a look at my profiles!</h3>
                </div>

            </div>

            <div className="socialList">

                <div className="socialCard">

                    <div className="corner"></div>

                    <div className="socialText">

                        <h3>Linkedin</h3>
                        <p>Professional profile</p>

                    </div>

                    <div className="socialIcon">

                        <a href="https://www.linkedin.com/in/numax" target="_blank" rel="noopener noreferrer">

                            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />

                        </a>

                    </div>
                </div>

                <div className="socialCard">

                    <div className="corner"></div>

                    <div className="socialText">

                        <h3>Github</h3>
                        <p>Professional profile</p>

                    </div>

                    <div className="socialIcon">

                        <a href="https://github.com/GabrielNumaX" target="_blank" rel="noopener noreferrer">

                            <FontAwesomeIcon icon={faGithub} className="icon" />

                        </a>

                    </div>
                </div>

                <div className="socialCard">

                    <div className="corner"></div>

                    <div className="socialText">

                        <h3>Facebook</h3>
                        <p>Professional profile</p>

                    </div>

                    <div className="socialIcon">

                        <a href="https://www.facebook.com/gabriel.numax" target="_blank" rel="noopener noreferrer">

                            <FontAwesomeIcon icon={faFacebookF} className="icon" />

                        </a>

                    </div>
                </div>

                <div className="socialCard">

                    <div className="corner"></div>

                    <div className="socialText">

                        <h3>Instagram</h3>
                        <p>Social profile</p>

                    </div>

                    <div className="socialIcon">

                        <a href="https://www.instagram.com/_.numax._" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />

                        </a>

                    </div>
                </div>

                <div className="socialCard">

                    <div className="corner"></div>

                    <div className="socialText">

                        <h3>Twitter</h3>
                        <p>Social profile</p>

                    </div>

                    <div className="socialIcon">

                        <a href="https://twitter.com/gabrielnumax" target="_blank" rel="noopener noreferrer">

                            <FontAwesomeIcon icon={faTwitter} className="icon" />

                        </a>

                    </div>
                </div>


            </div>


        </section>
    );
}

export default SocialMedia;