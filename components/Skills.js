
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

                    <p>some brief explanation of why hire me......................</p>
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