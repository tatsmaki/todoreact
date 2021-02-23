import React, { Component } from 'react';

interface ButtonProps {
  click: () => void;
  content: string;
}

class Button extends Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);

    this.state = {};
  }

  render() {
    const { click, content } = this.props;
    return (
      <button className="button" type="button" onClick={click}>
        {content}
      </button>
    );
  }
}

export default Button;
