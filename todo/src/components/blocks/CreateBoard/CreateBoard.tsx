import React, { Component } from 'react';

import Input from 'components/elements/Input';
import Button from 'components/elements/Button';

import StyledCreateBoard from './styles';

interface CreateBoardProps {
  match: any
  location: any
  history: any
  createNewBoard: (name: string, history: any) => void
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
    const { history } = this.props;

    if (name) {
      const { createNewBoard } = this.props;
      createNewBoard(name, history);
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
