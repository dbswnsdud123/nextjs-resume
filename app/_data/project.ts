export interface Project {
    title: string;
    time: string;
    duration: string;
    descriptions: string[];
    fe: string[];
    etc: string[];
    serveice: boolean;
}

export const projects = [
    {
        title: "GGQ 데스크톱 웹앱 및 웹",
        time: "2022.01 ~ 2023.06",
        duration: "1년 6개월",
        descriptions: [
            "리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스",
            "시리즈 A 120억 투자 유치",
        ],
        fe: [
            "유지보수 향상을 위한 Vue2 → Vue3 → React migration",
            "Electron renderer process 리팩토링을 통한 메모리 사용률 감소 및 UX 증가",
            "타 프로그램(리그오브레전드)을 따라다니기 위한 UI 오픈소스 라이브러리 기여를 통한 사내 라이브러리 구축",
            "전적 검색 API → React Query caching을 통한 서버 부하 감소 및 페이지 재진입 속도 향상",
            "대전 기록 Component memoization을 통한 렌더링 효율화",
            "Code splitting 을 통한 초기 화면 렌더링 속도 향상",
            "Image 최적화 및 lazy loading를 통한 렌더링 속도 향상 및 네트워크 사용량 감소",
        ],
        etc: [
            "프로젝트 기획 및 제안으로 회사 메인 프로덕트로  전환",
            "전국 피시방 점유율 45% 피카플레이 피시방에  프로그램 설치 진행 담당 (현재 MAU 70만)",
            "라이브러리 및 asset 최적화를 통한 프로그램 용량  130MB → 60MB 감소",
            "대용량 asset 최적화 및 업로드 프로세스  자동화(마이크로 서비스 백엔드 구축)를 통한 업무  시간 6시간 → 5분 단축",
        ],
        serveice: true,
    },

    {
        title: "GGQ 프로 웹",
        time: "2021.01 ~ 2021.06",
        duration: "6개월",
        descriptions: [
            "리그오브레전드 프로 구단 경기 기록 및 분석 서비스",
            "프로 게임 구단 계약 성사",
        ],
        fe: [
            "Subset Font 사용으로 인한 font 최적화",
            "Font loading API를 통한 FOIT FOUT 간극 제거",
            "피드백 영상 lazy loading을 통한 네트워크 사용률 감소",
            "Debounce를 통한 검색 API 호출 최적화",
        ],
        etc: [
            "League Client API 도입으로 게임 분석 시간 약 30분 → 4분으로 단축",
            "프로 게임 구단(Gen.G)와의 지속적 컨택을 통한 신 기능 추가 및 유지보수",
        ],
        serveice: true,
    },
];
