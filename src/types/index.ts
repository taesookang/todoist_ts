interface Task {
  id: string;
  task: string;
  archived?: boolean;
  date?: string;
  projectId?: string;
  userId?: string;
}

type Func = () => void;

interface Project {
  projectId: string;
  docId: string;
  name?: string;
  userId?: string;
  key?: string;
}

interface Title {
  key: string,
  name: string
}

export type { Task, Func, Project, Title };
