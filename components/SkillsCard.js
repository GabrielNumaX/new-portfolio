import Image from 'next/image';

const SkillsCard = ({ skill, description, image }) => {
    return (
        <div className="skillsCard">

            <div className="skillsCardImageContainer">

                <div className="skillItem">


                    <Image src={image} layout="fill" objectFit="cover" className="image" alt={skill} />

                </div>
            </div>

            <h3>{skill}</h3>

            <p>{description}</p>
        </div>
    );
}

export default SkillsCard;