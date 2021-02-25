import styled from 'styled-components';

import { StyledButtonProps } from './types';

const StyledButton = styled.button`
  width: ${(props: StyledButtonProps) => props.buttonWidth};
  height: 3vw;
  background: ${(props: StyledButtonProps) => props.backgroundColor};
  border: ${(props: StyledButtonProps) => props.border};
  border-radius: 0.5vw;
  font-family: 'Open Sans', sans-serif;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
