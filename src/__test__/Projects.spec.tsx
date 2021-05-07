import React from "react";
import Projects from "../components/Projects";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { useProjectsValue } from "../context";

beforeEach(cleanup);

jest.mock("../context/projectContext", () => ({
  useProjectsValue: jest.fn(),
}));

const mockedProjects = useProjectsValue as jest.MockedFunction<
  typeof useProjectsValue
>;

describe("<Projects />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("Success", () => {
    it("renders the projects", () => {
      mockedProjects.mockImplementation(() => ({
        projects: [
          {
            name: "Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
        setProjects: () => [],
      }));
      const { queryByTestId } = render(<Projects activeValue={null} />);
      expect(queryByTestId("project-action") as HTMLElement).toBeTruthy();
    });

    it("renders the projects and selects an active project using onClick", () => {
      mockedProjects.mockImplementation(() => ({
        projects: [
          {
            name: "Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
        setProjects: () => [],
      }));
      const { queryByTestId } = render(<Projects activeValue="1"/>);
      expect(queryByTestId("project-action-parent") as HTMLElement).toBeTruthy();

      fireEvent.click(queryByTestId('project-action'));
      expect(
        queryByTestId('project-action-parent').classList.contains('active')
      ).toBeTruthy()
    });

    it("renders the projects and selects an active project using onKeyDown", () => {
      mockedProjects.mockImplementation(() => ({
        projects: [
          {
            name: "Music",
            projectId: "1",
            userId: "tarrak123",
            docId: "D0kOgOJG9gZXzD9QcM7o",
          },
        ],
        setProjects: () => [],
      }));
      const { queryByTestId } = render(<Projects activeValue="1"/>);
      expect(queryByTestId("project-action-parent") as HTMLElement).toBeTruthy();

      fireEvent.keyDown(queryByTestId('project-action'));
      expect(
        queryByTestId('project-action-parent').classList.contains('sidebar__project')
      ).toBeTruthy()
    });

  
  });
});
