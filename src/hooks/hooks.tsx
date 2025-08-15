import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { pyramidmockup, emergencymockup, laundryskuymockup, mencaremockup } from "../assets";
import GetGithub from "../services/services";

export default function hooks() {
    const Navbar = () => {
        const items = [
            { label: "Profile", link: "/profile" },
            { label: "Design", link: "#" },
            { label: "UI Design", link: "/portofolio-design" },
            { label: "Web Development", link: "/portofolio-opensource" },
            { label: "Repository", link: "/portofolio-opensource" },
        ];
        createEffect(() => {
            onCleanup(() => {
                items;
            });
            items;
        });
        return items;
    };

    const Profile = () => {
        const listCard = [
            {
                field: "Design",
                title: "Design",
                description: "A brief description of Design",
                border: "#2A67FF",
                link: "#",
            },

            {
                field: "UI Design",
                title: "UI Design",
                description: "A brief description of UI Design",
                icon: "vscode-icons:file-type-xib",
                border: "#e9ad0f",
                link: "/portofolio-design",
            },
            {
                field: "Web Development",
                title: "Web Development",
                description: "A brief description of Web Development",
                icon: "vscode-icons:folder-type-electron-opened",
                border: "#74989e",
                link: "/portofolio-web",
            },
            {
                field: "Repository",
                title: "Repository",
                description: "A brief description of Repository",
                icon: "vscode-icons:folder-type-git-opened",
                border: "#dd4c35",
                link: "/portofolio-web",
            },
        ];
        createEffect(() => {
            onCleanup(() => {
                listCard;
            });
            listCard;
        });
        return listCard;
    };

    const toggleThemes = () => {
        const [theme, setDarkTheme] = createSignal(getInitialTheme());
        const toggleTheme = () => {
            setDarkTheme((prevTheme) => !prevTheme);
        };
        createEffect(() => {
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                htmlElement.setAttribute("data-theme", theme() ? "dark" : "light"); // Convert boolean to string

                // Cleanup function to remove the attribute when the component unmounts
                onCleanup(() => {
                    htmlElement.removeAttribute("data-theme");
                });
            }
            localStorage.setItem("theme", theme() ? "dark" : "light");
        });
        function getInitialTheme() {
            // Get theme from localStorage or default to light theme
            const storedTheme = localStorage.getItem("theme");
            return storedTheme === "dark";
        }
        return { theme, toggleTheme };
    };

    const ProjectDesign = () => {
        const projectList = [
            {
                item: "pyramid-mockup_fy8qjx",
                title: "Pyramid Management System",
                caption: "Pyramid Market Management System",
                tags: "UI Design | Website | Mobile",
            },
            {
                item: "emergency-mockup_lalbep",
                title: "Emergency App",
                caption: "Emergency Response System",
                tags: "UI Design | Mobile",
            },
            {
                item: "mencare-mockup_rr4ryy",
                title: "MenCare",
                caption: "Men Care Application",
                tags: "UI Design | Mobile",
            },
            {
                item: "laundyskuy-mockup_vkez41",
                title: "LaundrySky",
                caption: "Laundry Management System",
                tags: "UI Design | Mobile",
            },
        ];
        return projectList;
    };

    const ProjectOpenSource = () => {
        const [githubData, setGithubData] = createSignal([]);
        const fetchDataAttendance = async () => {
            const githubData = await GetGithub("Mr-buddyy");
            setGithubData(githubData);
        };
        onMount(() => {
            fetchDataAttendance();
        });
        return { githubData, setGithubData, fetchDataAttendance };
    };
    return { Navbar, Profile, toggleThemes, ProjectDesign, ProjectOpenSource };
}
