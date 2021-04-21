interface Task {
  id: string;
  achieved?: boolean;
  date?: string;
  projectId?: string;
  task?: string;
  userId?: string;
}

type TaskS = Task[];

type Func = () => void;

interface Project {
    docId: string;
    name?: string;
    projectId?: string;
    userId?: string;
}

type Projects = Project[]


export type { Task, TaskS, Func, Project, Projects }