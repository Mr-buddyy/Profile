import { lazy, onCleanup, onMount } from "solid-js";
import hooks from "../../hooks/hooks";

const Navbar = lazy(() => import("../../components/main/Navbar"));
const LazyImage = lazy(() => import("../../components/lazy-image/lazy-image"));

function ProjectDesign() {
    const { ProjectDesign } = hooks();
    const projectList = ProjectDesign();

    return (
        <>
            <Navbar />
            <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-10 w-full h-full lg:p-32 p-10">
                <p class="text-4xl self-start font-bold">
                    PROJECT <span class="font-light">| UI DESIGN</span>
                </p>
                <section class="grid lg:grid-cols-2 grid-cols w-full h-full lg:gap-10 gap-16">
                    {projectList.map((project) => {
                        return (
                            <>
                                <picture class="w-full h-full flex flex-col gap-5">
                                    <LazyImage publicId={project.item || ""} alt={project.title || ""} />
                                    <p class="font-black">{project.title || ""}</p>
                                    <div>
                                        <p>{project.caption || ""}</p>
                                        <p class="text-gray-400">{project.tags || ""}</p>
                                    </div>
                                </picture>
                            </>
                        );
                    })}
                </section>
            </div>{" "}
        </>
    );
}

export default ProjectDesign;
