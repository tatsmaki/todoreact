import styled from 'styled-components';

interface StyledLiProps {
  isActive: boolean
  theme: any
}

export const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props: any) => props.children.props.theme.secondary};
`;

export const StyledUl = styled.ul`
  display: flex;
  width: 100vw;
  height: 6vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  width: 20vw;
  background: ${(props: StyledLiProps) => {
    if (props.isActive) {
      return props.theme.primary;
    }
    return props.theme.secondary;
  }};
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8vw;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 6vh;
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    &:hover {
      filter: invert(.2) sepia(1);
    }
  }

  .close {
    display: ${(props: StyledLiProps) => {
    /* eslint-disable */
      if (props.isActive) {
        return 'flex';
      }
      return 'none';
    }};
    position: absolute;
    width: 0;
    margin-left: 18vw;
  }
`;

export const lightTheme = {
  primary: 'white',
  secondary: '#e6e6e6',
  drag: '#b9b9b9',
  text: 'black',
  border: '#c9c9c9',
};

export const darkTheme = {
  primary: '#1f1f1f',
  secondary: '#3d3d3d',
  drag: '#5f5f5f',
  text: 'white',
  border: '#1b1b1b',
};
