import React, { Component } from 'react';

import Input from 'components/elements/Input';
import Button from 'components/elements/Button';

import StyledCreateBoard from './styles';

interface CreateBoardProps {
  createNewBoard: (name: string) => void
}

interface CreateBoardState {
  name: string
}

class CreateBoard extends Component<CreateBoardProps, CreateBoardState> {
  state = {
    name: '',
  };

  controlInput = (value: string) => {
    this.setState({ name: value });
  };

  confirmName = () => {
    const { name } = this.state;
    if (name) {
      const { createNewBoard } = this.props;
      createNewBoard(name);
      this.setState({ name: '' });
    }
  };

  render() {
    return (
      <StyledCreateBoard>
        <div>
          <span>
            Create New Board
          </span>
          <Input
            placeholder="Enter Board Name"
            handleInput={this.controlInput}
          />
          <Button
            buttonWidth="17vw"
            backgroundColor="none"
            border="1px rgba(0, 0, 0, 0.1) solid"
            handleClick={this.confirmName}
          >
            Confirm
          </Button>
        </div>
      </StyledCreateBoard>
    );
  }
}

export default CreateBoard;
