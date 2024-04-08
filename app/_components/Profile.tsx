import { PiNotePencilBold } from "react-icons/pi";
import { GrMailOption } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

export default function Profile() {
    return (
        <>
            <section id="profile" className="flex flex-row mb-[40px]">
                <img
                    src="/images/profile.jpg"
                    alt="logo"
                    className="rounded-[20px] mr-[40px]"
                    width={170}
                    height={220}
                />

                <div className="flex flex-col justify-between">
                    <p className="font-bold text-[#BD871F] text-[40px]">
                        윤준영
                    </p>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-[12px]">
                            <PiNotePencilBold
                                size={22}
                                className="mr-[20px] items-center"
                            />
                            <p className="">아주대학교 소프트웨어 전공 학사</p>
                        </div>
                        <div className="flex flex-row items-center mb-[12px]">
                            <GrMailOption
                                size={22}
                                className="mr-[20px] items-center"
                            />
                            <p className="">dbswnsdud12336@gmail.com</p>
                        </div>
                        <div className="flex flex-row items-center mb-[12px]">
                            <FaGitAlt
                                size={22}
                                className="mr-[20px] items-center"
                            />
                            <p className="">https://github.com/dbswnsdud123</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaRegBookmark
                                size={22}
                                className="mr-[20px] items-center"
                            />
                            <p className="">https://groot-dev.tistory.com/</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
