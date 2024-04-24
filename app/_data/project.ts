export interface Project {
    title: string;
    time: string;
    duration: string;
    descriptions: string[];
    dos: {
        problem: string;
        solve: string;
    }[];
    etcs: string[];
    serveice: boolean;
}

export const projects = [
    {
        title: "GGQ 데스크톱 웹앱 및 웹",
        time: "22.01 ~ 23.06",
        duration: "1년 6개월",
        descriptions: [
            "리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스",
            "시리즈 A 120억 투자 유치",
        ],
        dos: [
            {
                problem:
                    "Vue2 의 Options API 사용으로 비지니스 로직 분산. 이로 인한 로직 재사용 및 유지보수 난이도 증가",
                solve: "Vue3 migration 및 Composition API 활용으로 로직 재사용 및 유지보수 난이도 감소",
            },
            {
                problem:
                    "Vue의 커뮤니티 및 개발자 부족으로 인한 인재 채용 난이도 증가",
                solve: "React migration으로 커뮤니티 확장 및 인재 채용 난이도 감소",
            },
            {
                problem:
                    "'니은' UI를 위한 electron의 2개 renderer process(우측, 하단) 사용. 이로 인한 상태관리 복잡성 증가, 메모리 사용률 증가, UI 오류 증가",
                solve: "1개의 renderer process로 refactoring 함으로써 상태관리 용이, 메모리 사용률 감소, UI 오류 감소",
            },
            {
                problem:
                    "Electron application 기능 요구사항 라이브러리 부재 (타 프로그램 따라다니는 기능)",
                solve: "유사 오픈 소스 라이브러리 기능 수정 및 추가로 사내 라이브러리 구축",
            },
            {
                problem:
                    "기존 프로젝트에서 모듈식 아키텍쳐 사용. 프로젝트 규모가 커짐에 따라 모듈 복잡성 증가로 인한 프로젝트 유지보수 난이도 증가",
                solve: "FSD(기능 분할 설계) 아키텍쳐로 변경. 변경으로 인한 아키텍쳐 구성 요소 추가 및 제거 용이, 확장성 및 유지보수성 증가",
            },

            {
                problem: "피드백 영상 인피니트 스크롤 시 메모리 사용량 증가",
                solve: "가상 스크롤 활용으로 viewport에 있는 element들만 렌더링하도록 변경함으로써 메모리 사용량 감소",
            },
            {
                problem:
                    "약 30%가 동일한 전적 검색 API 호출. 불필요한 API 호출로 인한 서버 부하 증가 및 페이지 재진입 속도 감소",
                solve: "React Query의 data caching 활용으로 서버 부하 감소 및 페이지 재진입 속도 향상",
            },
        ],
        etcs: [
            "프로젝트 기획 및 제안으로 회사 메인 프로덕트로 전환",
            "전국 피시방 점유율 45% 피카플레이 피시방에 프로그램 설치 진행 담당 (현재 MAU 70만)",
            "대용량 asset 최적화 및 업로드 프로세스 자동화(마이크로 서비스 백엔드 구축)를 통한 업무 시간 단축",
        ],
        serveice: true,
    },

    {
        title: "GGQ 프로 웹",
        time: "21.01 ~ 21.06",
        duration: "6개월",
        descriptions: [
            "리그오브레전드 프로 구단 경기 기록 및 분석 서비스",
            "프로 게임 구단 계약 성사",
        ],
        dos: [
            {
                problem:
                    "챔피언, 스킬, 룬 등 고화질 이미지 사용. 이로 인한 렌더링 속도 감소, 네트워크 사용량 증가",
                solve: "webp 변환 및 size 조절 등 Image 최적화, lazy loading 적용으로 렌더링 속도 향상, 네트워크 사용량 감소",
            },
            {
                problem:
                    "약 60% 초기 화면 진입 후 이탈. 사용하지 않는 페이지 리소스까지 받아오기 때문에 TTV 증가, 자원 낭비",
                solve: "page code splitting 으로 해당 페이지를 제외한 페이지는 리소스를 받아오지 않도록 변경. 초기 화면 TTV 감소, 자원 효율화",
            },
            {
                problem:
                    "prop 값이 변하지 않는 대전 기록, 리플레이 영상 등 component 리렌더링. 렌더링 효율 감소",
                solve: "React.memo를 통한 component memoization. 렌더링 효율 증가",
            },
            {
                problem:
                    "정글 동선 히트맵 계산 결과값 재사용 하지 않음으로 리랜더링 시 계산 반복",
                solve: "useMemo를 통한 히트맵 계산 결과 재사용",
            },
            {
                problem:
                    "대용량 font 사용으로 인한 로딩 속도 증가, 네트워크 사용량 증가",
                solve: "Subset Font로 font 최적화. 로딩 속도 감소, 네트워크 사용량 감소",
            },
            {
                problem: "FOIT FOUT 간극으로 인한 font 깜빡임 현상 발생",
                solve: "Font loading API 사용으로 FOIT FOUT 간극 제거",
            },
        ],
        etcs: [
            "프로 게임 구단(Gen.G)와의 지속적 컨택을 통한 신 기능 추가 및 유지보수",
            "League Client API 도입으로 게임 분석 시간 약 30분 → 4분으로 단축",
        ],
        serveice: true,
    },
];
