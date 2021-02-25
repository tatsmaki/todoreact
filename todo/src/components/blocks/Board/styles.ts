import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledBoardTools = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 10vh;
`;

export const StyledColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;
