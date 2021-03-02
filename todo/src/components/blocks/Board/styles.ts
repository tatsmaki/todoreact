import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 94vh;
  width: 100vw;
  background: ${({ theme }) => theme.primary};

  @media (max-width: 1024px) {
    overflow-x: scroll;
    align-items: start;
  }
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

  @media (max-width: 1024px) {
    justify-content: space-evenly;
    width: 190vw;
  }
`;
