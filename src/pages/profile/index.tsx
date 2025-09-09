import { Icon } from "@iconify-icon/solid";
import { profile } from "../../assets/index";
import Navbar from "../../components/main/Navbar";
import hooks from "../../hooks/hooks";
import { Transition } from "solid-transition-group";
import { createSignal } from "solid-js";
import { About } from "../../components";

export default function index() {
    const { Profile } = hooks();
    const listCard = Profile();
    const [showDetails, setShowDetails] = createSignal(false);

    return (
        <>
            <Navbar />
            <div class="">
                <Transition
                    onEnter={(el, done) => {
                        el.animate(
                            [
                                { opacity: 0, transform: "translateY(100px)" },
                                { opacity: 1, transform: "translateY(0)" },
                            ],
                            { duration: 500, easing: "ease-out" }
                        ).finished.then(done);
                    }}
                    onExit={(el, done) => {
                        el.animate(
                            [
                                { opacity: 1, transform: "translateY(0)" },
                                { opacity: 0, transform: "translateY(-100px)" },
                            ],
                            { duration: 500, easing: "ease-in" }
                        ).finished.then(done);
                    }}
                >
                    {!showDetails() ? (
                        // -------------------- Intro --------------------
                        <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-10 py-20 lg:px-32 px-5">
                            <div class="flex flex-col gap-5 text-center lg:px-52">
                                <h1 class="lg:text-6xl text-4xl font-bold">
                                    Software Engineer
                                    {/* <span class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</span> */}
                                </h1>
                                <p class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</p>
                                {/* <p>Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.</p> */}
                            </div>

                            {/* Main content */}
                            <div class="flex lg:flex-row flex-col gap-5">
                                <section class="card w-full h-[-webkit-fill-available] bg-base-100 shadow-sm rounded-none">
                                    {/* <figure></figure> */}
                                    <div class="card-body items-center justify-items-center text-center justify-center">
                                        <div>
                                            <div class="self-center items-center py-10">
                                                <div class="avatar">
                                                    <div class="w-52 rounded-full">
                                                        <img src={profile} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="self-center text-center">
                                                Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.
                                            </h2>
                                            <div class="self-center">
                                                <button class="btn btn-link p-0" onClick={() => setShowDetails(true)}>
                                                    More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="grid lg:grid-cols-2 grid-rows-1 gap-5 w-full h-[-webkit-fill-available]">
                                    {listCard.map((card: any, index: number) => (
                                        <section key={index} class={`card card-md bg-base-100 shadow-sm rounded-none`} style={card.border ? { "border-color": card.border, "border-bottom-width": "1px", "border-style": "solid" } : {}}>
                                            <figure class="self-start pt-[2rem] pl-[2rem]">
                                                <Icon icon={card.icon} width={"5em"} height={"5em"} />
                                            </figure>
                                            <div class="card-body">
                                                <h2 class="card-title">{card.title}</h2>
                                                <p>{card.description}</p>
                                                <div class="self-start">
                                                    <button class="btn btn-link p-0" onClick={() => window.open(card.link, "_blank")}>
                                                        More
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                    ))}
                                </section>
                            </div>
                            {/* End Main content */}
                        </div>
                    ) : (
                        // -------------------- Details --------------------
                        <About />
                    )}
                </Transition>
            </div>
        </>
    );
}

// ori

// <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-10 py-20">
//     <div class="flex flex-col gap-5 text-center lg:px-52">
//         <h1 class="lg:text-6xl text-4xl font-bold">
//             Software Engineer
//             {/* <span class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</span> */}
//         </h1>
//         <p class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</p>
//         {/* <p>Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.</p> */}
//     </div>

//     {/* Main content */}
//     <div class="flex lg:flex-row flex-col gap-5 items-center justify-items-center lg:px-32 px-10">
//         <section class="card w-full h-[-webkit-fill-available] bg-base-100 shadow-sm rounded-none">
//             {/* <figure></figure> */}
//             <div class="card-body">
//                 <div class="self-center items-center py-10">
//                     <div class="avatar">
//                         <div class="w-52 rounded-full">
//                             <img src={profile} />
//                         </div>
//                     </div>
//                 </div>
//                 <p class="self-center text-center text-xl">
//                     Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.
//                 </p>
//                 <div class="self-center">
//                     <button class="btn btn-link p-0" onClick={() => window.open("/", "_blank")}>
//                         More
//                     </button>
//                 </div>
//             </div>
//         </section>
//         <section class="grid grid-cols-2 gap-5 w-full h-[-webkit-fill-available]">
//             {listCard.map((card: any, index: number) => (
//                 <section key={index} class={`card card-md bg-base-100 shadow-sm rounded-none`} style={card.border ? { "border-color": card.border, "border-bottom-width": "1px", "border-style": "solid" } : {}}>
//                     <figure class="self-start pt-[2rem] pl-[2rem]">
//                         <Icon icon={card.icon} width={"5em"} height={"5em"} />
//                     </figure>
//                     <div class="card-body">
//                         <h2 class="card-title">{card.title}</h2>
//                         <p>{card.description}</p>
//                         <div class="self-start">
//                             <button class="btn btn-link p-0" onClick={() => window.open(card.link, "_blank")}>
//                                 More
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             ))}
//         </section>
//     </div>
//     {/* End Main content */}
// </div>
