import React, { Component } from 'react';

import { ColumnProps, ColumnState } from './types';

import Button from '../../elements/Button';
import CreateTaskForm from '../CreateTaskForm';
import TaskList from '../TaskList';

import {
  StyledColumn,
  StyledHeader,
  StyledTitle,
  StyledColumnTools,
  StyledTaskCount,
} from './styles';

class Column extends Component<ColumnProps, ColumnState> {
  state = {
    isCreateNewTask: false,
    newTask: '',
  };

  createNewTask = () => {
    this.setState({ isCreateNewTask: true });
  };

  confirmNewTask = () => {
    const { addNewTask, columnId } = this.props;
    const { newTask } = this.state;
    addNewTask(columnId, newTask);
    this.setState({
      isCreateNewTask: false,
      newTask: '',
    });
  };

  canselNewTask = () => {
    this.setState({
      isCreateNewTask: false,
      newTask: '',
    });
  };

  taskWrite = (value: string) => {
    this.setState({ newTask: value });
  };

  render() {
    const {
      count,
      title,
      columnId,
      tasks,
      tasksOrder,
      filter,
      deleteTask,
    } = this.props;
    const { isCreateNewTask } = this.state;
    return (
      <StyledColumn>
        <StyledColumnTools>
          <StyledHeader>
            <StyledTaskCount>
              {count}
            </StyledTaskCount>
            <StyledTitle>
              {title}
            </StyledTitle>
          </StyledHeader>
          <Button
            buttonWidth="3vw"
            backgroundColor="none"
            border="none"
            handleClick={this.createNewTask}
          >
            <span className="material-icons">
              add
            </span>
          </Button>
        </StyledColumnTools>
        <CreateTaskForm
          isRender={isCreateNewTask}
          confirmNewTask={this.confirmNewTask}
          canselNewTask={this.canselNewTask}
          taskWrite={this.taskWrite}
        />
        <TaskList
          columnId={columnId}
          tasks={tasks}
          tasksOrder={tasksOrder}
          filter={filter}
          deleteTask={deleteTask}
        />
      </StyledColumn>
    );
  }
}

export default Column;
