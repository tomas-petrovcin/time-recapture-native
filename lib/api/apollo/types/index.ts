type Session = {
  id: string;
  name: string;
  notes: string;
  taskId: string;
} | null;

type Task = {
  id: string;
  name: string;
  color: string;
  description: string;
  sessions: Session[];
};
