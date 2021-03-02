import React, { PureComponent, RefObject } from 'react';

import StyledInput from './styles';
import { InputProps, InputState } from './types';

class Input extends PureComponent<InputProps, InputState> {
  input: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.state = { value: '' };
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  controlInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    this.setState({ value });
    const { handleInput } = this.props;
    handleInput(value);
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <StyledInput
        placeholder={placeholder}
        value={value}
        ref={this.input}
        onChange={this.controlInput}
      />
    );
  }
}

export default Input;
