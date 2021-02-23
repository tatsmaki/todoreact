import React, { Component } from 'react';

import Column from '../Column';

interface BoardProps {}

interface BoardState {
  toDo: Array<string>;
  inProgress: Array<string>;
  done: Array<string>;
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

  addNewTask(name: string, description: string) {
    if (description) {
      switch (name) {
        case 'To Do': {
          this.setState((prevState) => ({
            toDo: [...prevState.toDo, description],
          }));
          break;
        }
        case 'In Progress': {
          this.setState((prevState) => ({
            inProgress: [...prevState.inProgress, description],
          }));
          break;
        }
        case 'Done': {
          this.setState((prevState) => ({
            done: [...prevState.done, description],
          }));
          break;
        }
        default:
          break;
      }
    }
  }

  deleteTask(name: string, id: number) {
    switch (name) {
      case 'To Do': {
        this.setState((prevState) => ({
          toDo: prevState.toDo.filter((_, i) => i !== id),
        }));
        break;
      }
      case 'In Progress': {
        this.setState((prevState) => ({
          inProgress: prevState.inProgress.filter((_, i) => i !== id),
        }));
        break;
      }
      case 'Done': {
        this.setState((prevState) => ({
          done: prevState.done.filter((_, i) => i !== id),
        }));
        break;
      }
      default:
        break;
    }
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
            data={toDo}
            addNewTask={this.addNewTask}
            deleteTask={this.deleteTask}
          />
          <Column
            count={inProgress.length}
            name="In Progress"
            data={inProgress}
            addNewTask={this.addNewTask}
            deleteTask={this.deleteTask}
          />
          <Column
            count={done.length}
            name="Done"
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
