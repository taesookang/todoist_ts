import React from "react";
import { firebase } from "../firebase";

interface Props {
  id: string;
}

export const Checkbox: React.FC<Props> = ({ id }) => {
  const achievedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      achieved: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => achievedTask}
    ></div>
    
  );
};

export default Checkbox;
