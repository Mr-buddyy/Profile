import { Component, createEffect, createSignal } from "solid-js";
import { Navbar, Footer, Button, Timeline, Portofolio, Skill } from "../../components/index";
import { climateaware, desa, event, gamis, stoik } from "../../assets/index";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

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
            <div class="hero min-h-screen bg-base-200 ">
                <div class="hero-content flex-col lg:flex-row-reverse lg:p-40 items-center justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div class="grid lg:grid-cols-2 grid-cols-1 w-full">
                        <div class="">
                            {" "}
                            <h1 class="lg:text-6xl text-4xl font-bold">
                                Junior{" "}
                                <span class="">
                                    <br /> Website <br /> Developer
                                </span>
                            </h1>
                            <p class="py-6">Fresh Graduated Software Engineer From Institut Teknologi Telkom Purwokerto</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end hero */}
            {/* about */}
            <div class="px-20 text-center p-20 flex flex-col gap-10 items-center">
                {" "}
                <div class="text-5xl font-bold">About Me</div>
                <div class="bg-gradient-to-tr from-violet-700 to-blue-600 h-2 w-20 rounded-full"></div>
                <div class="text-lg max-w-2xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
            </div>
            {/* education */}
            <section class="py-10 sm:py-16 lg:py-24">
                <div class=" text-center">
                    {" "}
                    <div class="text-4xl font-bold mb-10">Education</div>
                </div>
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                        <div>
                            <img class="w-full max-w-md mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png" alt="" />
                        </div>
                        <div class="text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">Institut Teknologi Telkom Purwokerto</h2>
                            <p class="mt-6 text-lg font-bold leading-tight  sm:text-xl lg:text-2xl">Software Engineering</p>
                            <p class=" text-base">Sep 2020 - Feb 2024, GPA 3.94</p>
                            <p class="mt-6 text-base text-gray-600">
                                Learn to be a software engineer such as UML : use case diagrams, class diagrams, activity diagrams, sequence diagrams. ERD and DFD. Learn the programming language such as java, javascript, php. Learn markup
                                languages html, css, xml. Learn framework laravel, reactjs, nextjs, nodejs, tailwind css, bootstrap. Learn application testing such as black box testing and white box testing. Learn databases such as data
                                definition language and data manipulation language
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end education */}
            {/* keahlian */}
            <section class="py-10 sm:py-16 lg:py-24 text-center">
                {" "}
                <div class="text-4xl font-bold mb-10">Skills</div>
                <div class="flex flex-row flex-wrap justify-center gap-4 mx-40 ">
                    <Skill children="UI Design" />
                    <Skill children="Web Development" />
                    <Skill children="Responsive web design" />
                    <Skill children="HTML" />
                    <Skill children="JavaScript" />
                    <Skill children="Laravel" />
                    <Skill children="Github" />
                    <Skill children="React" />
                    <Skill children="Tailwind CSS" />
                    <Skill children="MySQL" />
                </div>
            </section>
            {/* end keahlian */}
            <section class="py-10 sm:py-16 lg:py-24">
                {" "}
                <div class="text-4xl font-bold text-center mb-10">Experience</div>
                <Timeline
                    hr={false}
                    timelinetype={"timeline-start md:text-end mb-10"}
                    timelinedate={"June 2022 - June 2023"}
                    timelinecompany={"Software Engineering Student Association"}
                    timelineposition={"Media and information division staff"}
                    timelinedesc={
                        "As a member of the Media and Information Division staff, responsibilities include designing Instagram feed layouts, creating content, developing posters, engaging in photography, and contributing to project management tasks using tools like Figma and Trello for efficient organization."
                    }
                />
                <Timeline
                    hr={true}
                    timelinetype={"timeline-end"}
                    timelinedate={"August 2022 - December 2022"}
                    timelinecompany={"Ruangguru Indonesia - Study Independent"}
                    timelineposition={"FrontEnd Engineering"}
                    timelinedesc={
                        " Learn HTML, CSS, Tailwind CSS, JavaScript, ReactJS, and Node.js for comprehensive web development, applying skills in a final project, gaining practical experience through a certified apprenticeship, and staying current with industry trends through independent study and community engagement."
                    }
                />
                <Timeline
                    hr={true}
                    timelinetype={"timeline-start md:text-end mb-10"}
                    timelinedate={"August 2022 - December 2022"}
                    timelinecompany={"Diesnatalis 6th Software Engineering"}
                    timelineposition={"PDD or publication-decoration-documentation division coordinator"}
                    timelinedesc={
                        " As the PDD Division Coordinator, responsibilities include coordinating staff activities, overseeing project management tasks for publication, decoration, and documentation, creating posters, engaging in photography, designing Instagram feed layouts, generating content, and disseminating information about managed events."
                    }
                />
                <Timeline
                    hr={true}
                    timelinetype={"timeline-end"}
                    timelinedate={"February 2022 - June 2022"}
                    timelinecompany={"Software Engineering Student Association"}
                    timelineposition={"Education and development division staff"}
                    timelinedesc={
                        "As a member of The Education and Development Division staff, responsibilities include enhancing students' software engineering hardskills, conducting training sessions, providing guidance for Gemastik competitions, and assisting with exam preparations."
                    }
                />
                <Timeline
                    hr={true}
                    timelinetype={"timeline-start md:text-end mb-10"}
                    timelinedate={"August 2021 - December 2021"}
                    timelinecompany={"Diesnatalis 5th Software Engineering"}
                    timelineposition={"PDD or publication-decoration-documentation staff"}
                    timelinedesc={
                        "As a member of the PDD (Publication-Decoration-Documentation) staff, responsibilities encompass designing Instagram feed layouts, creating content for Diesnatalis events, utilizing design tools like Figma and Canva for visually appealing designs, and serving as a photographer to document memorable moments during events."
                    }
                />
            </section>
            {/* end about */}
            {/* portofolio */}
            <section class="px-20 p-20 flex flex-col gap-10 w-full items-center border-t">
                {" "}
                <div class="text-5xl font-bold text-center">Project</div>
                <div class="bg-gradient-to-tr from-violet-700 to-blue-600  h-2 w-20 rounded-full"></div>
                <div class="text-lg max-w-2xl text-center">Here you will find more information about my project mostly in terms of website development</div>
                <ul class="gap-10 flex flex-col items-center justify-center p-20">
                    {/* <li class="text-2xl font-bold">Project Website Development</li> */}
                    <Portofolio
                        img={event}
                        date={"Website Event, August 2023 - January 2024"}
                        desc={"Building a website for connecting college students with sponsorships as the final assignment project, incorporating MySQL, Laravel, Tailwind CSS, and Javascript"}
                        skills={"Laravel, JavaScript, Fullstack, Monolith, Tailwind CSS, MySQL"}
                        href={"https://github.com/Mr-buddyy/Skripsi_Rev21"}
                    />
                    <Portofolio
                        img={stoik}
                        date={"Website Stoik, December 2023 - January 2024"}
                        desc={
                            "As a front-end developer, I specialize in crafting visually appealing website interfaces using the Next.js and Tailwind CSS frameworks. I seamlessly integrate backend APIs, incorporating essential functionalities like search and sorting to enhance user experience."
                        }
                        skills={"Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL"}
                        href={"https://github.com/Mr-buddyy/Tubes-Front-End"}
                    />
                    <Portofolio
                        img={gamis}
                        date={"Website Gamis, November 2023- December 2023"}
                        desc={
                            "As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo"
                        }
                        skills={"Laravel, NextJs, JavaScript, Fullstack, Tailwind CSS, MySQL"}
                        href={"https://github.com/Mr-buddyy/Portofolio"}
                    />
                    <Portofolio
                        img={desa}
                        date={"Website Desa, May 2022 - July 2022"}
                        desc={"Developing a website for Central Sokaraja village as a project for the web design and programming midterm test, utilizing MySQL, PHP, HTML, CSS, and Tailwind"}
                        skills={"PHP, JavaScript, CSS, Fullstack, MySQL"}
                        href={"https://github.com/raynaldizf/website-desa-sokaraja"}
                    />
                    <Portofolio
                        img={climateaware}
                        date={"Website Climate Aware, December 2023 - January 2024"}
                        desc={
                            "As Backend developer. Provisioning endpoints based on requirements while ensuring security, implementing business logic, handling errors, conducting backend testing, and managing databases. In the context of utilizing Laravel technology, MySQL is employed for database management. Also designing the logo"
                        }
                        skills={"Laravel, NextJs, JavaScript, Fullstack, MySQL"}
                        href={"https://github.com/mirfani340/climate-aware.id"}
                    />
                </ul>
            </section>
            {/* end portofolio */}
            {/* contact */}
            <section class="px-20 text-center p-20 flex flex-col gap-10 items-center w-full border-t">
                {" "}
                <div class="text-5xl font-bold">Contact</div>
                <div class="bg-gradient-to-tr from-violet-700 to-blue-600  h-2 w-20 rounded-full"></div>
                <div class="text-lg max-w-2xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
                <div role="alert" class="alert alert-success hidden lg:w-1/2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pesan Berhasil Dikirim!</span>
                    <button class="close btn-sm btn-primary" onClick={closeModal}>
                        close
                    </button>
                </div>
                <div class="flex flex-col drop-shadow-md shadow-2xl p-10 gap-4 lg:w-1/2 rounded">
                    {" "}
                    <form ref={setForm} id="Contact-From">
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Name</span>
                            </div>
                            <input type="text" class="grow input input-bordered " placeholder="Enter Your Name" name="nama" />
                        </label>
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Email</span>
                            </div>
                            <input type="email" class="grow input input-bordered " placeholder="Email" name="email" />
                        </label>
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Message</span>
                            </div>
                            <textarea class="textarea textarea-bordered h-24" placeholder="message" name="pesan"></textarea>
                        </label>
                        <button type="submit" class="btn send mt-10">
                            submit
                        </button>
                        <button class="btn loading hidden">
                            <span class="loading loading-spinner loading-xs"></span>
                        </button>
                        {/* <Button children={"submit"} href={"#"} /> */}
                    </form>
                </div>
            </section>
            {/* end contact */}
            <Footer />{" "}
        </div>
    );
};

export default home;
