import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import Column from 'components/blocks/Column';
import SearchTool from 'components/blocks/SearchTool';

import { StyledBoard, StyledBoardTools, StyledColumns } from './styles';
import { BoardProps, BoardState, BoardData } from './types';

class Board extends Component<BoardProps, BoardState> {
  state = { filter: '' };

  addNewTask = (columnId: string, description: string) => {
    if (description) {
      const { boardData } = this.props;
      const newTaskId = uuidv4();

      boardData.tasks[newTaskId] = {
        id: newTaskId,
        content: description,
      };
      boardData.columns[columnId].tasksOrder.unshift(newTaskId);

      this.updateAppState(boardData);
    }
  };

  deleteTask = (columnId: string, taskId: string) => {
    const { boardData } = this.props;

    delete boardData.tasks[taskId];
    boardData.columns[columnId].tasksOrder = boardData.columns[columnId].tasksOrder
      .filter((id: string) => id !== taskId);

    this.updateAppState(boardData);
  };

  editTask = (description: string, taskId: string) => {
    const { boardData } = this.props;

    boardData.tasks[taskId].content = description;

    this.updateAppState(boardData);
  };

  onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    const { boardData } = this.props;
    const { columns } = boardData;

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
        boardData.columns[newColumn.id] = newColumn;

        this.updateAppState(boardData);
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

        boardData.columns[newStart.id] = newStart;
        boardData.columns[newFinish.id] = newFinish;

        this.updateAppState(boardData);
      }
    }
  };

  filterCards = (value: string) => {
    this.setState({ filter: value });
  };

  updateAppState = (boardData: BoardData) => {
    const { updateAppState } = this.props;
    updateAppState(boardData);
  };

  render() {
    const { boardData } = this.props;
    const { tasks, columns, columnsOrder } = boardData;
    const { filter } = this.state;
    return (
      <StyledBoard>
        <StyledBoardTools>
          <SearchTool
            filterCards={this.filterCards}
          />
        </StyledBoardTools>
        <StyledColumns>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {columnsOrder.map((columnId: string) => {
              const column = columns[columnId];
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
                  editTask={this.editTask}
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
