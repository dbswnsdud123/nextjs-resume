import Image from "next/image";
import { PiNotePencilBold } from "react-icons/pi";
import { GrMailOption } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

import Chip from "./_components/Chip";

export default function Career() {
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
      <main className="flex flex-row justify-center p-[40px]">
        <section className="max-w-[1200px]">
          <section id="profile" className="flex flex-row mb-[40px]">
            <Image
              src="/images/profile.jpg"
              alt="logo"
              className="rounded-[20px] mr-[40px]"
              width={170}
              height={220}
            />

            <div className="flex flex-col justify-between">
              <p className="font-bold text-[#BD871F] text-[40px]">윤준영</p>
              <div className="flex flex-col">
                <div className="flex flex-row items-center mb-[12px]">
                  <PiNotePencilBold
                    size={22}
                    className="mr-[20px] items-center"
                  />
                  <p className="">아주대학교 소프트웨어 전공 학사</p>
                </div>
                <div className="flex flex-row items-center mb-[12px]">
                  <GrMailOption size={22} className="mr-[20px] items-center" />
                  <p className="">dbswnsdud12336@gmail.com</p>
                </div>
                <div className="flex flex-row items-center mb-[12px]">
                  <FaGitAlt size={22} className="mr-[20px] items-center" />
                  <p className="">https://github.com/dbswnsdud123</p>
                </div>
                <div className="flex flex-row items-center">
                  <FaRegBookmark size={22} className="mr-[20px] items-center" />
                  <p className="">https://groot-dev.tistory.com/</p>
                </div>
              </div>
            </div>
          </section>
          {/*  */}
          <section id="introduce" className="flex flex-col mb-[40px]">
            <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
              INTRODUCE
            </p>
            <p className="mb-[16px]">
              4년 차 개발자로 스타트업에서 웹과 데스크톱 앱 서비스를
              개발/배포/운영하고 있습니다. 4명 정도 작은 규모의 팀에 합류해,
              120억 투자를 유치하고 약 40명 규모의 팀으로 성장한 현재까지 필요한
              기술 역량을 책임지고 있습니다. 우리가 보여주고 싶은 것이 아닌
              사용자가 원하는 것을 파악한 뒤, 데스크톱 앱 기획을 제안하고 실제
              개발을 진행해 회사의 핵심 프로덕트로 발전시켰습니다.
            </p>

            <p className="mb-[16px]">
              데스크톱 앱이 두 개의 렌더러 프로세스로 만들어진 프로그램이기
              때문에 존재헀던 메모리 이슈, 상태관리 이슈를 파악해 리팩토링을
              진행했고, 이를 통해 메모리 사용률 50% 감소, 상태 관리 이슈 해결의
              결과를 얻을 수 있었습니다.
            </p>

            <p className="mb-[16px]">
              게임 도메인 특성상, 2주 주기로 패치가 이루어지고 그 때마다
              대용량의 asset 변경이 일어납니다. 수동으로 진행되고 있던 asset
              경량화 및 업로드 작업을 서버 작업 및 데스크톱 앱 개발을 통해
              자동화 했으며, 이를 통해 6시간 걸리던 업무 시간을 5분으로 줄인
              경험이 있습니다.
            </p>

            <p>
              이러한 경험을 바탕으로 주도적으로 문제를 발견하고 분석해 해결하는
              개발자가 되고자 노력하고 있습니다.
            </p>
          </section>
          {/*  */}
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
                    게임 / 인공지능 스타트업 (30~40명, 개발(플랫폼)팀 6~8명)
                  </li>
                  <li className="mb-[8px]">
                    '리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스'
                    프론트엔드 개발
                  </li>
                  <li className="mb-[8px]">
                    '프로 게임 구단 Gen.G 경기 기록 및 분석 서비스' 프론트엔드
                    개발
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
                  리그오브레전드 게임 편의성 제공 및 인공지능 코칭 서비스
                  (Frontend Lead)
                </p>
                <p className="text-[14px] text-[#70767E] mb-[16px]">
                  시리즈 A 120억 투자 유치
                </p>

                <ul className="list-disc ml-[20px]">
                  <li className="mb-[8px]">
                    프로젝트 기획 및 제안으로 회사 메인 프로덕트로 전환
                  </li>
                  <li className="mb-[8px]">
                    Vue2 → Vue3 → React migration으로 인한 유지보수 향상
                  </li>
                  <li className="mb-[8px]">
                    Javascript → Typescript migration으로 인한 유지보수 향상
                  </li>
                  <li className="mb-[8px]">
                    Electron renderer process 효율화 작업을 통한 메모리 사용률
                    50% 감소
                  </li>
                  <li className="mb-[8px]">
                    타 프로그램(리그오브레전드)을 따라다니기 위한 UI 오픈소스
                    라이브러리 기여를 통한 사내 라이브러리 구축
                  </li>
                  <li className="mb-[8px]">
                    라이브러리 및 asset 최적화를 통한 프로그램 용량 130MB → 60MB
                    감소
                  </li>
                  <li className="mb-[8px]">
                    대용량 asset 최적화 및 업로드 프로세스 자동화(마이크로
                    서비스 백엔드 구축)를 통한 업무 시간 6시간 → 5분 단축
                  </li>
                  <li className="mb-[8px]">
                    전국 피시방 점유율 45% 피카플레이 피시방에 프로그램 설치
                    진행 담당 (현재 MAU 30만)
                  </li>
                  <li className="mb-[8px]">
                    레이지 로딩, 코드 스플리팅을 통한 프론트엔드 성능 최적화
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
                  리그오브레전드 프로 구단 경기 기록 및 분석 서비스 (Frontend
                  Lead)
                </p>
                <p className="text-[14px] text-[#70767E] mb-[16px]">
                  프로 게임 구단 계약 성사
                </p>

                <ul className="list-disc ml-[20px]">
                  <li className="mb-[8px]">
                    League Client API 도입으로 게임 분석 시간 약 30분 → 4분으로
                    단축
                  </li>
                  <li className="mb-[8px]">
                    AWS Cloudfront ttl 상향 조정을 통한 재방문 시 로딩 속도 향상
                  </li>
                  <li className="mb-[8px]">
                    코드 품질, 책임 분산 및 실력 향상 등을 위한 코드 리뷰 도입
                  </li>
                  <li className="mb-[8px]">프로젝트 관리 툴 Jira 도입</li>
                  <li className="mb-[8px]">
                    프로 게임 구단(Gen.G)와의 지속적 컨택을 통한 신 기능 추가 및
                    유지보수
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
