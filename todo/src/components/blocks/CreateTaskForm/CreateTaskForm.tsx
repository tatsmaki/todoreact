import React, { PureComponent } from 'react';

import CreateTaskFormProps from './types';

import TextArea from '../../elements/textArea';
import Button from '../../elements/button';

import { StyledForm, StyledWrapper } from './styles';

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
              backgroundColor="#fff"
              border="1px rgba(0, 0, 0, 0.1) solid"
              handleClick={confirmNewTask}
            >
              Add
            </Button>
            <Button
              buttonWidth="49%"
              backgroundColor="#fff"
              border="1px rgba(0, 0, 0, 0.1) solid"
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
