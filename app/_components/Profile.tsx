import { PiNotePencilBold } from "react-icons/pi";
import { GrMailOption } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <p className="w-[50px]">{title}</p>
      <p className="ml-4 mr-4"></p>
      <p>{description}</p>
    </>
  );
};

export default function Profile() {
  return (
    <>
      <section id="profile" className="flex flex-col mb-[40px]">
        <p className="font-bold text-[#BD871F] text-[40px] mb-[20px]">
          PROFILE
        </p>
        <div className="flex flex-row">
          <img
            src="/images/profile.jpg"
            alt="logo"
            className="rounded-[20px] mr-[40px]"
            width={170}
            height={220}
          />

          <div className="flex flex-col justify-between">
            <div className="flex flex-row items-center">
              <p className="font-bold text-[40px]">윤준영</p>
              <div className="min-w-[2px] h-[60%] bg-[#bec4cd] mx-3"></div>
              <p className="font-bold text-[24px] mt-3">Frontend Engineer</p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row items-center mb-[12px]">
                <GrMailOption size={22} className="mr-[20px] items-center" />
                <Description
                  title="연락처"
                  description="dbswnsdud12336@gmail.com"
                />
              </div>
              <div className="flex flex-row items-center mb-[12px]">
                <FaGitAlt size={22} className="mr-[20px] items-center" />
                <Description
                  title="Git"
                  description="https://github.com/dbswnsdud123"
                />
              </div>
              {/* <div className="flex flex-row items-center">
                <FaRegBookmark size={22} className="mr-[20px] items-center" />
                <Description
                  title="Blog"
                  description="https://groot-dev.tistory.com"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
