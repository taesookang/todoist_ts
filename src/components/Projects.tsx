import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import IndividualProject from './IndividualProject';

export const Projects: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    <>
      {projects &&
        projects.map((project) => (
          <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className={
              active === project.projectId
                ? "active sidebar__project"
                : "sidebar__project"
            }
            onKeyDown={() => {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }}
            onClick={() => {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }} 
          >
            <IndividualProject project={project}/>
          </li>
        ))}
    </>
  );
};

export default Projects;
