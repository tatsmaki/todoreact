import styled from 'styled-components';

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default StyledTaskList;
