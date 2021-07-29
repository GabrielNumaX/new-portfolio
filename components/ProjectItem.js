import Image from 'next/image';

const ProjectItem = ({ isReverse, type, title, description, image, link }) => {
    return (
        <div className={isReverse ? "projectRow reverse" : "projectRow"}>

            <div className={isReverse ? "projectDescriptionContainer reverse" : "projectDescriptionContainer"}>

                <div className={isReverse ? "projectTitle reverse" : "projectTitle"}>

                    <div className="titleContainer">

                        <div className="line">

                        </div>
                        <p>{type}</p>

                    </div>

                    <div className="projectDescription">
                        <h3>{title}</h3>

                        <p>{description}</p>

                        <a href={link} target="_blank" rel="noopener noreferrer">&rarr; Visit</a>
                    </div>

                </div>

            </div>

            <div className="projectImageContainer">

                <section className={isReverse ? "imageBackground01 reverse" : "imageBackground01"}></section>

                <section className="imageBackground02"></section>

                <Image src={image} layout="fill" objectFit="cover" className="image" />

            </div>
        </div>
    );
}

export default ProjectItem;