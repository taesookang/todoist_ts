import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AddProject from "../components/AddProject";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { firebase } from "../firebase";
import { mocked } from "ts-jest/utils";

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve("I am resolved")),
      })),
    })),
  },
}));

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(),
}));

const mockedProjectValue = useProjectsValue as jest.MockedFunction<
  typeof useProjectsValue
>;
const mockedSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
  typeof useSelectedProjectValue
>;

const mockedFirebase = mocked(firebase, true)

beforeEach(cleanup);

describe("<AddProject />", () => {
  describe("Success", () => {
    const addProject = <AddProject shouldShow />;
    const projects = [
      {
        name: "🎵 Music",
        projectId: "1",
        userId: "tarrak123",
        docId: "D0kOgOJG9gZXzD9QcM7o",
      },
      {
        name: "🖥 Office",
        projectId: "2",
        userId: "tarrak123",
        docId: "nCvZ1CgYCrGlOlXhVYrG",
      },
    ];

    it("renders <AddProject /> and add a project", () => {
      const { queryByTestId } = render(addProject);
      expect(queryByTestId("add-project")).toBeTruthy();

      mockedProjectValue.mockImplementation(() => ({
        projects: projects,
        setProjects: jest.fn(),
      }));

      const theInput = queryByTestId("project-name") as HTMLInputElement;
      fireEvent.change(theInput, {
        target: { value: "Best project" },
      });
      expect(theInput.value).toBe("Best project");
      fireEvent.click(queryByTestId("add-project-submit"));
    });

    it("hides the project overlay when cancel using onClick", () => {
      const { queryByTestId, getByText } = render(addProject);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.click(getByText("Cancel"));
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay when cancel using onKeyDown", () => {
      const { queryByTestId, getByText } = render(addProject);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.keyDown(getByText("Cancel"));
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay using onClick singular and reverse action", () => {
      const { queryByTestId } = render(addProject);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.click(queryByTestId("add-project-action"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay using onKeyDown singular and reverse action", () => {
      const { queryByTestId } = render(addProject);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("add-project-action"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });
  });
});
