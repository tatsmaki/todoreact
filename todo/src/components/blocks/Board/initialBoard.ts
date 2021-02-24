const initialBoard = {
  tasks: {
    task1: {
      id: 'task1',
      content: 'Add your tasks',
    },
  },

  columns: {
    column1: {
      title: 'To Do',
      id: 'column1',
      tasksOrder: ['task1'],
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

  columnOrder: ['column1', 'column2', 'column3'],
};

export default initialBoard;
