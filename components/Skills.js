
import file from '../data/skills.json';
import SkillsCard from "./SkillsCard";

const Skills = () => {

    return (
        <section className="skills">

            <div className="whyMe">

                <div className="titleContainer">

                    <div className="line">

                    </div>
                    <p>My Skills</p>

                </div>

                <div className="whyHire">
                    <h3>Why Hire Me?</h3>

                    <p>With more that two years of experience as a Developer
                        <br />
                        I have particitated in real-world projects and know
                        <br /> how to get <span>things done</span>.
                    </p>
                </div>

            </div>

            <div className="skillsList">

                {
                    file.skills.map(sk => {

                        return (
                            <SkillsCard
                                key={sk.id}
                                skill={sk.skill}
                                description={sk.description}
                                image={sk.image}
                            />
                        )

                    })
                }

            </div>


        </section>
    );
}


export default Skills;