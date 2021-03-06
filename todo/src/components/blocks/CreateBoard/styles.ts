import styled from 'styled-components';

const StyledCreateBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;
  background: ${({ theme }) => theme.primary};;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30vh;
    color: ${({ theme }) => theme.text};

    span {
    font-size: 2vw;
    font-family: 'Open Sans', sans-serif;
  }
  }
`;

export default StyledCreateBoard;
