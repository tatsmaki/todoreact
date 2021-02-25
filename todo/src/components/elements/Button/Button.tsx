import React, { PureComponent } from 'react';

import ButtonProps from './types';

import StyledButton from './styles';

class Button extends PureComponent<ButtonProps, {}> {
  render() {
    const { children, wide, handleClick } = this.props;
    return (
      <StyledButton wide={wide} onClick={handleClick}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
