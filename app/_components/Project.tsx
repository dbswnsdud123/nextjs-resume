import Chip from "./common/Chip";
import { projects, ProjectType } from "../_data/project";

const ProjectItem = ({ projects }: { projects: ProjectType }) => {
  return (
    <>
      <div className="flex flex-row mb-10">
        <div className="flex flex-col w-[250px]">
          <p className="text-[32px] font-bold mb-[16px]">{projects.time}</p>
          <div className="flex flex-row items-center">
            <Chip text={projects.duration} />
          </div>
          <div className="flex flex-row mt-10">
            <img
              src={projects.image}
              alt="logo"
              className="rounded-[20px]"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-[32px] font-bold mb-4">{projects.title}</p>
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
          <div className="flex flex-row flex-wrap gap-[8px] max-w-[600px] mt-5">
            {projects.skills.map((skill) => {
              return <Chip key={skill} text={skill} />;
            })}
          </div>

          {projects.dos.length != 0 && (
            <>
              <ul className="list-disc ml-5 mt-4">
                {projects.dos.map((item, index) => {
                  return (
                    <>
                      <li key={item.problem}>
                        <div className="flex flex-row mb-1">
                          <p className="max-w-[80px] min-w-[80px]">Project:</p>
                          <p>{item.project}</p>
                        </div>
                        <div className="flex flex-row my-2">
                          <p className="text-[14px] text-[#70767E]">
                            {item.role}
                          </p>
                        </div>
                        <div className="flex flex-row mb-2 ml-4">
                          <p className="max-w-[80px] min-w-[80px]">Problem:</p>
                          <p>{item.problem}</p>
                        </div>
                        <div className="flex flex-row mb-2 ml-4">
                          <p className="max-w-[80px] min-w-[80px]">Solve:</p>
                          <p>{item.solve}</p>
                        </div>
                        <div className="flex flex-row ml-4">
                          <p className="max-w-[80px] min-w-[80px]">Effect:</p>
                          <p>{item.effect}</p>
                        </div>
                      </li>
                      <div className="min-h-[1px] max-h-[1px] my-6 border-[0.5px] border-[#70767E] opacity-30"></div>
                    </>
                  );
                })}
              </ul>
            </>
          )}

          {projects.etcs.length != 0 && (
            <>
              <p className="text-[18px] font-bold mt-3 mb-2">ETC.</p>
              <ul className="list-disc ml-[20px] mb-2">
                {projects.etcs.map((etc) => {
                  return (
                    <li key={etc} className="mb-[8px]">
                      {etc}
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
        <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">CAREER</p>
        {projects.map((projectItem) => {
          return <ProjectItem key={projectItem.title} projects={projectItem} />;
        })}
      </section>
    </>
  );
}
