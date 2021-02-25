import styled from 'styled-components';

export const StyledColumn = styled.div`
  width: 30vw;
  height: 80vh;
  box-sizing: border-box;
  padding-top: 1vw;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.5vw;
  border: 1px rgba(0, 0, 0, 0.1) solid;
`;

export const StyledColumnTools = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const StyledHeader = styled.div`
  display: flex;
`;

export const StyledTaskCount = styled.span`
  width: 2vw;
  height: 2vw;
  background: rgba(155, 141, 141, 0.3);
  text-align: center;
  border-radius: 50%;
`;

export const StyledTitle = styled.span`
  margin-left: 1vw;
`;
