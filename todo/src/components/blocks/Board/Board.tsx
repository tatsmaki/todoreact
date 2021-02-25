import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import { BoardProps, BoardState } from './BoardTypes';
// import initialBoard from './initialBoard';
import testBoard from './testBoard';

import Column from '../Column';

class Board extends Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    this.state = testBoard;
  }

  private addNewTask = (columnId: string, description: string) => {
    const newState = { ...this.state };
    const newTaskId = uuidv4();
    newState.tasks[newTaskId] = {
      id: newTaskId,
      content: description,
    };
    newState.columns[columnId].tasksOrder.unshift(newTaskId);
    this.setState(newState);
  };

  private deleteTask = (columnId: string, taskId: string) => {
    const newState = { ...this.state };
    delete newState.tasks[taskId];
    newState.columns[columnId].tasksOrder = newState.columns[columnId].tasksOrder
      .filter((id: string) => id !== taskId);
    this.setState(newState);
  };

  private onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    const { columns } = this.state;

    if (destination) {
      const start = columns[source.droppableId];
      const finish = columns[destination.droppableId];

      if (start === finish) {
        const newTasksOrder = Array.from(start.tasksOrder);
        newTasksOrder.splice(source.index, 1);
        newTasksOrder.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          tasksOrder: newTasksOrder,
        };

        const newState = {
          ...this.state,
          columns: {
            ...columns,
            [newColumn.id]: newColumn,
          },
        };

        this.setState(newState);
      } else {
        const startTasksOrder = Array.from(start.tasksOrder);
        startTasksOrder.splice(source.index, 1);
        const newStart = {
          ...start,
          tasksOrder: startTasksOrder,
        };

        const finishTasksOrder = Array.from(finish.tasksOrder);
        finishTasksOrder.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          tasksOrder: finishTasksOrder,
        };

        const newState = {
          ...this.state,
          columns: {
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };

        this.setState(newState);
      }
    }
  };

  render() {
    const { tasks, columns, columnsOrder } = this.state;
    return (
      <div className="board">
        <div className="board-tools" />
        <div className="columns">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {columnsOrder.map((id: string) => {
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
            })}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default Board;
