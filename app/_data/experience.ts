export interface Experience {
    title: string;
    time: string;
    duration: string;
    role: string;
    descriptions: string[];
    skills: string[];
}

export const experiences = [
    {
        title: "(주)지지큐컴퍼니",
        time: "23.01 ~ 23.06",
        duration: "3년 6개월",
        role: "리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스",
        descriptions: [
            "게임 / 인공지능 스타트업 (총 40명, 개발(플랫폼)팀 6~8명)",
            "'리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스' 개발",
            "'프로 게임 구단 Gen.G 경기 기록 및 분석 서비스' 개발",
            "Skill Keywords",
        ],
        skills: [
            "React",
            "Next",
            "Vue.js",
            "Electron",
            "Recoil",
            "React Query",
            "Vuex",
            "pinia",
            "Javascript",
            "Typescript",
            "HTML/CSS",
            "AWS",
            "Git/Github",
            "Jira",
            "Slack",
            "Figma",
            "Zeplin",
        ],
    },
];
