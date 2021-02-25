import { BoardTasks } from '../board/types';

export default interface TaskListProps {
  columnId: string
  tasks: BoardTasks
  tasksOrder: Array<string>
  filter: string
  deleteTask: (columnId: string, taskId: string) => void
}
