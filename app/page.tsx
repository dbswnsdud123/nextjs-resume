import Profile from "./_components/Profile";
import Introduce from "./_components/Introduce";
import Experience from "./_components/Experience";
import Project from "./_components/Project";

export default function Career() {
    return (
        <>
            <main className="flex flex-row justify-center p-[40px]">
                <section className="max-w-[1200px]">
                    <Profile />
                    <Introduce />
                    <Experience />
                    <Project />
                </section>
            </main>
        </>
    );
}
