import styled from 'styled-components';

import { StyledButtonProps } from './types';

const StyledButton = styled.button`
  display: ${(props: StyledButtonProps) => {
    if (!props.isHidden === false) {
      return 'none';
    }
    return 'static';
  }};
  width: ${(props: StyledButtonProps) => {
    if (props.buttonWidth) {
      return props.buttonWidth;
    }
    return '3vw';
  }};
  height: 3vw;
  background: ${(props: StyledButtonProps) => {
    if (props.backgroundColor) {
      return props.backgroundColor;
    }
    return props.theme.primary;
  }};
  border: ${(props: StyledButtonProps) => {
    if (props.border) {
      return props.border;
    }
    return `1px ${props.theme.border} solid`;
  }};
  border-radius: 0.5vw;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  color: ${({ theme }) => theme.text};
  transition: filter .2s linear;

  .material-icons {
    font-size: 1.6vw;
    user-select: none;

    @media (max-width: 1024px) {
      font-size: 3vw;
      margin-left: -3vw;
    }
  }

  &:hover {
    cursor: pointer;
    filter: invert(.2) sepia(1);
  }
`;

export default StyledButton;
