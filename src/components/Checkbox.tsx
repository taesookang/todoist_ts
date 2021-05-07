import React from "react";
import { firebase } from "../firebase";

interface Props{
  id: string;
  taskDesc: string;
}

export const Checkbox: React.FC<Props> = ({ id, taskDesc }) => {
  const archivedTask = async () => {
    await firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      aria-label={`Mark ${taskDesc} as done?`}
      onClick={() => archivedTask()}
      onKeyDown={() => archivedTask()}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
