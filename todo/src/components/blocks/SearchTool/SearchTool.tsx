import React, { PureComponent } from 'react';

import Input from 'components/elements/Input';

import StyledSearchWrapper from './styles';
import SearchToolProps from './types';

class SearchTool extends PureComponent<SearchToolProps, {}> {
  render() {
    const { filterCards } = this.props;
    return (
      <StyledSearchWrapper>
        <span className="material-icons">
          search
        </span>
        <Input
          placeholder="Filter Cards"
          handleInput={filterCards}
        />
      </StyledSearchWrapper>
    );
  }
}

export default SearchTool;
