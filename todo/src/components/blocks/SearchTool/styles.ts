import styled from 'styled-components';

const StyledSearchWrapper = styled.div`
  position: absolute;
  left: 22vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55vw;
  margin: auto;
  color: ${({ theme }) => theme.text};
`;

export default StyledSearchWrapper;
