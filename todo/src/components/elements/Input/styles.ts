import styled from 'styled-components';

const StyledInput = styled.input`
  width: 50vw;
  height: 4vh;
  font-size: 1.5vw;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  border: ${({ theme }) => theme.border};
`;

export default StyledInput;
