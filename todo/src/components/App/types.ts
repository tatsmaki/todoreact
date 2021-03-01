import { BoardData } from 'components/blocks/Board/types';

export interface AppProps {
}

export type BoardType = {
  name: string
  id: string
  data: BoardData
};

export interface AppState {
  boards: {
    [key: string]: BoardType
  }
  activeBoard: string
}
