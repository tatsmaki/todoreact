export interface BoardProps {
  boardData: BoardData
  updateAppState: (boardData: BoardData) => void
}

export interface BoardState {
  filter: string
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

export interface BoardData {
  tasks: BoardTasks
  columns: BoardColumns
  columnsOrder: Array<string>
}
