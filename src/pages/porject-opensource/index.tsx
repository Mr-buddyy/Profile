import { lazy } from "solid-js";
import hooks from "../../hooks/hooks";

const Navbar = lazy(() => import("../../components/main/Navbar"));

export default function index() {
    const { ProjectOpenSource } = hooks();
    const { githubData } = ProjectOpenSource();

    return (
        <>
            <Navbar />
            <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 lg:p-20 px-10">
                <ul class="">
                    <li class="p-10 text-5xl tracking-wide font-light text-center">
                        Project <span class="font-bold">Website</span> |{" "}
                        <span class="text-2xl">
                            Front End | <span class="text-lg">Back End</span>
                        </span>
                    </li>
                    {Array.isArray(githubData()) ? (
                        !githubData().length ? (
                            <div class="animate-pulse flex items-center gap-5 py-5">
                                <div class="w-10 h-10 bg-gray-300 rounded-box"></div>
                                <div class="flex flex-col gap-2">
                                    <div class="w-32 h-4 bg-gray-300 rounded"></div>
                                    <div class="w-24 h-3 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        ) : (
                            githubData().map((item: any) => (
                                <div>
                                    <div class="flex flex-row gap-5 py-5 w-full justify-between">
                                        <div class="flex flex-row gap-5">
                                            <img loading="lazy" class="size-10 rounded-box " src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="etc" />
                                            <div class="flex flex-col">
                                                <div>
                                                    <div>{item.name}</div>
                                                    <div class="text-xs uppercase font-semibold opacity-60">{item.description}</div>
                                                </div>
                                                <p class="list-col-wrap text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn bg-gray-300 w-32">View Repository</button>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        )
                    ) : null}
                </ul>
            </div>
        </>
    );
}
