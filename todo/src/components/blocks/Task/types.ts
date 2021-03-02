export interface TaskProps {
  description: string
  columnId: string
  taskId: string
  index: number
  deleteTask: (columnId: string, taskId: string) => void
  editTask: (description: string, taskId: string) => void
}

export interface TaskState {
  isEditing: boolean
}
