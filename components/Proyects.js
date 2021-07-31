import Image from "next/image";
import ProjectItem from "./ProjectItem";

import file from '../data/projects.json';

const Proyects = () => {
    return (
        <section className="projects">

            <div className="whyMe">

                <div className="titleContainer">

                    <div className="line">

                    </div>
                    <p>My Proyects</p>

                </div>

                <div className="whyHire">
                    <h3>My work in action!</h3>

                    <p>In this section you can check what I&pos;ve done in the past.</p>
                </div>

            </div>

            <div className="projectsList">

                {
                    file.projects.map(proj => {

                        return <ProjectItem
                            key={proj.id}
                            isReverse={proj.isReverse}
                            type={proj.type}
                            title={proj.title}
                            description={proj.description}
                            link={proj.link}
                            image={proj.image}
                        />
                    })
                }
            </div>
        </section>
    );
}

export default Proyects;