import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import { BoardProps, BoardState } from './types';
import initialBoard from './initialBoard';

import Column from '../column';

import { StyledBoard, StyledBoardTools, StyledColumns } from './styles';
import SearchTool from '../searchTool';

class Board extends Component<BoardProps, BoardState> {
  state: BoardState = initialBoard;

  addNewTask = (columnId: string, description: string) => {
    if (description) {
      const newState = { ...this.state };
      const newTaskId = uuidv4();
      newState.tasks[newTaskId] = {
        id: newTaskId,
        content: description,
      };
      newState.columns[columnId].tasksOrder.unshift(newTaskId);
      this.setState(newState);
    }
  };

  deleteTask = (columnId: string, taskId: string) => {
    const newState = { ...this.state };
    delete newState.tasks[taskId];
    newState.columns[columnId].tasksOrder = newState.columns[columnId].tasksOrder
      .filter((id: string) => id !== taskId);
    this.setState(newState);
  };

  onDragEnd = (result: DropResult) => {
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

  filterCards = (value: string) => {
    this.setState({ filter: value });
  };

  render() {
    const {
      tasks,
      columns,
      columnsOrder,
      filter,
    } = this.state;
    return (
      <StyledBoard>
        <StyledBoardTools>
          <SearchTool
            filterCards={this.filterCards}
          />
        </StyledBoardTools>
        <StyledColumns>
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
                  filter={filter}
                  addNewTask={this.addNewTask}
                  deleteTask={this.deleteTask}
                />
              );
            })}
          </DragDropContext>
        </StyledColumns>
      </StyledBoard>
    );
  }
}

export default Board;
