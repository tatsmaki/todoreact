import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 94vh;
  width: 100vw;
  background: ${({ theme }) => theme.primary};
`;

export const StyledBoardTools = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 6vh;
`;

export const StyledColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;
