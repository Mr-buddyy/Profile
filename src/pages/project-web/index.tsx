import { createSignal, onMount } from "solid-js";
import GetGithub from "../../services/services";
import Navbar from "../../components/main/Navbar";

export default function index() {
    const [githubData, setGithubData] = createSignal([]);
    const fetchDataAttendance = async () => {
        const githubData = await GetGithub("Mr-buddyy");
        setGithubData(githubData);
    };
    onMount(() => {
        fetchDataAttendance();
    });
    return (
        <>
            <Navbar />
            <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-2">
                {/* <ul class="list bg-base-100 rounded-box shadow-md p-5">
                    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                    <li class=" flex flex-row gap-5">
                        <div>
                            <img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                        </div>
                        <div class="flex flex-col">
                            <div>
                                <div>Dio Lupa</div>
                                <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <p class="list-col-wrap text-xs">
                                "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
                            </p>
                        </div>
                        <div>
                            <button class="btn">View Repository</button>
                        </div>
                    </li>
                </ul> */}
                <ul class="">
                    <li class="p-4 text-5xl  tracking-wide font-bold text-center">Project Website</li>
                    {Array.isArray(githubData()) &&
                        githubData().map((item: any) => (
                            <div>
                                <div class="flex flex-row gap-5 py-5 w-full justify-between">
                                    <div class="flex flex-row gap-5">
                                        <img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="etc" />
                                        <div class="flex flex-col">
                                            <div>
                                                <div>{item.name}</div>
                                                <div class="text-xs uppercase font-semibold opacity-60">{item.description}</div>
                                            </div>
                                            <p class="list-col-wrap text-xs">{item.description}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="btn">View Repository</button>
                                    </div>
                                </div>
                                {/* {item.name}
                            <a href={item.html_url} target="_blank">
                                View Repository
                            </a> */}
                                <hr />
                            </div>
                        ))}
                </ul>
            </div>
        </>
    );
}
