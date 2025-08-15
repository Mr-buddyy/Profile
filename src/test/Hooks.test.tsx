import { render, fireEvent } from "solid-testing-library";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
// import services from "../services/services";
import GetGithub from "../services/services";
import Navbar from "../components/main/Navbar";
import hooks from "../hooks/hooks";

jest.mock("../hooks/hooks", () => {
    const toggleThemeMock = jest.fn();

    return {
        __esModule: true,
        default: () => ({
            Navbar: () => [
                { label: "Profile", link: "/profile" },
                { label: "Design", link: "#" },
                { label: "UI Design", link: "/portofolio-design" },
                { label: "Web Development", link: "/portofolio-opensource" },
                { label: "Repository", link: "/portofolio-opensource" },
            ],
            Profile: () => [
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
            ],
            toggleThemes: () => ({
                theme: jest.fn(() => true),
                toggleTheme: toggleThemeMock,
            }),
            // __mocks: { toggleThemeMock },
        }),
    };
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("GetGithub", () => {
    test("the fetch fails with an error", async () => {
        // expect.assertions(1);
        const githubData = await GetGithub("Mr-buddyy");
        try {
            githubData;
        } catch (error) {
            expect(error);
        }
    });
    test("the fetch succeeds with data", async () => {
        const githubData = await GetGithub("Mr-buddyy");
        expect(githubData).toBeDefined();
    });
    test("the fetch returns an array", async () => {
        const githubData = await GetGithub("Mr-buddyy");
        expect(Array.isArray(githubData)).toBe(true);
    });
    test("the fetch returns an array with objects containing name and description", async () => {
        const githubData = await GetGithub("Mr-buddyy");
        expect(githubData).toBeDefined();
        expect(Array.isArray(githubData)).toBe(true);
        githubData.forEach((repo: { name: string; description: string }) => {
            expect(repo).toHaveProperty("name");
            expect(repo).toHaveProperty("description");
        });
    });

    test("navbar component renders correctly", () => {
        render(() => <Navbar />);
        const navbar = screen.getByRole("navigation");
        expect(navbar).toBeInTheDocument();
        // expect(screen.getAllByText("Profile").length).toBeGreaterThanOrEqual(1);
        // expect(screen.getAllByText("Design").length).toBeGreaterThanOrEqual(1);
        // expect(screen.getAllByText("UI Design").length).toBeGreaterThanOrEqual(1);
        // expect(screen.getAllByText("Web Development").length).toBeGreaterThanOrEqual(1);
        // expect(screen.getAllByText("Repository").length).toBeGreaterThanOrEqual(1);
    });

    // it("clicking checkbox calls toggleTheme", () => {
    //     // get our mock back from the mocked module
    //     const hooks = require("../../hooks").default;
    //     const { toggleThemeMock } = require("../../hooks").__mocks;

    //     render(() => <Navbar />);
    //     const checkbox = screen.getByRole("checkbox");
    //     fireEvent.change(checkbox, { target: { checked: false } });

    //     expect(toggleThemeMock).toHaveBeenCalled();
    // });
});

describe("Navbar Hooks", () => {
    it("should return correct nav items", () => {
        const items = hooks().Navbar();

        expect(items).toHaveLength(5);
        expect(items[0]).toEqual({ label: "Profile", link: "/profile" });
        expect(items[1].label).toBe("Design");
        expect(items[2].label).toBe("UI Design");
        expect(items[3].label).toBe("Web Development");
        expect(items[4].label).toBe("Repository");
    });
});

describe("Profile Hooks", () => {
    it("should return correct profile data", () => {
        const listCard = hooks().Profile();

        // expect(listCard).toHaveLength(5);
        listCard.forEach((listItem) => {
            expect(listItem).toHaveProperty("field");
            expect(listItem).toHaveProperty("title");
            expect(listItem).toHaveProperty("description");
            expect(listItem).toHaveProperty("border");
        });
    });
});
