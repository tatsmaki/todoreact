import React, { Component } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import Task from 'components/blocks/Task';

import StyledTaskList from './styles';
import TaskListProps from './types';

class TaskList extends Component<TaskListProps, {}> {
  render() {
    const {
      columnId,
      tasks,
      tasksOrder,
      filter,
      deleteTask,
      editTask,
    } = this.props;
    return (
      <Droppable droppableId={columnId}>
        {(provided: DroppableProvided, snapshot: any) => (
          <StyledTaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {
              tasksOrder
                .filter((item: string) => tasks[item].content.includes(filter))
                .map((item: string, index: number) => {
                  const task = tasks[item];
                  return (
                    <Task
                      description={task.content}
                      key={task.id}
                      index={index}
                      columnId={columnId}
                      taskId={task.id}
                      deleteTask={deleteTask}
                      editTask={editTask}
                    />
                  );
                })
            }
            {provided.placeholder}
          </StyledTaskList>
        )}
      </Droppable>
    );
  }
}

export default TaskList;
