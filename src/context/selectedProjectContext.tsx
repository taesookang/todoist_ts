import React, { useState, useContext } from "react";

export interface SelectedProjectType {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedProjectContext = React.createContext<SelectedProjectType>({
  selectedProject: "INBOX",
  setSelectedProject: () => "",
});

export const SelectedProjectProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
