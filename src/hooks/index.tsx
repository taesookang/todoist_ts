import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";
import { Query } from "@firebase/firestore-types";
import { Task, Func, Project } from "../types";

export const useTasks = (selectedProject: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [archivedTasks, setArchivedTasks] = useState<Task[]>([]);

  useEffect((): Func => {
    let unsubscribe: Query | Func = firebase
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
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === null
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks: Task[] = snapshot.docs.map((task) => ({
        id: task.id,
        task: task.get("task"),
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD/MM/YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe;
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = (): {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
} => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

      firebase
        .firestore()
        .collection("projects")
        .where("userId", "==", "tarrak123")
        .orderBy("projectId")
        .get()
        .then((snapshot) => {
          const allProjects = snapshot.docs.map((project) => ({
            ...project.data(),
            docId: project.id,
            projectId: project.get("projectId"),
          }));
  
          if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
          }
        })
        .catch(err => console.log(err));

  }, [projects]);

  return { projects, setProjects };
};
