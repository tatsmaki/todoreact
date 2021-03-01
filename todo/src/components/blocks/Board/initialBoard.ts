import { BoardData } from './types';

class InitialBoard {
  name: string;

  id: string;

  data: BoardData;

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
    this.data = {
      tasks: {},
      columns: {
        column1: {
          title: 'To Do',
          id: 'column1',
          tasksOrder: [] as string[],
        },
        column2: {
          title: 'In Progress',
          id: 'column2',
          tasksOrder: [] as string[],
        },
        column3: {
          title: 'Done',
          id: 'column3',
          tasksOrder: [] as string[],
        },
      },
      columnsOrder: ['column1', 'column2', 'column3'],
    };
  }
}

export default InitialBoard;
