import styled from 'styled-components';

interface StyledTaskListProps {
  isDraggingOver: boolean
  theme?: any
}

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  background-color: ${(props: StyledTaskListProps) => {
    if (props.isDraggingOver) {
      return `${props.theme.drag}`;
    }
    return '';
  }};
  transition: background-color 1s ease;
`;

export default StyledTaskList;
