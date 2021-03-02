import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  height: 12vh;
  resize: none;
  outline: none;
  box-sizing: border-box;
  padding: 0.5vw;
  border: 1px ${({ theme }) => theme.border} solid;
  border-radius: 0.5vw;
  font-size: 1.5vw;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
`;

export default StyledTextArea;
