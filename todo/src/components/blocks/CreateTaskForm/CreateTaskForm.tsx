import React, { PureComponent } from 'react';

import CreateTaskFormProps from './CreateTaskFormTypes';

import Textarea from '../../elements/Textarea';
import Button from '../../elements/Button';

class CreateTaskForm extends PureComponent<CreateTaskFormProps, {}> {
  render() {
    const { isRender } = this.props;
    const { taskWrite, confirmNewTask, canselNewTask } = this.props;
    if (isRender) {
      return (
        <div className="form">
          <Textarea
            taskWrite={taskWrite}
          />
          <div className="buttons">
            <Button
              click={confirmNewTask}
              content="Add"
            />
            <Button
              click={canselNewTask}
              content="Cansel"
            />
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default CreateTaskForm;
