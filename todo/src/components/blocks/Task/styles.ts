import styled from 'styled-components';

export const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 10vh;
  box-sizing: border-box;
  margin-top: 1vw;
  padding-left: 0.5vw;
  background: #ffffff;
  border-radius: 0.5vw;
  border: 1px rgba(0, 0, 0, 0.1) solid;
`;

export const StyledTaskDescription = styled.span`
  width: 80%;
  white-space: pre-wrap;
`;
