import React, { PureComponent } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import TaskProps from './TaskTypes';

import Button from '../../elements/Button';

class Task extends PureComponent<TaskProps, {}> {
  private deleteTask = () => {
    const { deleteTask, columnId, taskId } = this.props;
    deleteTask(columnId, taskId);
  };

  render() {
    const { description, taskId, index } = this.props;
    return (
      <Draggable draggableId={taskId} index={index}>
        {(provided: DraggableProvided) => (
          <div
            className="task"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span className="description">
              {description}
            </span>
            <Button
              click={this.deleteTask}
              content="×"
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
