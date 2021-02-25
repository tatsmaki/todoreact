import { v4 as uuidv4 } from 'uuid';

const task1 = uuidv4();
const task2 = uuidv4();
const task3 = uuidv4();
const task4 = uuidv4();
const task5 = uuidv4();

const testBoard = {
  tasks: {
    [task1]: { id: task1, content: 'learn react' },
    [task2]: { id: task2, content: 'create projects board' },
    [task3]: { id: task3, content: 'fix storage' },
    [task4]: { id: task4, content: 'nice uuid btw' },
    [task5]: { id: task5, content: 'go home' },
  },
  columns: {
    column1: {
      title: 'To Do',
      id: 'column1',
      tasksOrder: [task1],
    },
    column2: {
      title: 'In Progress',
      id: 'column2',
      tasksOrder: [task2, task5],
    },
    column3: {
      title: 'Done',
      id: 'column3',
      tasksOrder: [task3, task4],
    },
  },
  columnsOrder: ['column1', 'column2', 'column3'],
};

export default testBoard;
