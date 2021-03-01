import styled from 'styled-components';

export const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  min-height: 12vh;
  box-sizing: border-box;
  margin: 0.5vw;
  padding-left: 0.5vw;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5vw;
  border: 1px ${({ theme }) => theme.border} solid;
  flex-shrink: 0;
`;

export const StyledTaskDescription = styled.span`
  width: 80%;
  white-space: pre-wrap;
  font-family: 'Open Sans', sans-serif;
`;

export const StyledTaskToolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
