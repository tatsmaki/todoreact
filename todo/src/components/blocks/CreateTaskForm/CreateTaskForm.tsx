import React, { PureComponent } from 'react';

import CreateTaskFormProps from './types';

import TextArea from '../../elements/TextArea';
import Button from '../../elements/Button';

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
            <Button wide handleClick={confirmNewTask}>
              Add
            </Button>
            <Button wide handleClick={canselNewTask}>
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
