import React, { PureComponent, RefObject } from 'react';

import { InputProps, InputState } from './types';

import StyledInput from './styles';

class Input extends PureComponent<InputProps, InputState> {
  input: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.state = { value: '' };
    this.input = React.createRef();
  }

  controlInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    this.setState({ value });
    const { filterCards } = this.props;
    filterCards(value);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledInput
        placeholder="Filter cards"
        value={value}
        ref={this.input}
        onChange={this.controlInput}
      />
    );
  }
}

export default Input;
