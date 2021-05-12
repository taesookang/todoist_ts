import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "../context";

beforeEach(cleanup);

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({ selectedProject: "1" })),
}));

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve("Never mock firebase")),
      })),
    })),
  },
}));

// let db = firebase.firestore()
// let add = jest.fn(() => Promise.resolve("Never mock firebase"))
// jest.spyOn(db, 'collection').mockReturnValue(({ add } as unknown) as any)

describe("<AddTask />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Success", () => {
    it("renders the <AddTask />", () => {
      const setShowQuickAddTask = jest.fn();

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      expect(queryByTestId("add-task-comp")).toBeTruthy();
    });

    it("renders the <AddTask /> quick overlay", () => {
      const setShowQuickAddTask = jest.fn();

      const { queryAllByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      expect(queryAllByTestId("quick-add-task")).toBeTruthy();
    });

    it("renders the <AddTask /> main showable using onClick", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();
    });

    it("renders the <AddTask /> main showable using onKeyDown", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();
    });

    it("renders the <AddTask /> project overlay when clicked using onClick", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("show-project-overlay") as HTMLElement);
      expect(queryByTestId("project-overlay")).toBeTruthy();
    });

    it("renders the <AddTask /> project overlay when clicked using onKeyDown", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("show-project-overlay") as HTMLElement);
      expect(queryByTestId("project-overlay")).toBeTruthy();
    });

    it("renders the <AddTask /> task date overlay when clicked using onClick", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={false}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
    });

    it("renders the <AddTask /> task date overlay when clicked using onKeyDown", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={false}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
    });

    it("hides the <AddTask /> main when cancel is clicked using onClick", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={false}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("add-task-main-cancel") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeFalsy();
    });

    it("hides the <AddTask /> main when cancel is clicked using onKeyDown", () => {
      const setShowQuickAddTask = jest.fn();
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={false}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );
      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("add-task-main-cancel") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeFalsy();
    });

    it("renders <AddTask /> for quick add task and then clicks cancel using onClick", () => {
      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.click(queryByTestId("add-task-quick-cancel") as HTMLElement);
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> for quick add task and then clicks cancel using onKeyDown", () => {
      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("add-task-quick-cancel") as HTMLElement);
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the TODAY using onClick", () => {
      const mockedUseSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
        typeof useSelectedProjectValue
      >;

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "TODAY",
        setSelectedProject: () => "TODAY",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      const theInput = queryByTestId("add-task-content") as HTMLInputElement;

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-content")).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am a new task and I am amazing !!" },
      });
      expect(theInput.value).toBe("I am a new task and I am amazing !!");

      fireEvent.click(queryByTestId("add-task") as HTMLElement);
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the TODAY using onKeyDown", () => {
      const mockedUseSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
        typeof useSelectedProjectValue
      >;

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "TODAY",
        setSelectedProject: () => "TODAY",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      const theInput = queryByTestId("add-task-content") as HTMLInputElement;

      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-content")).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am a new task and I am amazing !!" },
      });
      expect(theInput.value).toBe("I am a new task and I am amazing !!");

      fireEvent.keyDown(queryByTestId("add-task") as HTMLElement);
      expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it("renders <AddTask /> and adds a task to the NEXT_7", () => {
      const mockedUseSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
        typeof useSelectedProjectValue
      >;

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "NEXT_7",
        setSelectedProject: () => "NEXT_7",
      }));

      const showQuickAddTask = false;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      const theInput = queryByTestId("add-task-content") as HTMLInputElement;
      expect(theInput).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am a new task and I am amazing !!" },
      });
      expect(theInput.value).toBe("I am a new task and I am amazing !!");

      fireEvent.click(queryByTestId("add-task") as HTMLElement);
    });

    it("renders <AddTask /> and adds a task to the NEXT_7 using onKeyDown", () => {
      const mockedUseSelectedProjectValue = useSelectedProjectValue as jest.MockedFunction<
        typeof useSelectedProjectValue
      >;

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "NEXT_7",
        setSelectedProject: () => "NEXT_7",
      }));

      const showQuickAddTask = false;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain={true}
          shouldShowMain={false}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      fireEvent.keyDown(queryByTestId("show-main-action") as HTMLElement);
      const theInput = queryByTestId("add-task-content") as HTMLInputElement;
      expect(theInput).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am a new task and I am amazing !!" },
      });
      expect(theInput.value).toBe("I am a new task and I am amazing !!");

      fireEvent.keyDown(queryByTestId("add-task") as HTMLElement);
    });

    it("renders <AddTask /> and adds a task with a task date TODAY", () => {
      const mockedUseSelectedProjectValue = jest.fn(useSelectedProjectValue);

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "1",
        setSelectedProject: () => "1",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      const theInput = queryByTestId("add-task-content") as HTMLInputElement;

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-content")).toBeTruthy();
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am the most amazing task ever!" },
      });
      expect(theInput.value).toBe("I am the most amazing task ever!");

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.click(queryByTestId("task-date-today") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("task-date-today") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("add-task") as HTMLElement);
    });

    it("renders <AddTask /> and adds a task with a task date TOMORROW", () => {
      const mockedUseSelectedProjectValue = jest.fn(useSelectedProjectValue);

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "1",
        setSelectedProject: () => "1",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      const theInput = queryByTestId("add-task-content") as HTMLInputElement;

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-content")).toBeTruthy();
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am the most amazing task ever!" },
      });
      expect(theInput.value).toBe("I am the most amazing task ever!");

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.click(queryByTestId("task-date-tomorrow") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("task-date-tomorrow") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("add-task") as HTMLElement);
    });

    it("renders <AddTask /> and adds a task with a task date NEXT WEEK", () => {
      const mockedUseSelectedProjectValue = jest.fn(useSelectedProjectValue);

      mockedUseSelectedProjectValue.mockImplementation(() => ({
        selectedProject: "1",
        setSelectedProject: () => "1",
      }));

      const showQuickAddTask = true;
      const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      const theInput = queryByTestId("add-task-content") as HTMLInputElement;

      fireEvent.click(queryByTestId("show-main-action") as HTMLElement);
      expect(queryByTestId("add-task-content")).toBeTruthy();
      expect(queryByTestId("add-task-main")).toBeTruthy();

      fireEvent.change(theInput, {
        target: { value: "I am the most amazing task ever!" },
      });
      expect(theInput.value).toBe("I am the most amazing task ever!");

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.click(queryByTestId("task-date-next-week") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("show-task-date-overlay") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("task-date-next-week") as HTMLElement);
      expect(queryByTestId("task-date-overlay")).toBeFalsy();

      fireEvent.click(queryByTestId("add-task") as HTMLElement);
    });
    
  });
});
