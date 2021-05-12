import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";

interface Props {
  shouldShow: boolean
}

export const AddProject: React.FC<Props> = ({ shouldShow }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { projects, setProjects } = useProjectsValue() || {};

  const addProject = async () => {
    projectName &&
      await firebase
        .firestore()
        .collection("projects")
        .add({
          projectId,
          name: projectName,
          userId: "tarrak123",
        })
        .then(() => {
          setProjects([...projects]);
          setProjectName("");
          setShow(false);
        });
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            className="add-project__cancel"
            data-testid="hide-project-overlay"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        className="add-project__text"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
