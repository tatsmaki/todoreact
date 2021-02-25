import React, { PureComponent } from 'react';

import SearchToolProps from './types';

import Input from '../../elements/Input';

import StyledSearchWrapper from './styles';

class SearchTool extends PureComponent<SearchToolProps, {}> {
  render() {
    const { filterCards } = this.props;
    return (
      <StyledSearchWrapper>
        <span className="material-icons">
          search
        </span>
        <Input
          filterCards={filterCards}
        />
      </StyledSearchWrapper>
    );
  }
}

export default SearchTool;
