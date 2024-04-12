import Chip from "./Chip";
import { projects, Project } from "../_data/project";

const ProjectItem = ({ projects }: { projects: Project }) => {
    return (
        <>
            <div className="flex flex-row mb-10">
                <div className="flex flex-col mr-[40px]">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {projects.time}
                    </p>
                    <div className="flex flex-row items-center">
                        <Chip text={projects.duration} />
                        <p className="text-[24px] font-bold ml-5">
                            {projects.serveice ? "출시" : "미출시"}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[32px] font-bold mb-[16px]">
                        {projects.title}
                    </p>
                    {projects.descriptions.map((descripion) => {
                        return (
                            <p
                                key={descripion}
                                className="text-[14px] text-[#70767E] mb-[4px]"
                            >
                                {descripion}
                            </p>
                        );
                    })}

                    {projects.fe.length != 0 && (
                        <>
                            <p className="text-[18px] font-bold mt-3 mb-2">
                                FE
                            </p>
                            <ul className="list-disc ml-[20px] mb-2">
                                {projects.fe.map((feItem) => {
                                    return (
                                        <li key={feItem} className="mb-[8px]">
                                            {feItem}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}

                    {projects.etc.length != 0 && (
                        <>
                            <p className="text-[18px] font-bold mt-3 mb-2">
                                ETC.
                            </p>
                            <ul className="list-disc ml-[20px] mb-2">
                                {projects.etc.map((etcItem) => {
                                    return (
                                        <li key={etcItem} className="mb-[8px]">
                                            {etcItem}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default function Project() {
    return (
        <>
            <section id="PROJECT" className="flex flex-col">
                <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                    PROJECT
                </p>
                {projects.map((projectItem) => {
                    return (
                        <ProjectItem
                            key={projectItem.title}
                            projects={projectItem}
                        />
                    );
                })}
            </section>
        </>
    );
}
