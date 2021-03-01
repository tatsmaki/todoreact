import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import CreateBoard from 'components/blocks/CreateBoard';
import Board from 'components/blocks/Board';
import { BoardData } from 'components/blocks/Board/types';
import InitialBoard from 'components/blocks/Board/initialBoard';

import { StyledApp, StyledLi } from './styles';
import { AppProps, AppState, BoardType } from './types';
import initialApp from './initialApp';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = initialApp;
    if (JSON.parse(localStorage.getItem('react-boards'))) {
      const savedState = JSON.parse(localStorage.getItem('react-boards'));
      this.state = savedState;
    }

    window.onbeforeunload = () => {
      localStorage.setItem('react-boards', JSON.stringify(this.state));
    };
  }

  createNewBoard = (name: string) => {
    const id = uuidv4();
    const newState = { ...this.state };
    newState.boards[id] = new InitialBoard(id, name);
    newState.activeBoard = id;
    this.setState(newState);
  };

  setActiveLink = (event: any) => {
    const linkId = event.target.id;
    this.setState({ activeBoard: linkId });
  };

  checkActiveLink = (linkId: string) => {
    const { activeBoard } = this.state;
    if (linkId === activeBoard) {
      return true;
    }
    return false;
  };

  updateAppState = (boardData: BoardData) => {
    const { activeBoard } = this.state;
    const newState = { ...this.state };
    newState.boards[activeBoard].data = boardData;
    this.setState(newState);
  };

  render() {
    const { boards, activeBoard } = this.state;
    const WrappedBoard = (props: any) => (
      <Board
        {...props}
        boardData={boards[activeBoard].data}
        updateAppState={this.updateAppState}
      />
    );
    return (
      <StyledApp>
        <Router>
          <div>
            <ul>
              {
                Object.values(boards).map((board: BoardType) => (
                  <StyledLi
                    isActive={this.checkActiveLink(board.id)}
                    key={board.id}
                  >
                    <Link
                      id={board.id}
                      to={`/${board.id}`}
                      onClick={this.setActiveLink}
                    >
                      {board.name}
                    </Link>
                  </StyledLi>
                ))
              }
              <StyledLi
                isActive={this.checkActiveLink('add')}
              >
                <Link
                  id="add"
                  to="/"
                  onClick={this.setActiveLink}
                >
                  <span id="add" className="material-icons">
                    add
                  </span>
                </Link>
              </StyledLi>
            </ul>
            <Switch>
              <Route exact path="/">
                <CreateBoard
                  createNewBoard={this.createNewBoard}
                />
              </Route>
              <Route path="/:board" component={WrappedBoard} />
            </Switch>
          </div>
        </Router>
      </StyledApp>
    );
  }
}

export default App;
