import React, { Component } from 'react';

interface TextareaProps {
  taskWrite: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

class Textarea extends Component<TextareaProps, {}> {
  textarea: HTMLTextAreaElement;

  constructor(props: TextareaProps) {
    super(props);

    this.textarea = null;
  }

  componentDidMount() {
    this.textarea.focus();
  }

  render() {
    const { taskWrite } = this.props;
    return (
      <textarea
        className="textarea"
        placeholder="Enter a note"
        onChange={taskWrite}
        ref={(textarea: HTMLTextAreaElement) => {
          this.textarea = textarea;
        }}
      />
    );
  }
}

export default Textarea;
