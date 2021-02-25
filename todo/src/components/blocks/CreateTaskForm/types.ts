export default interface CreateTaskFormProps {
  isRender: boolean;
  confirmNewTask: () => void
  canselNewTask: () => void
  taskWrite: (value: string) => void
}
