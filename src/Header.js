import React from 'react';
import headerImage from './resources/header.png';
class Header extends React.Component {

  render() {
    return (
      <img src={headerImage} alt="Header" width='100%'/>
    );
  }
}
export default Header;