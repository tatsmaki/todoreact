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
import initialBoard from 'components/blocks/Board/initialBoard';

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
  }

  createNewBoard = (name: string) => {
    const id = uuidv4();
    const newState = { ...this.state };
    newState.boards[id] = {
      name,
      id,
      data: { ...initialBoard },
    };
    newState.activeBoard = id;
    this.setState(newState);
  };

  setActiveLink = (event: any) => {
    const linkId = event.target.id;
    this.setState({ activeBoard: linkId }, this.updateLocalStorage);
  };

  checkActiveLink = (linkId: string) => {
    const { activeBoard } = this.state;
    if (linkId === activeBoard) {
      return true;
    }
    return false;
  };

  updateLocalStorage = () => {
    localStorage.setItem('react-boards', JSON.stringify(this.state));
  };

  render() {
    const { boards, activeBoard } = this.state;
    const WrappedBoard = (props: any) => (
      <Board
        {...props}
        data={activeBoard === 'add' ? { ...initialBoard } : boards[activeBoard].data}
        updateLocalStorage={this.updateLocalStorage}
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
