import React, { PureComponent, RefObject } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import Button from 'components/elements/Button';

import { StyledTask, StyledTaskDescription, StyledTaskToolsWrapper } from './styles';
import { TaskProps, TaskState } from './types';

class Task extends PureComponent<TaskProps, TaskState> {
  description: RefObject<HTMLDivElement>;

  constructor(props: TaskProps) {
    super(props);
    this.description = React.createRef();
    this.state = { isEditing: false };
  }

  deleteTask = () => {
    const { deleteTask, columnId, taskId } = this.props;
    deleteTask(columnId, taskId);
  };

  changeTaskState = () => {
    let { isEditing } = this.state;
    isEditing = !isEditing;
    if (isEditing) {
      this.description.current.contentEditable = 'true';
      this.description.current.focus();
    } else {
      const { editTask, taskId } = this.props;
      this.description.current.contentEditable = 'false';
      editTask(this.description.current.textContent, taskId);
    }
    this.setState({ isEditing });
  };

  render() {
    const { description, taskId, index } = this.props;
    const { isEditing } = this.state;
    return (
      <Draggable draggableId={taskId} index={index}>
        {(provided: DraggableProvided, snapshot: any) => (
          <StyledTask
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <StyledTaskDescription
              ref={this.description}
              isEditing={isEditing}
            >
              {description}
            </StyledTaskDescription>
            <StyledTaskToolsWrapper>
              <Button
                backgroundColor="none"
                border="none"
                handleClick={this.deleteTask}
              >
                <span className="material-icons">
                  close
                </span>
              </Button>
              <Button
                backgroundColor="none"
                border="none"
                isHidden={isEditing}
                handleClick={this.changeTaskState}
              >
                <span className="material-icons">
                  more_horiz
                </span>
              </Button>
              <Button
                backgroundColor="none"
                border="none"
                isHidden={!isEditing}
                handleClick={this.changeTaskState}
              >
                <span className="material-icons">
                  done
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
