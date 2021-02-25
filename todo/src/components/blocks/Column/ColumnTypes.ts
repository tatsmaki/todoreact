import { BoardTasks } from '../Board/BoardTypes';

export interface ColumnProps {
  count: number
  title: string
  columnId: string
  tasks: BoardTasks
  tasksOrder: Array<string>
  addNewTask: (columnId: string, description: string) => void
  deleteTask: (columnId: string, taskId: string) => void
}

export interface ColumnState {
  isCreateNewTask: boolean;
  newTask: string;
}