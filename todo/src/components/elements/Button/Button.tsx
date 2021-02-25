import React, { PureComponent } from 'react';

import ButtonProps from './ButtonTypes';

class Button extends PureComponent<ButtonProps, {}> {
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
