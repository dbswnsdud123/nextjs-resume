import Chip from "./Chip";

export default function Project() {
    return (
        <>
            <section id="PROJECT" className="flex flex-col">
                <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                    PROJECT
                </p>
                <div className="flex flex-row mb-[40px]">
                    <div className="flex flex-col mr-[40px]">
                        <p className="text-[32px] font-bold mb-[16px]">
                            2021.06 ~ 2023.06
                        </p>
                        <Chip text="2년" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[32px] font-bold mb-[16px]">
                            GGQ 데스크톱 웹앱
                        </p>
                        <p className="text-[14px] text-[#70767E] mb-[4px]">
                            리그오브레전드 게임 편의성 제공 및 인공지능 코칭
                            서비스 (Frontend Lead)
                        </p>
                        <p className="text-[14px] text-[#70767E] mb-[16px]">
                            시리즈 A 120억 투자 유치
                        </p>

                        <ul className="list-disc ml-[20px]">
                            <li className="mb-[8px]">
                                프로젝트 기획 및 제안으로 회사 메인 프로덕트로
                                전환
                            </li>
                            <li className="mb-[8px]">
                                Vue2 → Vue3 → React migration으로 인한 유지보수
                                향상
                            </li>
                            <li className="mb-[8px]">
                                Javascript → Typescript migration으로 인한
                                유지보수 향상
                            </li>
                            <li className="mb-[8px]">
                                Electron renderer process 효율화 작업을 통한
                                메모리 사용률 50% 감소
                            </li>
                            <li className="mb-[8px]">
                                타 프로그램(리그오브레전드)을 따라다니기 위한 UI
                                오픈소스 라이브러리 기여를 통한 사내 라이브러리
                                구축
                            </li>
                            <li className="mb-[8px]">
                                라이브러리 및 asset 최적화를 통한 프로그램 용량
                                130MB → 60MB 감소
                            </li>
                            <li className="mb-[8px]">
                                대용량 asset 최적화 및 업로드 프로세스
                                자동화(마이크로 서비스 백엔드 구축)를 통한 업무
                                시간 6시간 → 5분 단축
                            </li>
                            <li className="mb-[8px]">
                                전국 피시방 점유율 45% 피카플레이 피시방에
                                프로그램 설치 진행 담당 (현재 MAU 30만)
                            </li>
                            <li className="mb-[8px]">
                                레이지 로딩, 코드 스플리팅을 통한 프론트엔드
                                성능 최적화
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col mr-[40px]">
                        <p className="text-[32px] font-bold mb-[16px]">
                            2021.01 ~ 2021.04
                        </p>
                        <Chip text="4개월" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[32px] font-bold mb-[16px]">
                            GGQ Pro 웹 페이지
                        </p>
                        <p className="text-[14px] text-[#70767E] mb-[4px]">
                            리그오브레전드 프로 구단 경기 기록 및 분석 서비스
                            (Frontend Lead)
                        </p>
                        <p className="text-[14px] text-[#70767E] mb-[16px]">
                            프로 게임 구단 계약 성사
                        </p>

                        <ul className="list-disc ml-[20px]">
                            <li className="mb-[8px]">
                                League Client API 도입으로 게임 분석 시간 약
                                30분 → 4분으로 단축
                            </li>
                            <li className="mb-[8px]">
                                AWS Cloudfront ttl 상향 조정을 통한 재방문 시
                                로딩 속도 향상
                            </li>
                            <li className="mb-[8px]">
                                코드 품질, 책임 분산 및 실력 향상 등을 위한 코드
                                리뷰 도입
                            </li>
                            <li className="mb-[8px]">
                                프로젝트 관리 툴 Jira 도입
                            </li>
                            <li className="mb-[8px]">
                                프로 게임 구단(Gen.G)와의 지속적 컨택을 통한 신
                                기능 추가 및 유지보수
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
