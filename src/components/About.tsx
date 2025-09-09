import { Component, createEffect } from "solid-js";
import { braincodelogo, hmselogo, ittplogo, ruanggurulogo, idseventlogo, profile } from "../assets/index";

const about: Component = () => {
    const listExperience = [
        {
            company: "Braincode Digital Teknologi",
            position: "Software Engineer",
            duration: "April 2024 - Present",
            location: "Cipete, South Jakarta, Special Capital Region of Jakarta",
            description: `
Focused on full-stack web development using JavaScript frameworks such as Next.js, SolidJS for front-end, and Rust or Node.js for back-end services. In addition, I also perform several tasks, such as internal server setup and application deployment.

Styled user interfaces with Tailwind CSS, DaisyUI, and HeroUI to ensure responsive and consistent design.

Implemented complex data-driven interfaces using AG Grid and amCharts for dashboard and visualization requirements.

Worked with various databases including MySQL, PostgreSQL, ClickHouse, and SurrealDB to support scalable data storage and analytics.

Key Projects & Contributions:

- Developed alarm BTS dashboard for Telkomsel (Front-end).
- Built two full-stack dashboard systems for Pertamina Tuban, from UI to API integration.
- Contributed to multiple smaller projects, including group call services (Back-end) and a CMS for BKKBN using React and Laravel Breeze.
- Developed several alarm BTS backend services for Telkomsel.
- Created and maintained the company’s internal ERP system (Full-stack).
- Took ownership of MEVO (MetraMediaHub) platform, maintaining 3 dashboards (Full-stack) after initial development with a team.
- Implemented backend services for MyTelkomsel, integrating with internal systems and third-party services.
- Led the development of an internal Learning Management System (LMS) and a Computer Vision AI project for helmet and vest detection, where responsibilities included:
  - Supervising internship students
  - Assigning and reviewing tasks
  - Providing mentorship and evaluations
  - Coordinating project timelines and deliverables
`,
            image: braincodelogo,
        },
        {
            company: "Software Engineering Student Association",
            position: "Media and information staff",
            duration: "June 2022 - June 2023",
            location: "Purwokerto",
            description: `
Served as part of the Media & Information Division, managing visual content and digital communication strategies for the student organization.
Designed Instagram feed layouts, edited videos, created visual posters, and documented organizational activities through photography and video content.
Took ownership of the EdukaSE program, producing educational content on Software Engineering topics to enhance student knowledge and visibility.
Contributed to overall HMSE media activities including:

RekomendaSE – Curated recommendations for tools, libraries, and trends in software engineering.
PodcaSE – Supported podcast production with relevant SE professionals.
RPL Pride – Helped highlight achievements of high-performing SE students.
DokumentaSE – Participated in capturing and posting event documentation on Instagram.
Shared team-wide responsibility for managing the HMSE Instagram account, ensuring content consistency and engagement.
Utilized Figma for collaborative design work and Trello for project and task management within the division.
`,
            image: hmselogo,
        },
        {
            company: "Ruangguru Indonesia - Study Independent",
            position: " FrontEnd Engineering",
            duration: "August 2022 - December 2022",
            location: "Online",
            description: `
Completed a certified intensive apprenticeship in Frontend Engineering under the Kampus Merdeka MSIB Program.
Gained foundational to advanced knowledge in HTML, CSS, Tailwind CSS, JavaScript, and ReactJS.
Introduced to backend fundamentals using Node.js, as well as version control systems like Git.
Learned deployment best practices using Firebase Hosting for real-world application.
Applied knowledge in a final team project, building a fully functional web application from scratch.
Maintained up-to-date understanding of frontend technologies through independent study and community discussions.
`,
            image: ruanggurulogo,
        },
        {
            company: "Diesnatalis 6th Software Engineering",
            position: "PDD Division Coordinator (Publication, Decoration, and Documentation)",
            duration: "August 2022 - December 2022",
            location: "Purwokerto",
            description: `
Led the PDD Division during a large-scale multi-event celebration, including competitions (Web & UI/UX Design), a hybrid national seminar, charity visit, and closing prom night.
Coordinated cross-functional collaboration with other divisions to manage all aspects of publication, venue decoration, and event documentation.
Delegated tasks to team members and ensured the timely delivery of visual and promotional assets.
Managed inbound requests from other divisions for content creation (posters, videos, etc.), translating them into actionable tasks for the PDD team.
Oversaw event documentation, including photography, video editing, and livestreaming via YouTube.
Designed promotional materials and curated social media content for platforms like Instagram, WhatsApp, and others.
Used Trello for task management and Figma for collaborative design work.
`,
            image: idseventlogo,
        },
    ];

    const listEducation = [
        {
            institution: "Institut Teknologi Telkom Purwokerto",
            degree: "Bachelor of Software Engineering",
            year: "2024",
            gpa: "3.94",
            description: `
Comprehensive study of software development lifecycle, from system analysis to deployment and maintenance.
Learned modeling and documentation tools such as UML (Use Case, Class, Activity, Sequence Diagrams), ERD, and DFD.
Gained hands-on experience with programming languages: Java, JavaScript, PHP, and markup languages like HTML, CSS, XML.
Studied modern frameworks and libraries: Laravel, ReactJS, NextJS, NodeJS, Tailwind CSS, and Bootstrap.
Acquired database knowledge: DDL (Data Definition Language) and DML (Data Manipulation Language) using various RDBMS.
Learned software testing methodologies including Black Box and White Box Testing.
Completed a capstone project building a full-stack Laravel-based platform that connects student event organizers with potential sponsors.
Participated in real-world projects collaborating with schools and SMEs, applying frontend and UI/UX skills in live use cases.
Broadened academic foundation with courses in Islamic Studies, PPKn, Calculus, Networking, and Entrepreneurship.`,
            image: ittplogo,
        },
    ];

    return (
        <div class="lg:px-32 lg:pt-32 p-5">
            <section class="w-full">
                <div class="flex flex-col-reverse lg:flex-row border-b pb-16 items-center justify-between gap-10">
                    <div class="lg:w-1/2 w-full">
                        <img src={profile} alt="" />
                    </div>
                    <div class="lg:w-1/2 w-full flex flex-col gap-5">
                        <h1 class="font-bold">Software Engineer</h1>
                        <p class="text-justify">
                            A passionate and detail-oriented Software Engineer with solid experience in frontend and fullstack development using modern frameworks such as Next.js, SolidJS, and Rust. Skilled in building scalable
                            applications, creating responsive UI/UX, and leading internal projects. Has a strong foundation in software engineering principles, collaborative team experience, and organizational leadership. Experienced in
                            mentoring, content creation, and managing media teams.
                        </p>
                    </div>
                </div>
            </section>
            {/* about */}
            <div class="">
                <section class="flex flex-col gap-10 w-full py-10">
                    <h1 class="font-bold">Education</h1>
                    <ul class="">
                        {listEducation.map((education, index) => (
                            <li class="flex flex-row py-5" key={index}>
                                <img src={education?.image} alt={education.institution} class="w-16 h-16 mr-4" />
                                <div class="flex flex-col gap-2">
                                    {" "}
                                    <h2 class="font-bold">{education.institution}</h2>
                                    <p class="text-gray-500">
                                        {education.degree} - {education.year}
                                    </p>
                                    <p class="text-gray-500">{education.gpa}</p>
                                    <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
                                        {education.description
                                            .split("\n")
                                            .filter(Boolean)
                                            .map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                    </ul>
                                    {/* <p class="">{education.description}</p> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section class="flex flex-col w-full gap-10">
                    <div class="text-4xl font-bold">Experience</div>
                    <ul class="">
                        {listExperience.map((experience, index) => (
                            <li class="flex flex-row py-5" key={index}>
                                <img src={experience?.image} alt={experience.company} class="w-16 h-16 mr-4" />
                                <div class="flex flex-col gap-2">
                                    <p class="font-bold text-2xl">{experience.company}</p>
                                    <p class="text-gray-500">
                                        {experience.position} - {experience.duration}
                                    </p>
                                    <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
                                        {experience.description
                                            .split("\n")
                                            .filter(Boolean)
                                            .map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                    </ul>
                                    {/* <p class="">{experience.description}</p> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* end about */}
            </div>
        </div>
    );
};

export default about;
