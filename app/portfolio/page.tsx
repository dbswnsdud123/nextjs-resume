import Image from "next/image";
import Chip from "../_components/Chip";
import Profile from "../_components/Profile";
import { portfolioData } from "./model";

import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export default function Portfolio() {
    const window = new JSDOM("").window;
    const DOMPurify = createDOMPurify(window);

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
                            {portfolioData.map((item: any, index: number) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="flex flex-col mb-[80px]"
                                        >
                                            <div className="flex flex-row items-center mb-[20px]">
                                                <p className="text-[24px] font-bold mr-3">
                                                    {index + 1}. {item.title}
                                                </p>
                                                <p className="text-[20px] mr-3">
                                                    {item.time}
                                                </p>
                                                <Chip text={item.duration} />
                                            </div>
                                            <Image
                                                className="mb-10"
                                                src={`/images/${item.image}`}
                                                width={0}
                                                height={0}
                                                sizes="100"
                                                alt={""}
                                                style={{
                                                    width: "auto",
                                                    height: "600px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <div className="flex flex-row">
                                                <div
                                                    className="flex-1 flex flex-col"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            item.html
                                                        ),
                                                    }}
                                                ></div>
                                                <div className="w-[1px] min-h-[100%] bg-[#bec4cd] mx-3"></div>
                                                <div className="flex flex-col w-[350px]">
                                                    <p className="text-[20px] font-bold mb-2">
                                                        FE
                                                    </p>
                                                    <div className="flex flex-row mb-5">
                                                        {item.fe.join(", ")}
                                                    </div>
                                                    <p className="text-[20px] font-bold mb-2">
                                                        Deployment
                                                    </p>
                                                    <p>
                                                        {item.deployment.join(
                                                            ", "
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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
