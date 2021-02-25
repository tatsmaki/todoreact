import React, { PureComponent, RefObject } from 'react';

import TextareaProps from './TextareaTypes';

class Textarea extends PureComponent<TextareaProps, {}> {
  private textarea: RefObject<HTMLTextAreaElement>;

  constructor(props: TextareaProps) {
    super(props);
    this.textarea = React.createRef();
  }

  componentDidMount() {
    this.textarea.current.focus();
  }

  render() {
    const { taskWrite } = this.props;
    return (
      <textarea
        className="textarea"
        placeholder="Enter a note"
        ref={this.textarea}
        onChange={taskWrite}
      />
    );
  }
}

export default Textarea;
