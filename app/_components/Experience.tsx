import Chip from "../_components/Chip";

export default function Experience() {
    const skills = [
        "React",
        "Vue.js",
        "Electron",
        "Recoil",
        "Vuex",
        "pinia",
        "Javascript",
        "Typescript",
        "HTML/CSS",
        "AWS S3",
        "AWS Cloudfront",
        "Git/Github",
        "Jira",
        "Slack",
        "Figma",
        "Zeplin",
    ];
    return (
        <>
            <section id="experience" className="flex flex-col">
                <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                    EXPERIENCE
                </p>
                <div className="flex flex-row">
                    <div className="flex flex-col mr-[40px]">
                        <p className="text-[32px] font-bold mb-[16px]">
                            2020.01 ~ 2023.06
                        </p>
                        <Chip text="3년 6개월" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[32px] font-bold mb-[16px]">
                            지지큐컴퍼니 (GGQ)
                        </p>
                        <p className="text-[14px] text-[#70767E] mb-[16px]">
                            플랫폼팀 FE 개발자
                        </p>
                        <ul className="list-disc ml-[20px]">
                            <li className="mb-[8px]">
                                게임 / 인공지능 스타트업 (30~40명,
                                개발(플랫폼)팀 6~8명)
                            </li>
                            <li className="mb-[8px]">
                                '리그오브레전드 게임 편의성 제공 및 인공지능
                                코칭 서비스' 프론트엔드 개발
                            </li>
                            <li className="mb-[8px]">
                                '프로 게임 구단 Gen.G 경기 기록 및 분석 서비스'
                                프론트엔드 개발
                            </li>
                            <li className="mb-[8px]">
                                프로세스 자동화를 통한 업무 효율화
                            </li>
                            <li className="mb-[8px]">Skill Keywords</li>
                        </ul>
                        <div className="flex flex-row flex-wrap gap-[8px] max-w-[400px]">
                            {skills.map((skill: string, index: number) => {
                                return <Chip key={index} text={skill} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
