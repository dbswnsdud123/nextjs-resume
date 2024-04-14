import type { Metadata } from "next";
import Profile from "./_components/Profile";
import Introduce from "./_components/Introduce";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Education from "./_components/Education";

export const metadata: Metadata = {
    title: "윤준영 경력기술서",
    description: "프론트엔드 개발자 윤준영 경력기술서",
};

export default function Career() {
    return (
        <>
            <main className="flex flex-row justify-center p-[40px]">
                <section className="max-w-[900px]">
                    <Profile />
                    <Introduce />
                    <Experience />
                    <Project />
                    <Education />
                </section>
            </main>
        </>
    );
}
