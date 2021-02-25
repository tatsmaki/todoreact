import React, { PureComponent } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import TaskProps from './types';

import Button from '../../elements/button';

import { StyledTask, StyledTaskDescription, StyledTaskToolsWrapper } from './styles';

class Task extends PureComponent<TaskProps, {}> {
  deleteTask = () => {
    const { deleteTask, columnId, taskId } = this.props;
    deleteTask(columnId, taskId);
  };

  editTask = () => {
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
            <StyledTaskToolsWrapper>
              <Button
                buttonWidth="3vw"
                backgroundColor="none"
                border="none"
                handleClick={this.deleteTask}
              >
                <span className="material-icons">
                  close
                </span>
              </Button>
            </StyledTaskToolsWrapper>
          </StyledTask>
        )}
      </Draggable>
    );
  }
}

export default Task;
