import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ProjectOverlay from "../components/ProjectOverlay";
import { useProjectsValue } from "../context/projectContext";

beforeEach(cleanup);

jest.mock("../context/projectContext", () => ({
  useProjectsValue: jest.fn(),
}));

const mockedProjects = useProjectsValue as jest.MockedFunction<
  typeof useProjectsValue
>;

describe("<ProjectOverlay />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("Success", () => {
    it("renders the project overlay and calls setShowProjectOverlay using onClick", () => {
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

      const showProjectOverlay = true;
      const setProject = jest.fn();
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay);

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      );

      expect(queryByTestId("project-overlay")).toBeTruthy();
      fireEvent.click(queryByTestId("project-overlay-action"));
      expect(setProject).toHaveBeenCalled();
    });

    it("renders the project overlay and calls setShowProjectOverlay using onKeyDown", () => {
      const mockedProjects = useProjectsValue as jest.MockedFunction<
        typeof useProjectsValue
      >;

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

      const showProjectOverlay = true;
      const setProject = jest.fn();
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay);

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      );

      expect(queryByTestId("project-overlay")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("project-overlay-action"));
      expect(setProject).toHaveBeenCalled();
    });
  });
});

describe("Failure", () => {
  it("does not render the project overlay with any projects", () => {
    mockedProjects.mockImplementation(() => ({
      projects: [],
      setProjects: () => [],
    }));

    const { queryByTestId } = render(
      <ProjectOverlay
        showProjectOverlay
        setProject={() => {}}
        setShowProjectOverlay={() => Boolean}
      />
    );
    expect(queryByTestId('project-overlay')).toBeTruthy()
    expect(queryByTestId('project-overlay-action')).toBeFalsy()
  });
});
