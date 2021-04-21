import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";
import { Query } from "@firebase/firestore-types";
import { Task, TaskS, Func, Projects } from '../types'



export const useTasks = ( selectedProject: string ) => {
  const [tasks, setTasks] = useState<TaskS>([]);
  const [achievedTasks, setAchievedTasks] = useState<TaskS>([]);

  useEffect((): Func => {
    let unsubscribe: Query | Func = 
    firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "tarrak123");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYY")
          ))
        : selectedProject === "INBOX" || selectedProject === null
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks: TaskS = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task: Task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.achieved !== true
            )
          : newTasks.filter((task) => task.achieved !== true)
      );
      setAchievedTasks(newTasks.filter((task) => task.achieved !== false));
    });

    return () => unsubscribe;
  }, [selectedProject]);

  return { tasks, achievedTasks };
};



export const useProjects = () => {
  const [projects, setProjects] = useState<Projects>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "tarrak123")
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects: Projects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
