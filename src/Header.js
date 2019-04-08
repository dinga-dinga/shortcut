import React from 'react';
import headerImage from './resources/header.png';
class Header extends React.Component {

  render() {
    return (
        <img src={headerImage} alt="Header" width='100%' style={{display: 'block'}}/>
    );
  }
}
export default Header;