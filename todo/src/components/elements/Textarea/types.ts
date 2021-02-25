export interface TextAreaProps {
  taskWrite: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

export interface TextAreaState {
  value: string;
}
