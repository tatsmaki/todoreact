import React, { PureComponent } from 'react';

import StyledButton from './styles';
import { ButtonProps } from './types';

class Button extends PureComponent<ButtonProps, {}> {
  render() {
    const {
      children,
      buttonWidth,
      backgroundColor,
      border,
      isHidden,
      handleClick,
    } = this.props;
    return (
      <StyledButton
        buttonWidth={buttonWidth}
        backgroundColor={backgroundColor}
        border={border}
        isHidden={isHidden}
        onClick={handleClick}
      >
        {children}
      </StyledButton>
    );
  }
}

export default Button;
