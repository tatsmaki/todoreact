import React, { PureComponent } from 'react';

import {
  StyledSwitch,
  StyledBackground,
  StyledCheckbox,
  StyledToggle,
} from './styles';

interface SwitchThemeProps {
  isDarkTheme: boolean
  changeTheme: (isDarkTheme: boolean) => void
}

class SwitchTheme extends PureComponent<SwitchThemeProps, {}> {
  handleClick = () => {
    let { isDarkTheme } = this.props;
    isDarkTheme = !isDarkTheme;
    const { changeTheme } = this.props;
    changeTheme(isDarkTheme);
  };

  handleChange = () => {
  };

  render() {
    const { isDarkTheme } = this.props;
    return (
      <StyledSwitch onClick={this.handleClick}>
        <StyledBackground>
          <span className="material-icons">
            dark_mode
          </span>
          <span className="material-icons">
            light_mode
          </span>
        </StyledBackground>
        <StyledCheckbox type="checkbox" checked={isDarkTheme} onChange={this.handleChange} />
        <StyledToggle />
      </StyledSwitch>
    );
  }
}

export default SwitchTheme;
