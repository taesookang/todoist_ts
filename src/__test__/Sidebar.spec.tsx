import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Sidebar from "../components/layout/Sidebar";
import { useSelectedProjectValue, useProjectsValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
  useProjectsValue: jest.fn(() => ({
    setProject: jest.fn(),
    projects: [
      {
        name: "🎵 Music",
        projectId: "1",
        userId: "tarrak123",
        docId: "D0kOgOJG9gZXzD9QcM7o",
      },
    ],
  })),
}));

beforeEach(cleanup);

const mockedSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
  typeof useSelectedProjectValue
>;
const mockedProjectsValue = useProjectsValue as jest.MockedFunction<
  typeof useProjectsValue
>;

describe("<Sidebar />", () => {
  describe("Sucecess", () => {
    it("renders the <Sidebar />", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();
    });

    it("changes the active project to Inbox in collated tasks", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      expect(queryByTestId("inbox").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });
    it("changes the active project to Today in collated tasks", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();
      fireEvent.click(queryByTestId("inbox-action"));
      fireEvent.keyDown(queryByTestId("inbox-action"));

      expect(queryByTestId("inbox").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });
    it("changes the active project to today in collated tasks", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();
      fireEvent.click(queryByTestId("today-action"));
      fireEvent.keyDown(queryByTestId("today-action"));

      expect(queryByTestId("today").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    it("changes the active project to Next_7 in collated tasks", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();
      fireEvent.click(queryByTestId("next_7-action"));
      fireEvent.keyDown(queryByTestId("next_7-action"));

      expect(queryByTestId("next_7").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
    });

    it("hides and shows the sidebar projects using onClick", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId, getByText } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.click(getByText("Projects"));
      expect(queryByTestId("add-project-action")).toBeFalsy();

      fireEvent.click(getByText("Projects"));
      expect(queryByTestId("add-project-action")).toBeTruthy();
    });

    it("hides and shows the sidebar projects using onKeyDown", () => {
      mockedSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "INBOX",
        setSelectedProject: () => "INBOX",
      }));

      mockedProjectsValue.mockImplementation(() => ({
        setProjects: () => [],
        projects: [
          {
            name: "🎵 Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
      }));
      const { queryByTestId, getByText } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.keyDown(getByText("Projects"));
      expect(queryByTestId("add-project-action")).toBeFalsy();

      fireEvent.keyDown(getByText("Projects"));
      expect(queryByTestId("add-project-action")).toBeTruthy();
    });
  });
});
