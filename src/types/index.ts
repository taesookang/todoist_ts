interface Task {
  id: string;
  achieved?: boolean;
  date?: string;
  projectId?: string;
  task?: string;
  userId?: string;
}

type Func = () => void;

interface Project {
  projectId: string;
  docId?: string;
  name?: string;
  userId?: string;
}

export type { Task, Func, Project };
