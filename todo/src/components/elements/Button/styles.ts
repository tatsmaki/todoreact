import styled from 'styled-components';

interface StyledButtonProps {
  wide: boolean
}

const StyledButton = styled.button`
  width: ${(props: StyledButtonProps) => (props.wide ? '49%' : '3vw')};
  height: 3vw;
  background: ${(props: StyledButtonProps) => (props.wide ? '#ffffff' : 'none')};
  border: ${(props: StyledButtonProps) => (props.wide ? '1px rgba(0, 0, 0, 0.1) solid' : 'none')};
  border-radius: 0.5vw;
  font-size: ${(props: StyledButtonProps) => (props.wide ? '' : '2vw')};

  &:hover {
    outline: none;
    color: blue;
    cursor: pointer;
  }
`;

export default StyledButton;
