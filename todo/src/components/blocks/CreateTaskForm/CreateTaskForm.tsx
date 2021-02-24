import React, { Component } from 'react';

import Textarea from '../../elements/Textarea';
import Button from '../../elements/Button';

interface CreateTaskFormProps {
  isRender: boolean;
  confirmNewTask: () => void;
  canselNewTask: () => void;
  taskWrite: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

class CreateTaskForm extends Component<CreateTaskFormProps, {}> {
  constructor(props: CreateTaskFormProps) {
    super(props);

    this.state = {};
  }

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
