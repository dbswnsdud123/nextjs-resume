import { Metadata } from "next";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

import Chip from "../_components/common/Chip";
import Profile from "../_components/Profile";
import { portfolios, Portfolio } from "../_data/portfolio";

export const metadata: Metadata = {
    title: "윤준영 포트폴리오",
    description: "프론트엔드 개발자 윤준영 포트폴리오",
};

const PortfolioItem = ({
    portfolio,
    index,
}: {
    portfolio: Portfolio;
    index: number;
}) => {
    const window = new JSDOM("").window;
    const DOMPurify = createDOMPurify(window);

    return (
        <>
            <div className="flex flex-col mb-[80px]">
                <div className="flex flex-row items-center mb-[20px]">
                    <p className="text-[24px] font-bold mr-3">
                        {index + 1}. {portfolio.title}
                    </p>
                    <p className="text-[20px] mr-3">{portfolio.time}</p>
                    <Chip text={portfolio.duration} />
                </div>
                <div className="flex flex-row justify-center items-center mb-10">
                    {portfolio.image.map((image) => {
                        return (
                            <img
                                key={image}
                                className="mx-2 rounded-[8px]"
                                src={`/images/${image}`}
                                width={0}
                                height={0}
                                alt={""}
                                style={{
                                    width: `${100 / portfolio.image.length}%`,
                                    height: "auto",
                                }}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-row">
                    <div
                        className="flex-1 flex flex-col"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(portfolio.html),
                        }}
                    ></div>
                    <div className="w-[1px] min-h-[100%] bg-[#bec4cd] mx-3"></div>
                    <div className="flex flex-col w-[350px]">
                        <p className="text-[20px] font-bold mb-2">FE</p>
                        <div className="flex flex-row mb-5">
                            {portfolio.fe.join(", ")}
                        </div>
                        <p className="text-[20px] font-bold mb-2">Deployment</p>
                        <p>{portfolio.deployment.join(", ")}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Portfolio() {
    return (
        <>
            <main className="flex flex-row justify-center p-[40px]">
                <section className="max-w-[1200px]">
                    <Profile />
                    {/*  */}
                    <section id="PROJECT" className="flex flex-col">
                        <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
                            PRODUCT
                        </p>

                        <div className="flex flex-col mb-[20px]">
                            {portfolios.map((portfolio, index) => {
                                return (
                                    <PortfolioItem
                                        key={portfolio.title}
                                        index={index}
                                        portfolio={portfolio}
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/*  */}
                </section>
            </main>
        </>
    );
}
