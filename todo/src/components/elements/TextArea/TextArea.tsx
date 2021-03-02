import React, { PureComponent, RefObject } from 'react';

import StyledTextarea from './styles';
import { TextAreaProps, TextAreaState } from './types';

class TextArea extends PureComponent<TextAreaProps, TextAreaState> {
  textArea: RefObject<HTMLTextAreaElement>;

  constructor(props: TextAreaProps) {
    super(props);
    this.state = { value: '' };
    this.textArea = React.createRef();
  }

  componentDidMount() {
    this.textArea.current.focus();
  }

  controlTextArea = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLTextAreaElement;
    this.setState({ value });
    const { taskWrite } = this.props;
    taskWrite(value);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledTextarea
        placeholder="Enter a note"
        value={value}
        ref={this.textArea}
        onChange={this.controlTextArea}
      />
    );
  }
}

export default TextArea;
