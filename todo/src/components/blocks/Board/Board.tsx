import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import initialBoard from './initialBoard';
import testBoard from './testBoard';
import Column from '../Column';

interface BoardProps {}

interface BoardState {
  tasks: {
    [key: string]: {
      id: string
      content: string
    }
  }
  columns: {
    [key: string]: {
      title: string
      id: string
      tasksOrder: Array<string>
    }
  }
  columnOrder: Array<string>
}

class Board extends Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);

    this.state = testBoard;

    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(columnId: string, description: string) {
    const newState = { ...this.state };
    const newTaskId = uuidv4();
    newState.tasks[newTaskId] = {
      id: newTaskId,
      content: description,
    };
    newState.columns[columnId].tasksOrder.push(newTaskId);
    this.setState(newState);
  }

  deleteTask(columnId: string, taskId: string) {
    const newState = { ...this.state };
    delete newState.tasks[taskId];
    newState.columns[columnId].tasksOrder = newState.columns[columnId].tasksOrder
      .filter((id: string) => id !== taskId);
    this.setState(newState);
  }

  render() {
    const { tasks, columns, columnOrder } = this.state;
    return (
      <div className="board">
        <div className="board-tools" />
        <div className="columns">
          {
            columnOrder.map((id: string) => {
              const column = columns[id];
              return (
                <Column
                  count={column.tasksOrder.length}
                  title={column.title}
                  columnId={column.id}
                  key={column.id}
                  tasks={tasks}
                  tasksOrder={column.tasksOrder}
                  addNewTask={this.addNewTask}
                  deleteTask={this.deleteTask}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Board;
