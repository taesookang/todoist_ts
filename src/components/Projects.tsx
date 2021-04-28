import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import IndividualProject from "./IndividualProject";

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
          >
            <div
              aria-label={`Select ${project.name} as the task project`}
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
