import React, { Component } from 'react';

import Column from '../Column';

interface BoardProps {}

interface BoardState {
  [key: string]: Array<string>
}

class Board extends Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);

    this.state = {
      toDo: ['task6', 'task7'],
      inProgress: ['task4', 'task5'],
      done: ['task1', 'task2', 'task3'],
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(dataKey: string, description: string) {
    if (description) {
      this.setState((prevState: BoardState) => ({
        [dataKey]: [...prevState[dataKey], description],
      }));
    }
  }

  deleteTask(dataKey: string, id: number) {
    this.setState((prevState: BoardState) => ({
      [dataKey]: prevState[dataKey].filter((_: string, i: number) => i !== id),
    }));
  }

  render() {
    const { toDo, inProgress, done } = this.state;
    return (
      <div className="board">
        <div className="board-tools" />
        <div className="columns">
          <Column
            count={toDo.length}
            name="To Do"
            dataKey="toDo"
            data={toDo}
            addNewTask={this.addNewTask}
            deleteTask={this.deleteTask}
          />
          <Column
            count={inProgress.length}
            name="In Progress"
            dataKey="inProgress"
            data={inProgress}
            addNewTask={this.addNewTask}
            deleteTask={this.deleteTask}
          />
          <Column
            count={done.length}
            name="Done"
            dataKey="done"
            data={done}
            addNewTask={this.addNewTask}
            deleteTask={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default Board;
