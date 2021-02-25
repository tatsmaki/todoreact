import React, { PureComponent } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import TaskProps from './types';

import Button from '../../elements/Button';

import { StyledTask, StyledTaskDescription } from './styles';

class Task extends PureComponent<TaskProps, {}> {
  deleteTask = () => {
    const { deleteTask, columnId, taskId } = this.props;
    deleteTask(columnId, taskId);
  };

  render() {
    const { description, taskId, index } = this.props;
    return (
      <Draggable draggableId={taskId} index={index}>
        {(provided: DraggableProvided) => (
          <StyledTask
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <StyledTaskDescription>
              {description}
            </StyledTaskDescription>
            <Button wide={false} handleClick={this.deleteTask}>
              ×
            </Button>
          </StyledTask>
        )}
      </Draggable>
    );
  }
}

export default Task;
