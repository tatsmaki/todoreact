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
  background: #ffffff;
  border-radius: 0.5vw;
  border: 1px rgba(0, 0, 0, 0.1) solid;
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
