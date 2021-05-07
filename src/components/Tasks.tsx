import React, { useEffect } from "react";
import Checkbox from "./Checkbox";
import AddTask from "./AddTask";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import {
  useSelectedProjectValue,
  useProjectsValue,
  useAddTaskValue,
} from "../context";

export const Tasks: React.FC = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue() || {};
  const { tasks } = useTasks(selectedProject);
  const { shouldShowMain, setShowQuickAddTask } = useAddTaskValue();

  let projectName: string | undefined | null;

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject)?.name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject)?.name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  }, [projectName]);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name"> {projectName} </h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask
        showAddTaskMain={true}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={false}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </div>
  );
};

export default Tasks;
