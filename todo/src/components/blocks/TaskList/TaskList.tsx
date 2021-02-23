import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Task from '../Task';

interface TaskListProps {
  name: string;
  data: Array<string>;
  deleteTask: (name: string, id: number) => void;
}

class TaskList extends Component<TaskListProps, {}> {
  constructor(props: TaskListProps) {
    super(props);

    this.state = {};
  }

  render() {
    const { data, name, deleteTask } = this.props;
    return (
      <div className="task-list">
        {data.map((item: string, i: number) => (
          <Task
            name={name}
            description={item}
            key={uuidv4()}
            id={i}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
