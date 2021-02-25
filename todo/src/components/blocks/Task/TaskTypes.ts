export default interface TaskProps {
  description: string
  columnId: string
  taskId: string
  index: number
  deleteTask: (columnId: string, taskId: string) => void
}
