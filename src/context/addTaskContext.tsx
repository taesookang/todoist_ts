import React, { useState, useContext } from "react";

interface Props {
  shouldShowMain: boolean;
  showQuickAddTask: boolean;
  setShowQuickAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldShowMain: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTaskContext = React.createContext<Props>({
  shouldShowMain: false,
  showQuickAddTask: false,
  setShowQuickAddTask: () => false,
  setShouldShowMain: () => false
});

export const AddTaskProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <AddTaskContext.Provider
      value={{
        shouldShowMain,
        showQuickAddTask,
        setShowQuickAddTask,
        setShouldShowMain,
      }}
    >
      {children}
    </AddTaskContext.Provider>
  );
};

export const useAddTaskValue = () => useContext(AddTaskContext);
