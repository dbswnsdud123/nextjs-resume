import Chip from "../_components/Chip";
import { experiences, Experience } from "../_data/experience";

const ExperienceItem = ({ experiences }: { experiences: Experience }) => {
    return (
        <>
            <div className="flex flex-row mb-10">
                <div className="flex flex-col mr-[40px]">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {experiences.time}
                    </p>
                    <Chip text={experiences.duration} />
                </div>
                <div className="flex flex-col">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {experiences.title}
                    </p>
                    <p className="text-[14px] text-[#70767E] mb-[16px]">
                        {experiences.role}
                    </p>
                    <ul className="list-disc ml-[20px]">
                        {experiences.descriptions.map((descripion) => {
                            return (
                                <li key={descripion} className="mb-[8px]">
                                    {descripion}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-row flex-wrap gap-[8px] max-w-[400px]">
                        {experiences.skills.map((skill) => {
                            return <Chip key={skill} text={skill} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Experience() {
    return (
        <>
            <section id="experience" className="flex flex-col">
                <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                    EXPERIENCE
                </p>
                {experiences.map((experienceItem) => {
                    return (
                        <ExperienceItem
                            key={experienceItem.title}
                            experiences={experienceItem}
                        />
                    );
                })}
            </section>
        </>
    );
}
