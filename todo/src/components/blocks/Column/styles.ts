import styled from 'styled-components';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 80vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.secondary};
  border-radius: 0.5vw;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border: 1px ${({ theme }) => theme.border} solid;
`;

export const StyledColumnTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 5vh;
  flex: none;
  margin: 1vh auto;
`;

export const StyledHeader = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.text};
`;

export const StyledTaskCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4vw;
  height: 2.4vw;
  background: rgba(155, 141, 141, 0.3);
  border-radius: 50%;
`;

export const StyledTitle = styled.span`
  margin-left: 1vw;
`;
