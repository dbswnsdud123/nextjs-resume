export interface Portfolio {
    title: string;
    time: string;
    duration: string;
    image: string[];
    html: string;
    fe: string[];
    deployment: string[];
}

export const portfolios = [
    {
        title: "GGQ Desktop Web Application",
        time: "( 22.01 ~ 23.06 )",
        duration: "1년 6개월",
        image: ["1_1.webp"],
        html: `
            <p class="mb-2">
              <b class="text-[#bd871f]">
              게이머들의 전적 통계, 게임의 정보, 자동 전적 검색 등 게임의 편의성을 위한 데스크톱 어플리케이션
              </b>입니다.
            </p>
            <p class="mb-2">
              당시 완성되지 않았던 AI를 활용한 분석을 서비스하는 것은 반발감만 얻을 것으로 판단해서
              게임의 편의성을 제공하는
              <b class="text-[#bd871f]">데스크톱 어플리케이션을 제안 및 개발</b>하게 되었습니다.
              다른 어플리케이션들과 달리 UI를 게임에 따라다니게 하고, 자동으로 전적 검색을 하는 등의
              UI/UX로 차별점을 두었고 이를 통해 현재는 MAU 300,000 이상의 프로그램이 되었으며, PC방
              업체와 협업하여 전국 PC방에 프로그램 설치를 진행 중입니다.
            </p>
            <p>
              이 프로젝트를 통해
              <b class="text-[#bd871f]"
                >"우리가 할 수 있는 것보다 사용자가 원하는 것"의 중요성을 깨달았고, 같은 기능을
                제공하더라도 편한 UI/UX가 사용자에게 감동</b
              >을 주는 것을 느꼈습니다.
            </p>
        `,
        fe: ["Electron", "React", "Recoil", "Typescript", "TailwindCSS"],
        deployment: ["AWS S3", "AWS Cloudfront"],
    },
    {
        title: "GGQ Web",
        time: "( 22.01 ~ 23.06 )",
        duration: "1년 6개월",
        image: ["2_1.webp", "2_2.webp"],
        html: `
            <p class="mb-2">
              <b class="text-[#bd871f]"
                >'롤'이라는 게임의 프로와 장인의 정보를 제공하고, 프로와 장인을 기반으로 사용자의
                게임을 분석해주는</b
              >
              페이지 입니다.
            </p>
            <p class="mb-2">
              GGQ 데스크톱 어플리케이션에 엣지 컴퓨팅을 넣어 로컬 리소스를 활용한 게이머의 게임 경기
              분석을 웹 페이지로 보여주고 있습니다.
            </p>
            <p class="mb-2">
              Git Flow를 적용하고 Docker, Github Action, AWS ECS를 통해 CI/CD 자동화를 구축했습니다.
            </p>
            <p class="mb-2">
              이 프로젝트를 통해
              <b class="text-[#bd871f]"
                >체계적으로 설계 및 구축된 프로젝트가 기능 추가, 유지 보수에 </b
              >미치는 긍정적인 영향을 알 수 있었습니다.
            </p>
        `,
        fe: ["React", "Recoil", "Typescript", "TailwindCSS"],
        deployment: ["AWS S3", "AWS Cloudfront", "AWS Route53"],
    },
    {
        title: "GGQ PRO Web",
        time: "( 21.01 ~ 21.06 )",
        duration: "4개월",
        image: ["3_1.webp", "3_2.webp"],
        html: `
            <p class="mb-2">
              <b class="text-[#bd871f]">롤 프로팀 내부의 경기, 프로 팀들 간의 비공식 경기를 기록</b
              >해주는 웹사이트입니다.
            </p>
            <p class="mb-2">
              회사 전체의 사업 전략과 비즈니스 모델을 'AI 분석을 통해 게임을 더 잘하게 해준다'로
              변경하고 난 뒤, 처음 프로젝트입니다.
            </p>
            <p class="mb-2">
              일반 게이머들의 경기는 자동으로 데이터가 수집되어 기록되고 관리되지만, 프로의 경기는
              코치나 감독의
              <b class="text-[#bd871f]">수작업이 필요하므로 이를 자동화하면 단순 업무 시간을 단축</b
              >해 코칭 업무에 집중시켜줄 수 있으리라 판단했습니다. 현재까지도 2022년 우승팀인
              GEN.G와 컨택을 하면서 발전시켜나가고 있습니다.
            </p>
            <p class="mb-2">
              이 프로젝트를 통해 <b class="text-[#bd871f]">프로팀들이 가진 불편함을 해소</b>해주면서
              정답지로 활용할 수 있는 프로들의 경기를 얻을 수 있었습니다.
            </p>
        `,
        fe: ["Vue", "Vuex", "Vuetify", "TypeScript"],
        deployment: ["AWS S3", "AWS Cloudfront", "AWS Route53"],
    },
];
