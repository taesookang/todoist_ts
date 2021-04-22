import React, { useContext } from "react";
import { useProjects } from "../hooks";
import { Project } from "../types";

interface ProjectsContextType {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectsContext = React.createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => [],
});

export const ProjectsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
