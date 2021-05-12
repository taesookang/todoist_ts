import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Tasks from "../components/Tasks";
import { useSelectedProjectValue, useProjectsValue, useAddTaskValue } from "../context";
import { useTasks } from "../hooks/index";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
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
    ],
  })),
  useAddTaskValue: jest.fn()
}));

jest.mock("../hooks", () => ({
  useTasks: () => ({
    tasks: [
      {
        id: "foot4qUCndKfe6MOHhQC",
        archived: false,
        date: "04/05/2021",
        projectId: "1",
        task: "today?",
        userId: "tarrak123",
      },
    ],
  }),
}));

const mockedProjectValue = useProjectsValue as jest.MockedFunction<typeof useProjectsValue>
const mockedSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<typeof useSelectedProjectValue>
const mockedAddTaskValue = useAddTaskValue as jest.MockedFunction<typeof useAddTaskValue>

beforeEach(cleanup)

describe('<Tasks />', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders tasks', () => {
        mockedAddTaskValue.mockReturnValueOnce({
            shouldShowMain: true,
            setShouldShowMain: jest.fn(),
            showQuickAddTask: false,
            setShowQuickAddTask: jest.fn()
        })

        mockedProjectValue.mockReturnValue({
            projects: [
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
              ],
            setProjects: jest.fn(() => [])
        })

        mockedSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => "INBOX"),
            selectedProject: 'INBOX'
        }))

        const { queryByTestId } = render(<Tasks />)
        expect(queryByTestId('tasks')).toBeTruthy()
        expect(queryByTestId('project-name').textContent).toBe('Inbox')
    })
    it('renders tasks with a project title', () => {
        mockedAddTaskValue.mockReturnValueOnce({
            shouldShowMain: true,
            setShouldShowMain: jest.fn(),
            showQuickAddTask: false,
            setShowQuickAddTask: jest.fn()
        })

        mockedProjectValue.mockReturnValue({
            projects: [
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
              ],
            setProjects: jest.fn(() => [])
        })

        mockedSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => "1"),
            selectedProject: '1'
        }))

        const { queryByTestId } = render(<Tasks />)
        expect(queryByTestId('tasks')).toBeTruthy()
        expect(queryByTestId('project-name').textContent).toBe('🎵 Music')
    })
})
