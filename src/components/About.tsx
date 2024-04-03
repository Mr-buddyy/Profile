import { Component } from "solid-js";
import { Timeline, Skill } from "./index";
import { logo } from "../assets/index";

const about: Component = () => {
    return (
        <div>
            {/* about */}
            <div class="px-20 text-center flex flex-col gap-10 items-center">
                {" "}
                <div class="text-5xl font-bold">About Me</div>
                <div class="bg-gradient-to-tr from-violet-700 to-blue-600 h-2 w-20 rounded-full"></div>
                <div class="text-lg max-w-2xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
            </div>
            {/* education */}
            <section class="py-10 sm:py-16 lg:py-20">
                <div class=" text-center">
                    {" "}
                    <div class="text-4xl font-bold mb-10">Education</div>
                </div>
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                        <div>
                            <img class="w-full max-w-xs mx-auto" src={logo} alt="" />
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
            {/* skill */}
            <section class="py-10 sm:py-16 lg:py-20 text-center">
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
                    <Skill children="ReactJS" />
                    <Skill children="Tailwind CSS" />
                    <Skill children="MySQL" />
                    <Skill children="NextJS" />
                    <Skill children="CSS" />
                </div>
            </section>
            {/* end skill */}
            {/* experience */}
            <section class="py-10 sm:py-16 lg:py-20">
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
            {/* end experience */}
            {/* end about */}
        </div>
    );
};

export default about;
