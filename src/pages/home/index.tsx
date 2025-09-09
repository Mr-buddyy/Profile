import { Component, createEffect, createSignal } from "solid-js";
import { Navbar, Footer, Button, Timeline, Portofolio, Skill, Contact, About } from "../../components/index";
import { climateaware, desa, event, gamis, stoik, profile } from "../../assets/index";

const scriptURL = "https://script.google.com/macros/s/AKfycbwDQN2AF1ZzQn0jek3sTjJSpuXqiKhDLc--s5wP0PJS6BgrgHmUuHffLvWEdsjTiRreAA/exec";

const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const success = document.querySelector(".alert-success");
    const loading = form.querySelector(".loading");
    const send = form.querySelector(".send");

    if (loading) {
        loading.classList.remove("hidden");
    }
    if (send) {
        send.classList.add("hidden");
    }
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            if (send) {
                send.classList.remove("hidden");
            }
            if (loading) {
                loading.classList.add("hidden");
            }
            if (success) {
                success.classList.remove("hidden");
            }
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
};
const home: Component = () => {
    const [route] = createSignal(location.pathname);

    const [form, setForm] = createSignal<HTMLFormElement | null>(null);

    createEffect(() => {
        if (form()) {
            form()!.addEventListener("submit", handleSubmit);

            return () => {
                form()!.removeEventListener("submit", handleSubmit);
            };
        }
    });
    const closeModal = () => {
        const success = document.querySelector(".alert-success");
        if (success) {
            success.classList.toggle("hidden");
        }
    };
    return (
        <div>
            <Navbar />
            {/* Hero */}
            {/* <div class="hero bg-base-200 min-h-screen">
                <img src={profile} class="w-full h-full absolute rounded-lg shadow-2xl -z-0 opacity-80" />
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Junior Software Engineer</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            <section class="pt-32 px-32 w-full">
                <div class="flex flex-row border-b pb-16 items-center justify-between gap-10">
                    <div class="w-1/2">
                        <img src={profile} alt="" />
                    </div>
                    <div class="w-1/2 flex flex-col gap-5">
                        <p class="text-4xl font-bold">Software Engineer</p>
                        <p class="text-justify">
                            A passionate and detail-oriented Software Engineer with solid experience in frontend and fullstack development using modern frameworks such as Next.js, SolidJS, and Rust. Skilled in building scalable
                            applications, creating responsive UI/UX, and leading internal projects. Has a strong foundation in software engineering principles, collaborative team experience, and organizational leadership. Experienced in
                            mentoring, content creation, and managing media teams.
                        </p>
                    </div>
                </div>
            </section>
            {/* end hero */}
            {/* about */}
            <section class="">
                <About />
            </section>
            {/* end about */}
            <Footer />{" "}
        </div>
    );
};

export default home;

// Portofolio
//   <section class="px-20 p-20 flex flex-col gap-10 w-full items-center border-t">
//                 {" "}
//                 <div class="text-5xl font-bold text-center">Project</div>
//                 <div class="bg-gradient-to-tr from-violet-700 to-blue-600  h-2 w-20 rounded-full"></div>
//                 <div class="text-lg max-w-2xl text-center">Here you will find more information about my project mostly in terms of website development</div>
//                 <ul class="gap-10 flex flex-col items-center justify-center p-20">
//                     {/* <li class="text-2xl font-bold">Project Website Development</li> */}
//                     <Portofolio
//                         img={event}
//                         date={"Website Event, August 2023 - January 2024"}
//                         desc={"Building a website for connecting college students with sponsorships as the final assignment project, incorporating MySQL, Laravel, Tailwind CSS, and Javascript"}
//                         skills={"Laravel, JavaScript, Fullstack, Monolith, Tailwind CSS, MySQL"}
//                         href={"https://github.com/Mr-buddyy/Skripsi_Rev21"}
//                     />
//                     <Portofolio
//                         img={stoik}
//                         date={"Website Stoik, December 2023 - January 2024"}
//                         desc={
//                             "As a front-end developer, I specialize in crafting visually appealing website interfaces using the Next.js and Tailwind CSS frameworks. I seamlessly integrate backend APIs, incorporating essential functionalities like search and sorting to enhance user experience."
//                         }
//                         skills={"Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL"}
//                         href={"https://github.com/Mr-buddyy/Tubes-Front-End"}
//                     />
//                     <Portofolio
//                         img={gamis}
//                         date={"Website Gamis, November 2023- December 2023"}
//                         desc={
//                             "As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo"
//                         }
//                         skills={"Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL"}
//                         href={"https://github.com/Mr-buddyy/Portofolio"}
//                     />
//                     <Portofolio
//                         img={desa}
//                         date={"Website Desa, May 2022 - July 2022"}
//                         desc={"Developing a website for Central Sokaraja village as a project for the web design and programming midterm test, utilizing MySQL, PHP, HTML, CSS, and Tailwind"}
//                         skills={"PHP, JavaScript, CSS, Fullstack, MySQL"}
//                         href={"https://github.com/raynaldizf/website-desa-sokaraja"}
//                     />
//                     <Portofolio
//                         img={climateaware}
//                         date={"Website Climate Aware, December 2023 - January 2024"}
//                         desc={
//                             "As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo"
//                         }
//                         skills={"Laravel, NextJs, JavaScript, Fullstack, MySQL"}
//                         href={"https://github.com/mirfani340/climate-aware.id"}
//                     />
//                 </ul>
//             </section>
