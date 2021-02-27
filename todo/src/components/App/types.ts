import { BoardState } from 'components/blocks/Board/types';

export interface AppProps {
}

export type BoardType = {
  name: string
  id: string
  data: BoardState
};

export interface AppState {
  boards: {
    [key: string]: BoardType
  }
  activeBoard: string
}
