import moment from "moment";
import React from "react";
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from "react-icons/fa";

interface Props {
  showTaskDate: boolean;
  setTaskDate: React.Dispatch<React.SetStateAction<string>>;
  setShowTaskDate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskDate: React.FC<Props> = ({
  showTaskDate,
  setShowTaskDate,
  setTaskDate,
}) => {
  return (
    <>
      {showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
          <ul className="task-date__list">
            <li>
              <div
                data-testid="task-date-today"
                tabIndex={0}
                role="button"
                aria-label="Select today as the task date"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().format("DD/MM/YYYY"));
                }}
                onKeyDown={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().format("DD/MM/YYYY"));
                }}
              >
                <span>
                  <FaSpaceShuttle />
                </span>
                <span>Today</span>
              </div>
            </li>

            <li>
              <div
                data-testid="task-date-tomorrow"
                tabIndex={0}
                role="button"
                aria-label="Select tomorrow as the task date"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
                }}
                onKeyDown={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
                }}
              >
                <span>
                  <FaSun />
                </span>
                <span>Tomorrow</span>
              </div>
            </li>

            <li>
              <div
                data-testid="task-date-next-week"
                tabIndex={0}
                role="button"
                aria-label="Select next week as the task date"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
                }}
                onKeyDown={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
                }}
              >
                <span>
                  <FaRegPaperPlane />
                </span>
                <span>Next week</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TaskDate;
