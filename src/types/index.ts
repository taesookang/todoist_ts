interface Task {
  id: string;
  archived?: boolean;
  date?: string;
  projectId?: string;
  task?: string;
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
