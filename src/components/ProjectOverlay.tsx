import React from "react";
import { useProjectsValue } from '../context/projectContext'

interface Props {
  setProject: React.Dispatch<React.SetStateAction<string>>;
  showProjectOverlay: boolean;
  setShowProjectOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectOverlay: React.FC<Props> = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue()

  return (
    <>
      {projects && showProjectOverlay && (
        <div className="project-overlay" data-testid="project-overlay">
          <ul className="project-overlay__list">
            {projects.map((project) => (
              <li key={project.projectId}>
                <div
                  data-testid="project-overlay-action"
                  onClick={() => {
                    setProject(project.projectId);
                    setShowProjectOverlay(false);
                  }}
                  onKeyDown={() => {
                    setProject(project.projectId);
                    setShowProjectOverlay(false);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Select the task project"
                >
                  {project.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProjectOverlay;
