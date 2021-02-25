import React, { Component } from 'react';

import { ColumnProps, ColumnState } from './ColumnTypes';

import Button from '../../elements/Button';
import CreateTaskForm from '../CreateTaskForm';
import TaskList from '../TaskList';

class Column extends Component<ColumnProps, ColumnState> {
  constructor(props: ColumnProps) {
    super(props);
    this.state = {
      isCreateNewTask: false,
      newTask: '',
    };
  }

  private createNewTask = () => {
    this.setState({ isCreateNewTask: true });
  };

  private confirmNewTask = () => {
    const { addNewTask, columnId } = this.props;
    const { newTask } = this.state;
    this.setState({ isCreateNewTask: false });
    addNewTask(columnId, newTask);
  };

  private canselNewTask = () => {
    this.setState({ isCreateNewTask: false });
  };

  private taskWrite = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({ newTask: (event.target as HTMLTextAreaElement).value });
  };

  render() {
    const {
      count,
      title,
      columnId,
      tasks,
      tasksOrder,
      deleteTask,
    } = this.props;
    const { isCreateNewTask } = this.state;
    return (
      <div className="column">
        <div className="tools">
          <div className="column_header">
            <span className="count">{count}</span>
            <span className="title">{title}</span>
          </div>
          <Button
            click={this.createNewTask}
            content="+"
          />
        </div>
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
          deleteTask={deleteTask}
        />
      </div>
    );
  }
}

export default Column;
