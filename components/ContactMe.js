const ContactMe = () => {
    return (
        <section className="contact">

            <div className="whyMe">

                <div className="titleContainer">

                    <div className="line">

                    </div>
                    <p>Contact Me</p>

                </div>

                <div className="whyHire">
                    <h3>Send a personal message.</h3>

                    <p>You can reach out to me and I'll replay as soon as possible.</p>
                </div>

            </div>

            <div className="formContainer">

                <form>
                    <div className="formDiv">
                        <label>Your Name</label>
                        <input type="text"></input>
                    </div>

                    <div className="formDiv">
                        <label>Your Email</label>
                        <input type="email"></input>
                    </div>

                    <div className="formDiv">
                        <label>Your Message</label>
                        <textarea></textarea>
                    </div>

                    <input type="submit" value="Send"></input>

                </form>

            </div>
        </section>
    );
}

export default ContactMe;