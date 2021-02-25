import React, { Component } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import TaskListProps from './types';

import Task from '../Task';

class TaskList extends Component<TaskListProps, {}> {
  render() {
    const {
      columnId,
      tasks,
      tasksOrder,
      deleteTask,
    } = this.props;
    return (
      <Droppable droppableId={columnId}>
        {(provided: DroppableProvided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasksOrder.map((item: string, index: number) => {
              const task = tasks[item];
              return (
                <Task
                  description={task.content}
                  key={task.id}
                  index={index}
                  columnId={columnId}
                  taskId={task.id}
                  deleteTask={deleteTask}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TaskList;
