import React from "react";
import { firebase } from "../firebase";

interface Props {
  id: string;
}

export const Checkbox: React.FC<Props> = ({ id }) => {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archivedTask}
    >
      <span className="checkbox" />
    </div>
    
  );
};

export default Checkbox;
