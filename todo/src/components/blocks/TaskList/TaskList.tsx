import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Task from '../Task';

interface TaskListProps {
  dataKey: string;
  data: Array<string>;
  deleteTask: (dataKey: string, id: number) => void;
}

class TaskList extends Component<TaskListProps, {}> {
  constructor(props: TaskListProps) {
    super(props);

    this.state = {};
  }

  render() {
    const { dataKey, data, deleteTask } = this.props;
    return (
      <div className="task-list">
        {data.map((item: string, i: number) => (
          <Task
            description={item}
            key={uuidv4()}
            dataKey={dataKey}
            id={i}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
