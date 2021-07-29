import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


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

                    <div className="socialText">

                        <h3>Linkedin</h3>
                        <p>Professional profile</p>

                    </div>

                    <div className="socialIcon">

                        <a>

                        </a>

                    </div>
                </div>


            </div>


        </section>
    );
}

export default SocialMedia;