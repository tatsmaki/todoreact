export interface BoardProps {
}

export type BoardTasks = {
  [key: string]: {
    id: string
    content: string
  }
};

export type BoardColumns = {
  [key: string]: {
    title: string
    id: string
    tasksOrder: Array<string>
  }
};

export interface BoardState {
  tasks: BoardTasks
  columns: BoardColumns
  columnsOrder: Array<string>
}
