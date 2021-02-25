import React, { PureComponent } from 'react';

import { ButtonProps } from './types';

import StyledButton from './styles';

class Button extends PureComponent<ButtonProps, {}> {
  render() {
    const {
      children,
      buttonWidth,
      backgroundColor,
      border,
      handleClick,
    } = this.props;
    return (
      <StyledButton
        buttonWidth={buttonWidth}
        backgroundColor={backgroundColor}
        border={border}
        onClick={handleClick}
      >
        {children}
      </StyledButton>
    );
  }
}

export default Button;
