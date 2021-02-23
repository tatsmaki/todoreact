import React, { Component } from 'react';

import Button from '../../elements/Button';

interface TaskProps {
  name: string;
  description: string;
  id: number;
  deleteTask: (name: string, id: number) => void;
}

class Task extends Component<TaskProps, {}> {
  task: HTMLDivElement;

  constructor(props: TaskProps) {
    super(props);

    this.task = null;

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask() {
    const { deleteTask, name, id } = this.props;
    deleteTask(name, id);
  }

  render() {
    const { description } = this.props;
    return (
      <div
        className="task"
        ref={(task: HTMLDivElement) => {
          this.task = task;
        }}
      >
        <span className="description">{description}</span>
        <Button click={this.deleteTask} content="×" />
      </div>
    );
  }
}

export default Task;
