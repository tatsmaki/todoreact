import React, { Component } from 'react';

import Button from '../../elements/Button';
import CreateTaskForm from '../CreateTaskForm';
import TaskList from '../TaskList';

interface ColumnProps {
  count: number;
  name: string;
  dataKey: string;
  data: Array<string>;
  addNewTask: (dataKey: string, description: string) => void;
  deleteTask: (dataKey: string, id: number) => void;
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
    const { addNewTask, dataKey } = this.props;
    const { newTask } = this.state;
    this.setState({ isCreateNewTask: false });
    addNewTask(dataKey, newTask);
  }

  canselNewTask() {
    this.setState({ isCreateNewTask: false });
  }

  taskWrite(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ newTask: (event.target as HTMLTextAreaElement).value });
  }

  render() {
    const { count, name, data } = this.props;
    const { dataKey, deleteTask } = this.props;
    const { isCreateNewTask } = this.state;
    return (
      <div className="column">
        <div className="tools">
          <div className="column_header">
            <span className="count">{count}</span>
            <span className="name">{name}</span>
          </div>
          <Button click={this.createNewTask} content="+" />
        </div>
        <CreateTaskForm
          isRender={isCreateNewTask}
          confirmNewTask={this.confirmNewTask}
          canselNewTask={this.canselNewTask}
          taskWrite={this.taskWrite}
        />
        <TaskList
          dataKey={dataKey}
          data={data}
          deleteTask={deleteTask}
        />
      </div>
    );
  }
}

export default Column;
