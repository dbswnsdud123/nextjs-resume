import { educations, Education } from "../_data/education";

const EducationItem = ({ education }: { education: Education }) => {
    return (
        <>
            <div className="flex flex-row mb-10">
                <div className="flex flex-col mr-[40px]">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {education.time}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {education.title}
                    </p>

                    {education.descriptions.map((descripion) => {
                        return (
                            <p
                                key={descripion}
                                className="text-[14px] text-[#70767E] mb-[4px]"
                            >
                                {descripion}
                            </p>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default function Education() {
    return (
        <>
            <section id="introduce" className="flex flex-col mb-[40px]">
                <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                    EDUCATION
                </p>
                {educations.map((education) => {
                    return (
                        <EducationItem
                            key={education.title}
                            education={education}
                        />
                    );
                })}
            </section>
        </>
    );
}
