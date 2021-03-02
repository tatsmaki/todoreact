import styled from 'styled-components';

export const StyledToggle = styled.div`
  width: 2.3vw;
  height: 2.3vw;
  margin-left: 0.4vw;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  z-index: 2;
`;

export const StyledCheckbox = styled.input`
  display: none;
`;

export const StyledSwitch = styled.div`
  position: absolute;
  left: 90vw;
  top: 10vh;
  display: flex;
  align-items: center;
  margin-right: 10vw;

  &:hover {
    cursor: pointer;
  }

  ${StyledCheckbox}:checked + ${StyledToggle} {
    margin-left: 2.9vw;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 5.5vw;
  height: 3vw;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  border-radius: 2vw;
  user-select: none;

  .material-icons {
    font-size: 2vw;
  }
`;
