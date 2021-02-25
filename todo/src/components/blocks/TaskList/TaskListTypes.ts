import { BoardTasks } from '../Board/BoardTypes';

export default interface TaskListProps {
  columnId: string
  tasks: BoardTasks
  tasksOrder: Array<string>
  deleteTask: (columnId: string, taskId: string) => void
}
