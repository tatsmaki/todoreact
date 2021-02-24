import React, { Component } from 'react';

import Button from '../../elements/Button';
import CreateTaskForm from '../CreateTaskForm';
import TaskList from '../TaskList';

interface ColumnProps {
  count: number
  title: string
  columnId: string
  tasks: {
    [key: string]: {
      id: string
      content: string
    }
  }
  tasksOrder: Array<string>
  addNewTask: (columnId: string, description: string) => void
  deleteTask: (columnId: string, taskId: string) => void
}

interface ColumnState {
  isCreateNewTask: boolean;
  newTask: string;
}

class Column extends Component<ColumnProps, ColumnState> {
  constructor(props: ColumnProps) {
    super(props);

    this.state = {
      isCreateNewTask: false,
      newTask: '',
    };

    this.createNewTask = this.createNewTask.bind(this);
    this.confirmNewTask = this.confirmNewTask.bind(this);
    this.canselNewTask = this.canselNewTask.bind(this);
    this.taskWrite = this.taskWrite.bind(this);
  }

  createNewTask() {
    this.setState({ isCreateNewTask: true });
  }

  confirmNewTask() {
    const { addNewTask, columnId } = this.props;
    const { newTask } = this.state;
    this.setState({ isCreateNewTask: false });
    addNewTask(columnId, newTask);
  }

  canselNewTask() {
    this.setState({ isCreateNewTask: false });
  }

  taskWrite(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ newTask: (event.target as HTMLTextAreaElement).value });
  }

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
