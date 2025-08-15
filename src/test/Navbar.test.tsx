import { render, fireEvent } from "solid-testing-library";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
import Navbar from "../components/main/Navbar";

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

describe("Navbar component", () => {
    test("renders menu items", () => {
        render(() => <Navbar />);
        expect(screen.getAllByText("Profile").length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText("Design").length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText("UI Design").length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText("Web Development").length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText("Repository").length).toBeGreaterThanOrEqual(1);
    });

    test("checkbox reflects theme value", () => {
        render(() => <Navbar />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeChecked();
    });

    // ...existing code...
    test("clicking checkbox calls toggleTheme", () => {
        const mockedHooks = require("../hooks/hooks").default;
        const toggleThemeMock = mockedHooks().toggleThemes().toggleTheme;

        render(() => <Navbar />);
        const checkbox = screen.getByRole("checkbox");
        fireEvent.change(checkbox, { target: { checked: false } });
        expect(toggleThemeMock).toHaveBeenCalled();
    });
});
