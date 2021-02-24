import React, { Component } from 'react';

import Task from '../Task';

interface TaskListProps {
  columnId: string
  tasks: {
    [key: string]: {
      id: string
      content: string
    }
  }
  tasksOrder: Array<string>
  deleteTask: (columnId: string, taskId: string) => void;
}

class TaskList extends Component<TaskListProps, {}> {
  constructor(props: TaskListProps) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      columnId,
      tasks,
      tasksOrder,
      deleteTask,
    } = this.props;
    return (
      <div className="task-list">
        {
          tasksOrder.map((item: string) => {
            const task = tasks[item];
            return (
              <Task
                description={task.content}
                key={task.id}
                columnId={columnId}
                taskId={task.id}
                deleteTask={deleteTask}
              />
            );
          })
        }
      </div>
    );
  }
}

export default TaskList;
