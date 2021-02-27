import styled from 'styled-components';

interface StyledLiProps {
  isActive: boolean
}

export const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #a1a1a1cc;

  ul {
    display: flex;
    width: 100vw;
    height: 5vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const StyledLi = styled.li`
  ${(props: StyledLiProps) => {
    switch (props.isActive) {
      case true: {
        return 'background: white;';
      }
      default: {
        return 'background: #ffffffbb;';
      }
    }
  }}
  font-family: 'Open Sans', sans-serif;
  font-size: 2vw;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 5vh;
    text-decoration: none;
    color: black;

    &:hover {
      background: #ffffffaa;
    }
  }
`;
