import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import IndividualProject from "./IndividualProject";

interface Props {
  activeValue: string | null
}


export const Projects: React.FC<Props> = ({ activeValue }) => {
  const [active, setActive] = useState<string | null>(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue()


  return (
    <>
      {projects &&
        projects.map((project) => (
          <li
            data-testid="project-action-parent"
            key={project.projectId}
            data-doc-id={project.docId}
            className={
              active === project.projectId
              ? "active sidebar__project"
              : "sidebar__project"
            }
            >
            <div
              aria-label={`Select ${project.name} as the task project`}
              data-testid="project-action"
              className="project-wrapper"
              role="button"
              tabIndex={0}
              onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
              onKeyDown={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
            >
              <IndividualProject project={project} />
            </div>
          </li>
        ))}
    </>
  );
};

export default Projects;
