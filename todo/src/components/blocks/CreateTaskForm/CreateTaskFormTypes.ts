export default interface CreateTaskFormProps {
  isRender: boolean;
  confirmNewTask: () => void
  canselNewTask: () => void
  taskWrite: (event: React.FormEvent<HTMLTextAreaElement>) => void
}
