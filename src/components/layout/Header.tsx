import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AddTask } from "../AddTask";
import { useAddTaskValue } from "../../context";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ darkMode, setDarkMode }) => {

  const {
    shouldShowMain,
    setShouldShowMain,
    showQuickAddTask,
    setShowQuickAddTask,
  } = useAddTaskValue();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={() => setDarkMode(!darkMode)}
              >
                { darkMode ? <FaSun /> : <FaMoon /> }
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

export default Header;
