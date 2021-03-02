import React, { PureComponent } from 'react';

import TextArea from 'components/elements/TextArea';
import Button from 'components/elements/Button';

import { StyledForm, StyledWrapper } from './styles';
import CreateTaskFormProps from './types';

class CreateTaskForm extends PureComponent<CreateTaskFormProps, {}> {
  render() {
    const {
      isRender,
      taskWrite,
      confirmNewTask,
      canselNewTask,
    } = this.props;
    if (isRender) {
      return (
        <StyledForm>
          <TextArea
            taskWrite={taskWrite}
          />
          <StyledWrapper>
            <Button
              buttonWidth="49%"
              handleClick={confirmNewTask}
            >
              Add
            </Button>
            <Button
              buttonWidth="49%"
              handleClick={canselNewTask}
            >
              Cansel
            </Button>
          </StyledWrapper>
        </StyledForm>
      );
    }
    return <div />;
  }
}

export default CreateTaskForm;
