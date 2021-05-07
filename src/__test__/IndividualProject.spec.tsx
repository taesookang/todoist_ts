import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import IndividualProject from "../components/IndividualProject";
import { firebase } from "../firebase";

beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          delete: jest.fn(() => Promise.resolve("No mocking firebase")),
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

jest.mock("../context", () => ({
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "Music",
        projectId: "1",
        userId: "tarrak123",
        docId: "D0kOgOJG9gZXzD9QcM7o",
      },
    ],
  })),
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
}));

const mockedProjects = useProjectsValue as jest.MockedFunction<
  typeof useProjectsValue
>;

describe("<IndividualProject />", () => {
  const project = {
    name: "Music",
    projectId: "1",
    userId: "tarrak123",
    docId: "D0kOgOJG9gZXzD9QcM7o",
  };

  describe('Success', () => {
      it('renders the project', () => {
          const { getByText } = render(<IndividualProject project={project} />)
          expect(getByText('Music')).toBeTruthy();
      })

      it('renders the delete overlay and then deletes a project using onClick', () => {
        const { queryByTestId ,getByText } = render(<IndividualProject project={project} />)

        fireEvent.click(queryByTestId('delete-project'));
        expect(getByText('Are you sure want to delete this project?')).toBeTruthy()

        fireEvent.click(getByText('Delete'))
    })

      it('renders the delete overlay and then deletes a project using onKeyDown', () => {
        const { queryByTestId ,getByText } = render(<IndividualProject project={project} />)

        fireEvent.keyDown(queryByTestId('delete-project'));
        expect(getByText('Are you sure want to delete this project?')).toBeTruthy()

        fireEvent.keyDown(getByText('Delete'))
    })
  })
});
